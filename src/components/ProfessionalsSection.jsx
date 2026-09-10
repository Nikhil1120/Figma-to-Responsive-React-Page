import skyBg from '../assets/fourth/sky.png';
import hydridIcon from '../assets/hydrid icon.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import './ProfessionalsSection.css';

const HAIR_TYPES = [
  { src: c1, label: 'Smooth', alt: 'Smooth hair type' },
  { src: c2, label: 'Curly', alt: 'Curly hair type' },
  { src: c3, label: 'Wavy', alt: 'Wavy hair type' },
];

export default function ProfessionalsSection() {
  return (
    <section className="professionals" id="hair-types">
      <img src={skyBg} alt="" className="professionals__sky" aria-hidden="true" />

      <div className="wrap professionals__inner">
        <div className="professionals__badge-wrap">
          <svg className="professionals__badge-ring" viewBox="0 0 200 200" aria-hidden="true">
            <defs>
              <path
                id="professionals-badge-path"
                d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
              />
            </defs>
            <text fill="#fff" fontSize="11" fontWeight="600" letterSpacing="2.5">
              <textPath href="#professionals-badge-path" startOffset="0%">
                HYDRA CURLS • HYDRA CURLS • HYDRA CURLS • HYDRA CURLS •
              </textPath>
            </text>
          </svg>
          <img src={hydridIcon} alt="Hydra Curls" className="professionals__badge-icon" />
        </div>

        <div className="professionals__heading">
          <span className="eyebrow">Designed for you</span>
          <h2>
            Trusted by Professionals &amp; <span>Hair Stylists</span>
          </h2>
          <p>Our range is specifically formulated to meet the unique needs of Arab hair textures.</p>
        </div>

        <div className="professionals__grid">
          {HAIR_TYPES.map((type) => (
            <figure className="professionals__card" key={type.label}>
              <img src={type.src} alt={type.alt} />
              <figcaption>{type.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>

     
    </section>
  );
}
