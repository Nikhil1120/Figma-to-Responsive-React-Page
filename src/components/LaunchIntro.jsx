import splash from '../assets/second image/water-splash-isolated 1.png';
import palm from '../assets/second image/Group 12124.png';
import bottleImg from '../assets/second image/bottle.png';
import leaf from '../assets/second image/leaf.png';
import './LaunchIntro.css';

export default function LaunchIntro() {
  return (
    <section id="about" className="launch">
      <div className="wrap launch-grid">
        <div className="launch-copy">
          <h2 className="launch-title">The secret to beautiful hair</h2>
          <p className="launch-body">
            Revolutionary hair care range specially designed for Arab curly, coily &amp; wavy hair.
            Experience <strong className="highlight">48-hour hydration</strong> with natural ingredients
            like Hyaluronic Acid, Coconut &amp; Avocado.
          </p>

          <div className="launch-tags">
            <span>No SLS, Silicones, Parabens</span>
            <span>48-Hour Hydration</span>
            <span>Hair Types 2, 3, 4</span>
          </div>

          <div className="launch-actions">
            <a className="btn btn-teal" href="#products">SHOP NOW</a>
          </div>
        </div>

        <div className="launch-visual">
          <img src={splash} className="launch-splash" alt="" aria-hidden="true" />
          <img src={leaf} className="launch-leaf" alt="" aria-hidden="true" />
          <img src={palm} className="launch-palm" alt="" aria-hidden="true" />
          <img src={bottleImg} className="launch-bottle-img" alt="Hydra Curls bottle" />
        </div>
      </div>

      
    </section>
  );
}
