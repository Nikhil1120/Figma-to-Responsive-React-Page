import skyImg from '../assets/fourth/sky.png';
import blueLine from '../assets/fourth/blue line.png';
import carouselImg from '../assets/fourth/bottom.png';
import './FeatureCards.css';

export default function FeatureCards() {
  return (
    <section className="feature-cards" id="products">
      <div className="feature-cards__stack">
        <img src={skyImg} alt="" className="feature-cards__sky" aria-hidden="true" />
        <img src={blueLine} alt="" className="feature-cards__wave" aria-hidden="true" />
        <img
          src={carouselImg}
          alt="Hydra Curls product carousel"
          className="feature-cards__carousel"
        />
      </div>

      <p className="feature-cards__tagline">
        Experience the power of hydration in every drop.
      </p>

      <svg className="divider-wave feature-cards__wave-bottom" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,50 C300,0 700,90 1000,40 C1200,10 1320,10 1440,40 L1440,90 L0,90 Z" fill="#fffdf9" />
      </svg>
    </section>
  );
}
