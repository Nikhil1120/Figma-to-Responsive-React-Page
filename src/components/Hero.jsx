import './Hero.css';
import videoSrc from '../assets/new-animation-video.mp4';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline src={videoSrc} aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-content">
        <h1 className="hero-title">
          Pure ingredients. Real results.
          <br />
          Every drop counts.
        </h1>
      </div>
      <svg className="divider-wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,64 C240,110 480,0 720,32 C960,64 1200,110 1440,54 L1440,110 L0,110 Z" fill="#23c4d6" />
        <path d="M0,84 C240,120 480,40 720,62 C960,84 1200,120 1440,74 L1440,110 L0,110 Z" fill="#fffdf9" />
      </svg>
    </section>
  );
}
