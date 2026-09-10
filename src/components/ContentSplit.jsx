import Bottle from './Bottle';
import './ContentSplit.css';
import sky from '../assets/fourth/sky.png';
import rightside from '../assets/fourth/rightside.png';
import bottom from '../assets/fourth/bottom.png';
import componentImg from '../assets/fourth/Component.png';
import componentText from '../assets/fourth/componenttext.png';
import componentText1 from '../assets/fourth/componenttext1.png';
import compText2 from '../assets/fourth/comptext2.png';
import compText3 from '../assets/fourth/conptext3.png';
import skyBanner from '../assets/fourth/sky.png';
import hydridIcon from '../assets/hydrid icon.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import n1 from '../assets/n1.png';
import n2 from '../assets/n2.png';
import n3 from '../assets/n3.png';
import v1 from '../assets/videos/v1.mp4';
import v2 from '../assets/videos/v2.mp4';
import v3 from '../assets/videos/v3.mp4';
import v4 from '../assets/videos/v4.mp4';
import v5 from '../assets/videos/v5.mp4';
import v6 from '../assets/videos/v6.mp4';
import v7 from '../assets/videos/v7.mp4';
import blueline from '../assets/fourth/blue line.png';
import bottleImg from '../assets/second image/bottle.png';
import rectangle from '../assets/fourth/rectangle.png';


export default function ContentSplit() {
  return (
    <>
      <section id="gallery" className="content-split fourth">

        <div className="wrap cs-grid">
          <div className="cs-copy">
            <h3>Lorem Ipsum</h3>
            <p>
              Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.
            </p>
            <a className="btn btn-teal cs-learn" href="#">Learn More →</a>
          </div>

          <div className="cs-visual">
            <img src={rightside} className="cs-rightside" aria-hidden="true" />
          </div>

        </div>


        <div className="cs-side-container">
          <img src={sky} className="cs-side-sky" alt="sky" aria-hidden="true" />
        </div>

        <img src={bottom} className="cs-bottom-full" alt="decorative bottom" aria-hidden="true" />

        <div className="cs-component-art">
          <img src={componentImg} className="cs-component-base" alt="Hydra curls hydration component" aria-hidden="true" />
          <img src={componentText} className="cs-component-text" alt="Hydra curls hydration content" aria-hidden="true" />
        </div>

        <div className="cs-component-banner">
          <img src={componentText1} className="cs-component-banner-image" alt="Hydra curls hydration banner" aria-hidden="true" />
        </div>

        <div className="cs-component-banner cs-component-banner-next">
          <img src={compText2} className="cs-component-banner-image" alt="Hydra curls hydration banner 2" aria-hidden="true" />
        </div>

        <div className="cs-component-banner cs-component-banner-next">
          <img src={compText3} className="cs-component-banner-image" alt="Hydra curls hydration banner 3" aria-hidden="true" />
        </div>

        <div className="cs-video-row-wrap">
          <div className="cs-video-row">
            {[v1, v2, v3, v4, v5, v6, v7].map((video, index) => (
              <a key={video} href={video} target="_blank" rel="noreferrer" className="cs-video-card">
                <video src={video} className="cs-video" muted playsInline loop preload="metadata" />
                <span className="cs-video-label">Video {index + 1}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="cs-sky-banner">
          <img src={skyBanner} className="cs-sky-banner-bg" alt="sky background" aria-hidden="true" />
          <div className="cs-sky-badge-wrap">
            <img src={hydridIcon} className="cs-sky-badge" alt="Hydra Curls icon" aria-hidden="true" />
          </div>
          <div className="cs-sky-banner-copy">
            <div className="cs-sky-banner-kicker">Designed For You</div>
            <h2>Perfect for Arab <span>Curly, Coily &amp; Wavy Hair</span></h2>
            <p>Our range is specifically formulated to meet the unique needs of Arab hair textures, providing targeted care for types 2, 3, and 4.</p>
          </div>
        </div>

        <div className="cs-inline-gallery">
          <img src={c1} className="cs-inline-gallery-item" alt="Hair texture 1" aria-hidden="true" />
          <img src={c2} className="cs-inline-gallery-item" alt="Hair texture 2" aria-hidden="true" />
          <img src={c3} className="cs-inline-gallery-item" alt="Hair texture 3" aria-hidden="true" />
        </div>

        <div className="cs-next-gallery">
          <img src={n1} className="cs-next-gallery-item" alt="Hydra curls next image 1" aria-hidden="true" />
          <img src={n2} className="cs-next-gallery-item" alt="Hydra curls next image 2" aria-hidden="true" />
        </div>

        <div className="cs-next-single">
          <img src={n3} className="cs-next-single-item" alt="Hydra curls next image 3" aria-hidden="true" />
        </div>

      </section>




    </>
  );
}
