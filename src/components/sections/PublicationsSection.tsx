"use client"
import { FadeUp } from "@/components/shared/FadeUp"

const paper = {
  venue: "RANLP 2025",
  venueFull: "Recent Advances in Natural Language Processing",
  title: "Advancing Clinical Translation in Nepali through Fine-Tuned Multilingual Models",
  authors: "Benyamin Ahmadnia, Sumaiya Shaikh, Bibek Poudel, Shazan Ansar, Sahar Hooshmand",
  affiliation: "Department of Computer Science, California State University, Dominguez Hills, Carson, USA",
  abstract: "Low-resource Neural Machine Translation (NMT) remains a major challenge in high-stakes domains such as healthcare. This paper presents a domain-adapted pipeline for English-Nepali medical translation leveraging mBART and NLLB-200. Translation fidelity is assessed through BLEU, CHRF++, METEOR, BERTScore, COMET, and perplexity. NLLB-200 consistently outperforms mBART, achieving higher accuracy and lower hallucination rates in clinical settings.",
  contributions: [
    "Nepali-English parallel corpus tailored to the medical domain from diverse domain-specific sources",
    "Fine-tuned mBART and NLLB-200 with a unified framework across lexical and semantic metrics",
    "Error analysis, hallucination detection, and ethical assessment for domain-specific term accuracy",
  ],
  metric: "NLLB-200 outperforms mBART — lower hallucination rates in clinical settings",
  tags: ["Clinical NLP","Low-Resource NMT","mBART","NLLB-200","English-Nepali","Healthcare AI"],
  year: 2025,
}

export function PublicationsSection() {
  return (
    <section id="publications" style={{ padding: "80px 40px", maxWidth: 1060, margin: "0 auto", width: "100%" }}>
      <FadeUp>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(242,242,247,0.3)", marginBottom: 12 }}>Research</p>
        <h2 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 32 }}>
          Peer-Reviewed{" "}
          <span style={{ background: "linear-gradient(135deg,#a78bfa,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Paper</span>
        </h2>

        <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden" }}>

          {/* Venue bar */}
          <div style={{ padding: "14px 32px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(59,130,246,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#3b82f6", boxShadow: "0 0 7px #3b82f6" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#60a5fa" }}>{paper.venue}</span>
              <span style={{ fontSize: 12, color: "rgba(242,242,247,0.3)" }}>—</span>
              <span style={{ fontSize: 12, color: "rgba(242,242,247,0.45)" }}>{paper.venueFull}</span>
            </div>
            <span style={{ fontSize: 11, color: "rgba(242,242,247,0.3)", background: "rgba(255,255,255,0.05)", padding: "3px 10px", borderRadius: 20 }}>{paper.year}</span>
          </div>

          {/* Two-col layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 260px" }}>

            {/* Left */}
            <div style={{ padding: "28px 32px", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif", fontSize: "clamp(1rem,2vw,1.35rem)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.35, marginBottom: 12, color: "#f2f2f7" }}>
                {paper.title}
              </h3>
              <div style={{ fontSize: 12.5, fontWeight: 500, color: "rgba(242,242,247,0.7)", marginBottom: 3 }}>{paper.authors}</div>
              <div style={{ fontSize: 11.5, color: "rgba(242,242,247,0.3)", fontStyle: "italic", marginBottom: 18 }}>{paper.affiliation}</div>

              <p style={{ fontSize: 13.5, color: "rgba(242,242,247,0.55)", lineHeight: 1.8, marginBottom: 20, fontWeight: 300 }}>{paper.abstract}</p>

              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(242,242,247,0.3)", marginBottom: 12, fontWeight: 600 }}>Key Contributions</div>
                {paper.contributions.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, marginBottom: 9 }}>
                    <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)", color: "#a78bfa", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{i+1}</span>
                    <span style={{ fontSize: 13, color: "rgba(242,242,247,0.6)", lineHeight: 1.6 }}>{c}</span>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: 12.5, fontWeight: 600, color: "#10b981", padding: "9px 14px", background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.14)", borderRadius: 9, marginBottom: 18 }}>
                ↑ {paper.metric}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {paper.tags.map(tag => (
                  <span key={tag} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 7, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(242,242,247,0.5)" }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Right: compact paper preview */}
            <div style={{ padding: "20px 18px", display: "flex", flexDirection: "column", gap: 12, background: "rgba(0,0,0,0.15)" }}>
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(242,242,247,0.28)", fontWeight: 600 }}>First Page Preview</div>

              <div style={{ background: "#fefefe", borderRadius: 10, padding: "12px 11px", flex: 1, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
                <div style={{ fontSize: 6.5, color: "#777", textAlign: "center", fontFamily: "Georgia,serif", borderBottom: "1px solid #eee", paddingBottom: 5, marginBottom: 5 }}>Proceedings of RANLP 2025, Varna, Bulgaria</div>
                <div style={{ fontSize: 8.5, fontWeight: 700, color: "#111", textAlign: "center", lineHeight: 1.35, fontFamily: "Georgia,serif", marginBottom: 5 }}>Advancing Clinical Translation in Nepali through Fine-Tuned Multilingual Models</div>
                <div style={{ fontSize: 6.5, color: "#333", textAlign: "center", fontFamily: "Arial,sans-serif", lineHeight: 1.5, marginBottom: 3 }}>Benyamin Ahmadnia, Sumaiya Shaikh, Bibek Poudel, Shazan Ansar, Sahar Hooshmand</div>
                <div style={{ fontSize: 6, color: "#666", textAlign: "center", fontFamily: "Arial,sans-serif", marginBottom: 6 }}>Dept. of Computer Science, CSUDH, Carson, USA</div>
                <div style={{ fontSize: 7, fontWeight: 700, color: "#111", fontFamily: "Arial,sans-serif", marginBottom: 4 }}>Abstract</div>
                <div style={{ fontSize: 6.5, color: "#333", lineHeight: 1.55, fontFamily: "Arial,sans-serif", marginBottom: 5 }}>Low-resource Neural Machine Translation (NMT) remains a major challenge in high-stakes domains such as healthcare. This paper presents a domain-adapted pipeline for English-Nepali medical translation leveraging mBART and NLLB-200. NLLB-200 consistently outperforms mBART across BLEU, CHRF++, METEOR, BERTScore, COMET, and perplexity...</div>
                <div style={{ fontSize: 7, fontWeight: 700, color: "#111", fontFamily: "Arial,sans-serif", marginBottom: 3 }}>1 Introduction</div>
                <div style={{ fontSize: 6.5, color: "#333", lineHeight: 1.55, fontFamily: "Arial,sans-serif" }}>NMT has brought significant advancements, offering more fluent and accurate translations. Nepali, a low-resource language, presents unique challenges particularly in specialized domains such as healthcare...</div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 10, color: "rgba(242,242,247,0.25)", marginBottom: 8 }}>Preview only</div>
                <a href="mailto:shazanansar@gmail.com?subject=RANLP 2025 Paper Request"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, fontSize: 12, fontWeight: 600, padding: "9px 14px", borderRadius: 9, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa", textDecoration: "none" }}
                >Request Full Paper →</a>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
