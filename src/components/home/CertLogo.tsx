import type { Cert } from "@/content/certifications";

export function CertLogo({ brand, size = "md" }: { brand: Cert["brand"]; size?: "md" | "sm" }) {
  const box = size === "md" ? "size-12 rounded-2xl" : "size-9 rounded-xl";
  switch (brand) {
    case "aws":
      return (
        <span className={`grid ${box} shrink-0 place-items-center bg-[#232f3e]`} role="img" aria-label="AWS">
          <svg viewBox="0 0 60 36" className="w-[70%]" aria-hidden>
            <text x="30" y="20" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="19" fill="#fff">aws</text>
            <path d="M12 26c10 6 26 6 36 0" fill="none" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" />
            <path d="M44 23l5 3-5 2" fill="none" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      );
    case "google":
      return (
        <span className={`grid ${box} shrink-0 place-items-center bg-white`} role="img" aria-label="Google">
          <svg viewBox="0 0 48 48" className="w-[55%]" aria-hidden>
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.2-.1-2.3-.4-3.5z"/>
          </svg>
        </span>
      );
    case "ibm":
      return (
        <span className={`grid ${box} shrink-0 place-items-center bg-[#0f62fe]`} role="img" aria-label="IBM">
          <span className="text-[13px] font-black tracking-[0.06em] text-white" style={{ fontFamily: "Arial, sans-serif" }}>IBM</span>
        </span>
      );
    case "tableau":
      return (
        <span className={`grid ${box} shrink-0 place-items-center bg-white`} role="img" aria-label="Tableau">
          <svg viewBox="0 0 24 24" className="w-[58%]" aria-hidden>
            <g stroke="#e8762d" strokeWidth="2.2" strokeLinecap="round"><path d="M12 4v16M4 12h16" /></g>
            <g stroke="#1f457e" strokeWidth="1.6" strokeLinecap="round"><path d="M5 4.5v4M3 6.5h4M19 15.5v4M17 17.5h4" /></g>
            <g stroke="#59879b" strokeWidth="1.6" strokeLinecap="round"><path d="M19 4.5v4M17 6.5h4M5 15.5v4M3 17.5h4" /></g>
          </svg>
        </span>
      );
    case "coursera":
      return (
        <span className={`grid ${box} shrink-0 place-items-center bg-[#0056d2]`} role="img" aria-label="Coursera">
          <span className="text-lg font-bold text-white" style={{ fontFamily: "Arial, sans-serif" }}>C</span>
        </span>
      );
    case "udemy":
      return (
        <span className={`grid ${box} shrink-0 place-items-center bg-[#a435f0]`} role="img" aria-label="Udemy">
          <span className="text-lg font-bold text-white" style={{ fontFamily: "Arial, sans-serif" }}>U</span>
        </span>
      );
  }
}

