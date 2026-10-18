"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* Ray-marched metaballs: glossy liquid blobs that merge, split, and lean toward the pointer.
   The orb is centred on the element marked [data-orb-anchor] (the portrait). */

const vert = /* glsl */ `void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const frag = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec2 uCenter;
uniform float uSize;
uniform vec2 uMouse;

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float map(vec3 p) {
  float t = uTime * 0.42;
  float d = length(p - vec3(sin(t) * 0.7, cos(t * 1.3) * 0.5, 0.0)) - 0.95;
  d = smin(d, length(p - vec3(cos(t * 0.8) * 1.25, sin(t * 1.1) * 1.0, sin(t * 0.6) * 0.5)) - 0.55, 0.75);
  d = smin(d, length(p - vec3(sin(t * 1.4 + 2.0) * 1.2, cos(t * 0.7 + 1.0) * 1.15, cos(t) * 0.4)) - 0.5, 0.75);
  d = smin(d, length(p - vec3(cos(t * 1.2 + 4.0) * 0.9, sin(t * 1.6 + 3.0) * 1.2, 0.3)) - 0.42, 0.65);
  d = smin(d, length(p - vec3(uMouse * 1.5, 0.7)) - 0.38, 0.85);
  return d;
}

vec3 calcNormal(vec3 p) {
  vec2 e = vec2(0.002, 0.0);
  return normalize(vec3(
    map(p + e.xyy) - map(p - e.xyy),
    map(p + e.yxy) - map(p - e.yxy),
    map(p + e.yyx) - map(p - e.yyx)));
}

vec3 grad(float x) {
  vec3 c0 = vec3(0.161, 0.592, 1.000);
  vec3 c1 = vec3(0.659, 0.333, 0.969);
  vec3 c2 = vec3(0.925, 0.282, 0.600);
  vec3 c3 = vec3(1.000, 0.624, 0.039);
  x = fract(x) * 4.0;
  if (x < 1.0) return mix(c0, c1, x);
  if (x < 2.0) return mix(c1, c2, x - 1.0);
  if (x < 3.0) return mix(c2, c3, x - 2.0);
  return mix(c3, c0, x - 3.0);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - uCenter) / (uSize * 1.25);
  vec3 ro = vec3(0.0, 0.0, 4.2);
  vec3 rd = normalize(vec3(uv, -1.7));

  float b = dot(ro, rd);
  float c = dot(ro, ro) - 3.2 * 3.2;
  if (b * b - c < 0.0) { gl_FragColor = vec4(0.0); return; }

  float t = 0.0, minD = 1e3;
  bool hit = false;
  for (int i = 0; i < 64; i++) {
    float d = map(ro + rd * t);
    minD = min(minD, d);
    if (d < 0.002) { hit = true; break; }
    t += d;
    if (t > 9.0) break;
  }

  float hue = uTime * 0.04;
  if (!hit) {
    float glow = smoothstep(0.45, 0.0, minD);
    gl_FragColor = vec4(grad(hue + 0.3) * glow, glow * 0.45);
    return;
  }

  vec3 p = ro + rd * t;
  vec3 n = calcNormal(p);
  vec3 l = normalize(vec3(0.5, 0.8, 0.7));
  float diff = max(dot(n, l), 0.0);
  float spec = pow(max(dot(reflect(-l, n), -rd), 0.0), 48.0);
  float fres = pow(1.0 - max(dot(n, -rd), 0.0), 2.5);

  vec3 col = grad(hue + dot(n, vec3(0.25, 0.45, 0.2)) + p.y * 0.12);
  col = col * (0.28 + 0.8 * diff) + spec * 0.95 + fres * vec3(0.75, 0.8, 1.0) * 0.55;
  gl_FragColor = vec4(col, 1.0);
}
`;

function Orb({ animate }: { animate: boolean }) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const target = useRef(new THREE.Vector2());
  const { gl } = useThree();
  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uCenter: { value: new THREE.Vector2() }, uSize: { value: 400 }, uMouse: { value: new THREE.Vector2() } }),
    []
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const a = document.querySelector("[data-orb-anchor]")?.getBoundingClientRect();
      if (!a) return;
      const x = (e.clientX - (a.left + a.width / 2)) / (a.width * 0.9);
      const y = -(e.clientY - (a.top + a.height / 2)) / (a.height * 0.9);
      target.current.set(Math.max(-1.2, Math.min(1.2, x)), Math.max(-1.2, Math.min(1.2, y)));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, dt) => {
    const m = mat.current;
    if (!m) return;
    const canvas = gl.domElement;
    const a = document.querySelector("[data-orb-anchor]")?.getBoundingClientRect();
    const c = canvas.getBoundingClientRect();
    if (a) {
      const r = canvas.width / c.width;
      m.uniforms.uCenter.value.set((a.left - c.left + a.width / 2) * r, (c.bottom - (a.top + a.height / 2)) * r);
      m.uniforms.uSize.value = Math.max(a.width, a.height) * r;
    }
    if (animate) m.uniforms.uTime.value += Math.min(dt, 0.05);
    m.uniforms.uMouse.value.lerp(target.current, 0.06);
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial ref={mat} vertexShader={vert} fragmentShader={frag} uniforms={uniforms} transparent depthWrite={false} />
    </mesh>
  );
}

export default function LiquidOrb() {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [reduce] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0" aria-hidden>
      <Canvas
        dpr={[0.75, 1]}
        gl={{ antialias: false, alpha: true, premultipliedAlpha: false, powerPreference: "high-performance" }}
        frameloop={visible && !reduce ? "always" : "demand"}
      >
        <Orb animate={!reduce} />
      </Canvas>
    </div>
  );
}
