import carouselImg from '../assets/fourth/bottom.png';
import './HydrationCarousel.css';

export default function HydrationCarousel() {
  return (
    <section className="hydration-carousel" id="products">
      <div className="hydration-carousel__stage">
        <img src={carouselImg} alt="Hydra Curls product carousel" className="hydration-carousel__img" />
      </div>
      <p className="hydration-carousel__tagline">
        Experience the power of hydration in every drop.
      </p>
      <svg className="divider-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,50 C300,0 700,90 1000,40 C1200,10 1320,10 1440,40 L1440,90 L0,90 Z" fill="#fffdf9" />
      </svg>
    </section>
  );
}
