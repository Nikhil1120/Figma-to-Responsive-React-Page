import Bottle from './Bottle';
import './HydrationDome.css';

const ICONS = ['Shampoo', 'Conditioner', 'Mask', 'Oil', 'Cream'];

export default function HydrationDome() {
  return (
    <section className="dome-section">
      <svg className="divider-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,50 C300,10 700,90 1000,40 C1200,10 1320,10 1440,40 L1440,0 L0,0 Z" fill="#fffdf9" />
        <path d="M0,60 C300,20 700,90 1000,50 C1200,20 1320,20 1440,50 L1440,90 L0,90 Z" fill="#23c4d6" />
      </svg>

      <div className="dome">
        <div className="dome-bottles">
          <div className="dome-bottle-card">
            <Bottle width={90} body="#f5f0fb" label="#2c1441" />
            <span>Hydrating Shampoo</span>
          </div>
          <div className="dome-bottle-card dome-bottle-card-alt">
            <Bottle width={90} body="#e9f8fa" label="#12a9bb" />
            <span>Hydrating Conditioner</span>
          </div>
        </div>

        <div className="dome-icons">
          {ICONS.map((icon) => (
            <span key={icon} className="dome-icon" title={icon}>
              {icon.charAt(0)}
            </span>
          ))}
        </div>

        <p className="dome-tagline">Experience the power of hydration in every drop.</p>
      </div>
    </section>
  );
}
