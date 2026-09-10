import './ClinicalStats.css';

const POINTS = [
  {
    title: 'Moisture attraction',
    body: 'Hyaluronic Acid acts like a magnet for moisture, drawing hydration into every strand.',
  },
  {
    title: 'Strengthening seal',
    body: 'Coconut and Avocado oils lock the moisture in, preventing hydration from ever escaping.',
  },
];

export default function ClinicalStats() {
  return (
    <section className="clinical">
      <div className="wrap clinical-grid">
        <div className="clinical-copy">
          <span className="eyebrow">The Hydra Curls Promise</span>
          <h2 className="clinical-title">
            Clinically Proven <span>48-Hour</span> Hydration
          </h2>
          <p className="clinical-lead">
            Our advanced formula with Hyaluronic Acid doesn't just coat your
            hair &mdash; it penetrates the cuticle to lock in moisture from the
            inside out, delivering continuous hydration for two full days.
          </p>
          <ul className="clinical-points">
            {POINTS.map((point) => (
              <li key={point.title}>
                <span className="clinical-dot" aria-hidden="true" />
                <div>
                  <strong>{point.title}</strong>
                  <p>{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="clinical-stat">
          <div className="clinical-stat-ring">
            <span className="clinical-stat-number">48</span>
            <span className="clinical-stat-unit">hours</span>
          </div>
          <p className="clinical-stat-caption">of continuous curl hydration and frizz control</p>
        </div>
      </div>
    </section>
  );
}
