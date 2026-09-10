import CurlPortrait from './CurlPortrait';
import './Community.css';

const REVIEWS = [
  {
    name: 'Aisha K.',
    body: "I've struggled with frizz my whole life. Hydra Curls is the first range that actually removes my hair for more than a day. The 48-hour claim is real.",
  },
  {
    name: 'Layla R.',
    body: "My curls have never felt this soft or held their shape for so long. It's become the only routine I trust for humid Gulf summers.",
  },
];

export default function Community() {
  return (
    <section className="community">
      <div className="wrap community-grid">
        <CurlPortrait tone="rose" className="community-photo" />
        <div className="community-copy">
          <span className="eyebrow eyebrow-light">You are not alone</span>
          <h2>Hear from Our Community</h2>
          <div className="community-cards">
            {REVIEWS.map((review) => (
              <div className="review-card" key={review.name}>
                <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>{review.body}</p>
                <span className="review-name">{review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
