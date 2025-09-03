import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <Reveal>
    <article className="prose prose-slate max-w-none">
      <h1>Visualizations</h1>
      <p>
        This section will showcase interactive visual analytics for public health questions,
        with an emphasis on clarity, reproducibility, and decision support.
      </p>

      <h2>Planned Showcases</h2>
      <ul>
        <li><strong>Child mortality dashboards:</strong> trends, age patterns, and equity gaps.</li>
        <li><strong>Survey-aware charts:</strong> design-weighted estimates with uncertainty.</li>
        <li><strong>Biomarker exploration:</strong> trajectories and treatment effects in HIV studies.</li>
      </ul>

      <h2>Design Principles</h2>
      <ul>
        <li>Make uncertainty visible (CIs, credible intervals, and variance-aware summaries).</li>
        <li>Prioritize accessibility (colorblind-safe palettes, keyboard navigation, alt text).</li>
        <li>Keep interactions purposeful (filter, compare, annotate—no chartjunk).</li>
      </ul>

      <h2>Roadmap</h2>
      <ol>
        <li>Publish static draft visuals to validate storylines and metrics.</li>
        <li>Add interactivity (filters, region drilldowns, exportable tables).</li>
        <li>Integrate survey design metadata and footnotes for reproducibility.</li>
      </ol>

      <p>
        Have a visualization idea or dataset to explore?
        Contact me at <strong>acquijanoa@unc.edu</strong> or on{" "}
        <a target="_blank" href="https://www.linkedin.com/in/acquijanoa">LinkedIn</a>.
      </p>
    </article>
    </Reveal>
  );
}
