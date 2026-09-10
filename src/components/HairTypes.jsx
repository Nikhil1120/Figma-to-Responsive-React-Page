import CurlPortrait from './CurlPortrait';
import './HairTypes.css';

const TYPES = [
  { label: 'wavy', tone: 'sun' },
  { label: 'curly', tone: 'plum' },
  { label: 'coily', tone: 'teal' },
];

export default function HairTypes() {
  return (
    <section className="hair-types">
      <div className="wrap hair-types-heading">
        <span className="eyebrow">Designed for you</span>
        <h2>
          Perfect for Arab <span>Curly, Coily &amp; Wavy Hair</span>
        </h2>
        <p>Our range is thoughtfully formulated to meet the unique needs of Arab textures, providing targeted care for types 2, 3 and 4.</p>
      </div>
      <div className="hair-types-grid">
        {TYPES.map((type) => (
          <CurlPortrait tone={type.tone} className="hair-type-card" key={type.label}>
            <span className="hair-type-label">{type.label}</span>
          </CurlPortrait>
        ))}
      </div>
    </section>
  );
}
