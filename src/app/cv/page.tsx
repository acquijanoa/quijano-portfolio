'use client';

export default function CVPage() {
  return (
    <article className="prose prose-slate max-w-none">
      {/* Download button (print to PDF) */}
      <div className="not-prose mb-4 flex gap-2 print:hidden">
        <button
          onClick={() => window.print()}
          className="rounded border px-3 py-2 text-sm hover:bg-slate-50"
        >
          Download PDF
        </button>
      </div>

      {/* Header */}
      <header>
  <h1>Álvaro C. Quijano-Angarita</h1>
  <p className="m-0">PhD Candidate in Biostatistics · University of North Carolina at Chapel Hill</p>
  <p className="m-0 text-sm">acquijanoa@unc.edu · LinkedIn: acquijanoa</p>

  <p className="mt-3 text-slate-700">
    Biostatistics PhD candidate with expertise in complex survey methods, Bayesian analysis, 
    and data visualization. Passionate about applying statistical methods to child mortality, 
    disease mapping, and health disparities in Hispanic/Latino populations. Experienced in SAS, 
    R, and interactive dashboard development, with a strong record of research, teaching, 
    and mentorship.
  </p>
</header>


      {/* Education */}
      <h2>Education</h2>
      <ul>
        <li>
          <strong>University of North Carolina at Chapel Hill</strong> — PhD Candidate in Biostatistics, 2023–present
        </li>
        <li>
          <strong>University of North Carolina at Chapel Hill</strong> — Master’s in Biostatistics, 2021–2023  
          <em>Thesis:</em> Examining the determinants of child mortality in Colombia: a discrete-time survival analysis using complex survey data.
        </li>
        <li>
          <strong>National University of Colombia</strong> — Bachelor’s in Statistics, 2015–2020  
          <em>Thesis:</em> Subnational estimation of mortality for children under five in Colombia under a space-time smoothing model in complex survey data.
        </li>
      </ul>

      {/* Affiliations */}
      <h2>Affiliations</h2>
      <ul>
        <li>American Statistical Association (ASA)</li>
        <li>International Biometric Society (IBS)</li>
        <li>Observatorio Demográfico y Epidemiológico del Área Andina (ODEAN)</li>
      </ul>

      {/* Research */}
      <h2>Research</h2>
      <ul>
        <li>
          Quijano A., Poteat, T., Perreira, K. M., & Sotres-Alvarez, D. (Manuscript in progress). 
          <em> Cardiovascular Disease among Sexual and Gender Minorities in the Hispanic Community Health Study/Study of Latinos.</em>
        </li>
        <li>
          Quijano, A., & Urdinola, P. (2023). Inequidades e incumplimiento de la meta de reducción de la mortalidad en la infancia departamental en Colombia, 1985–2019. 
          In <em>Transformando Colombia</em> (pp. 232–247). Editorial UN.  
          <a href="https://repositorio.unal.edu.co/bitstream/handle/unal/84325/9789585052727.pdf#page=232" target="_blank">Read online</a>
        </li>
      </ul>

      {/* Experience */}
      <h2>Experience</h2>
      <h3>Graduate Research Assistant · UNC Collaborative Studies Coordinating Center</h3>
      <p><em>Chapel Hill, NC — Oct 2021–May 2022; Aug 2022–present</em></p>
      <ul>
        <li>Conduct statistical analyses for Family Lifestyle Outcomes Research (FLOR) and Stress Gender and Minority (SGM-SOL) studies using SAS.</li>
        <li>Develop SAS macros to automate analyses with complex survey data and generate reports.</li>
        <li>Perform quality control on derived datasets and write statistical analysis plans.</li>
      </ul>

      <h3>SDnA Master Intern · Eli Lilly and Company</h3>
      <p><em>Indianapolis, IN — May 2022–Aug 2022</em></p>
      <ul>
        <li>Developed an R package and HTML-widget for interactive oncology clinical trial data visualization.</li>
        <li>Implemented R Shiny dashboards for oncology data visualization.</li>
        <li>Integrated JavaScript and R to create interactive, user-friendly tools.</li>
      </ul>

      <h3>Data Analyst · Institute for Health Technology Assessment (IETS)</h3>
      <p><em>Bogotá, Colombia — Mar 2020–Feb 2021</em></p>
      <ul>
        <li>Analyzed medical prescription patterns using R and SQL to improve access to uncovered medicines.</li>
        <li>Conducted analyses on orphan diseases, cancer, and rare diseases to inform medical policy.</li>
        <li>Created a Shiny dashboard to visualize results for decision-making boards.</li>
      </ul>

      <h3>Statistician · Colombia’s National Administrative Department of Statistics (DANE)</h3>
      <p><em>Bogotá, Colombia — Apr 2020–Sep 2020</em></p>
      <ul>
        <li>Applied Bayesian and non-parametric models (TOPALS, splines) to estimate mortality and fertility in small areas.</li>
        <li>Implemented Bayesian R-cohorts for demographic projections in small areas.</li>
        <li>Processed censuses, vital statistics, and survey data using SAS and R.</li>
      </ul>

      {/* Honors */}
      <h2>Honors</h2>
      <ul>
        <li>Best Graduate Student Organization of the Year</li>
        <li>1st Place, Pitch Competition, Biomedical Innovations and Startup Workshop, Fulbright Seminar, Boston (2022)</li>
        <li>Fulbright Scholarship, 2021</li>
        <li>Graduate Tuition Incentive Scholarship (GTIS), UNC-Chapel Hill, 2021</li>
        <li>Best Undergraduate Thesis Award, 2020</li>
      </ul>

      {/* Skills */}
      <h2>Skills & Interests</h2>
      <ul>
        <li><strong>Languages:</strong> Spanish (native), English (professional proficiency)</li>
        <li><strong>Programming:</strong> R, SAS, Shiny, SQL, JavaScript (D3, Plotly), Git</li>
        <li><strong>Methods:</strong> GLMs, Survival Analysis, Longitudinal & Bayesian Analysis, Complex Survey Data, Brain Imaging (MRI)</li>
        <li><strong>Other:</strong> Data visualization, interactive dashboards, mentoring, community building</li>
      </ul>

           {/* Print styles */}
      <style>{`
        @media print {
          /* Hide navigation, footer, and download button in print */
          nav, footer, .print\\:hidden { display: none !important; }

          /* Page margins */
          @page { margin: 12mm; }

          /* Avoid bad page breaks */
          h1, h2, h3 { break-after: avoid; }
          ul, p { break-inside: avoid; }

          /* Crisp text color */
          body { color: #111827; }

          /* Simplify links in print */
          a { color: inherit; text-decoration: none; }
        }
      `}</style>
    </article>
  );
}
