import CurlPortrait from './CurlPortrait';
import './ExpertsGrid.css';

const TONES = ['plum', 'teal', 'sun', 'rose', 'plum', 'teal', 'sun', 'rose'];

export default function ExpertsGrid() {
  return (
    <section className="experts">
      <div className="wrap experts-heading">
        <span className="eyebrow">Influencer approved</span>
        <h2>
          See What The <span>Experts Are Saying</span>
        </h2>
      </div>
      <div className="experts-grid">
        {TONES.map((tone, i) => (
          <CurlPortrait tone={tone} key={i} className="experts-tile" />
        ))}
      </div>
    </section>
  );
}
