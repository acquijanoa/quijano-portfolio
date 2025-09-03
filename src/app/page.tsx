import ParallaxHero from "@/components/ParallaxHero";
import Script from "next/script";


export default function Page() {
  return (
    <section className="space-y-12"><Script
  id="ld-json-person"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Álvaro C. Quijano-Angarita",
      alumniOf: [
        "University of North Carolina at Chapel Hill",
        "Universidad Nacional de Colombia"
      ],
      jobTitle: "Biostatistics PhD Candidate",
      url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      sameAs: [
        "https://www.linkedin.com/in/acquijanoa"
      ],
      email: "mailto:acquijanoa@unc.edu"
    }),
  }}
/>
      <ParallaxHero />

      {/* Highlights */}
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="card p-5">
          <h2 className="text-sm font-semibold">Methods</h2>
          <p className="text-sm text-slate-600">
            Complex surveys, survival & longitudinal analysis, Bayesian methods, visualization.
          </p>
        </div>

        <div className="card p-5">
          <h2 className="text-sm font-semibold">Tooling</h2>
          <p className="text-sm text-slate-600">
            R, SAS, Shiny, SQL, JavaScript (D3/Plotly), Next.js, Tailwind.
          </p>
        </div>

        <div className="card p-5">
          <h2 className="text-sm font-semibold">Focus Areas</h2>
          <p className="text-sm text-slate-600">
            Under-five mortality (Colombia), disease mapping, Hispanic/Latino health.
          </p>
        </div>
      </div>
    </section>
  );
}
