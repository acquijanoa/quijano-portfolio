import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <Reveal>
      <article className="prose prose-slate prose-lg max-w-none dark:prose-invert">
        <h1>Research</h1>
        <p>
          I study methods and applications at the intersection of biostatistics
          and public health. My focus includes complex survey designs,
          survival/longitudinal models, and Bayesian approaches to inform
          precision public health—especially for Hispanic/Latino populations.
        </p>

        {/* Current Projects */}
        <h2>Current Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-5">
            <h3 className="font-semibold">Under-five Mortality in Colombia</h3>
            <p>
              Discrete-time survival modeling with complex survey design to
              identify determinants of child survival and equity gaps.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold">
              HCHS/SOL – SGM Cardiovascular Health
            </h3>
            <p>
              Risk profiling among sexual and gender minorities in the Hispanic
              Community Health Study/Study of Latinos.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold">Methods for Complex Surveys</h3>
            <p>
              Design-consistent estimation, missing-data strategies, and
              survey-aware regularization for high-dimensional settings.
            </p>
          </div>
        </div>

        {/* Selected Outputs */}
        <h2>Selected Outputs</h2>

        <h3>Manuscripts</h3>
        <ul>
          <li>
            Quijano A., Poteat T., Perreira K. M., Sotres-Alvarez D.{" "}
            <em>
              Cardiovascular Disease among Sexual and Gender Minorities in
              HCHS/SOL
            </em>
            . (Manuscript in progress).
          </li>
        </ul>

        <h3>Book Chapters</h3>
        <ul>
          <li>
            Quijano A., Urdinola P. (2023).{" "}
            <em>
              Inequidades e incumplimiento de la meta de reducción de la
              mortalidad en la infancia departamental en Colombia, 1985–2019
            </em>
            . In <em>Transformando Colombia</em> (pp. 232–247). Editorial UN.{" "}
            <a
              href="https://repositorio.unal.edu.co/bitstream/handle/unal/84325/9789585052727.pdf#page=232"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read online
            </a>
          </li>
        </ul>

        {/* Methods & Interests */}
        <h2>Methods & Interests</h2>
        <ul>
          <li>
            <strong>Design:</strong> Complex surveys (strata, PSU, weights),
            small-area estimation
          </li>
          <li>
            <strong>Models:</strong> GLMs, survival (discrete-time),
            longitudinal/mixed models
          </li>
          <li>
            <strong>Bayesian:</strong> Hierarchical & nonparametric approaches,
            prior shrinkage
          </li>
          <li>
            <strong>Missing Data:</strong> Multiple imputation; survey-aware
            strategies
          </li>
          <li>
            <strong>Visualization:</strong> Communicating uncertainty;
            dashboards for stakeholders
          </li>
        </ul>

        {/* Data Sources */}
        <h2>Data Sources</h2>
        <ul>
          <li>
            <strong>DHS Colombia:</strong> Child mortality, maternal/child
            health
          </li>
          <li>
            <strong>HCHS/SOL:</strong> Cardiometabolic risk, SGM health
          </li>
          <li>
            <strong>Censuses & Vital Stats:</strong> Colombia; small-area
            demographic analysis
          </li>
        </ul>

        {/* Contact */}
        <h2>Collaborations & Mentorship</h2>
        <p>
          I’m open to collaborations on survey methods, equity-focused public
          health, and applied disease mapping. I also enjoy mentoring students
          interested in biostatistics and reproducible research workflows.
        </p>

        <div className="card p-5 text-center">
          <p>
            Contact me at{" "}
            <a
              href="mailto:acquijanoa@unc.edu"
              className="underline"
            >
              acquijanoa@unc.edu
            </a>{" "}
            or connect on{" "}
            <a
              href="https://www.linkedin.com/in/acquijanoa"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </article>
    </Reveal>
  );
}
