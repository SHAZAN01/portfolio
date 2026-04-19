"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef, Suspense, useMemo } from "react"
import * as THREE from "three"

function Particles() {
  const ref = useRef<THREE.Points>(null!)
  const count = 2500

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.04
    ref.current.rotation.y = state.clock.elapsedTime * 0.025
    ref.current.rotation.x += state.mouse.y * 0.008
    ref.current.rotation.y += state.mouse.x * 0.008
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        size={0.014}
        color="#4f9eff"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 55 }}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
    >
      <Suspense fallback={null}>
        <Particles />
      </Suspense>
    </Canvas>
  )
}