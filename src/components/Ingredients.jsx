import './Ingredients.css';

const INGREDIENTS = [
  {
    name: 'Hyaluronic Acid',
    body: 'Rich in moisture and fatty acids for deep curl definition and softness.',
    points: ['No SLS', 'Deep hydration', 'Thirsty curls'],
  },
  {
    name: 'Coconut Oil',
    body: 'Natural nourishment that penetrates hair strands to strengthen and protect.',
    points: ['No silicones', 'Hair strength', 'Natural shine'],
  },
  {
    name: 'Avocado Extract',
    body: 'Rich in vitamins and fatty acids that seal moisture and reduce frizz.',
    points: ['No parabens', 'Curl definition', 'Frizz control'],
  },
];

export default function Ingredients() {
  return (
    <section className="ingredients">
      <div className="wrap ingredients-inner">
        <div className="ingredients-heading">
          <span className="eyebrow">Premium ingredients</span>
          <h2>
            Powered by Nature's <span>Best Ingredients</span>
          </h2>
          <p>Every formula is dermatologically tested and thoughtfully sourced from natural extracts for superior curly hair care.</p>
        </div>

        <div className="ingredients-grid">
          {INGREDIENTS.map((item) => (
            <div className="ingredient-card" key={item.name}>
              <div className="ingredient-swatch" aria-hidden="true" />
              <h3>{item.name}</h3>
              <p>{item.body}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
