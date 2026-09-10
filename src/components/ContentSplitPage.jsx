import rightside from '../assets/fourth/rightside.png';
import './ContentSplitPage.css';

const BODY_TEXT =
  'Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.';

export default function ContentSplitPage() {
  return (
    <section className="content-split-page" id="hyaluronic">
      <svg className="content-split-page__wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,50 C300,0 700,90 1000,40 C1200,10 1320,10 1440,40 L1440,0 L0,0 Z" fill="#170b26" />
      </svg>

      <div className="content-split-page__grid">
        <div className="content-split-page__left">
          <h2 className="content-split-page__title">Lorem Ipsum</h2>
          <p className="content-split-page__body">{BODY_TEXT}</p>
          <a className="content-split-page__cta" href="#ingredients">
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="content-split-page__right">
          <img
            src={rightside}
            alt="Hydra Curls product range with hyaluronic acid benefits"
            className="content-split-page__right-img"
          />
        </div>
      </div>
    </section>
  );
}
