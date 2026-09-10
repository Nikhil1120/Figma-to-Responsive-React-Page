import CurlPortrait from './CurlPortrait';
import './JourneyBlocks.css';

const BLOCKS = [
  {
    tone: 'teal',
    label: 'Curl Guide',
    title: 'Curly Girl Method Guide',
    body: 'Learn the routine and product order that keeps curls defined and frizz-free.',
  },
  {
    tone: 'plum',
    label: 'Curl Guide',
    title: 'Choosing Your Curl Type',
    body: "Identify your curl pattern from types 2 to 4 so you can pick the right routine.",
  },
  {
    tone: 'sun',
    label: 'Curl Guide',
    title: 'Styling Tips for Humidity',
    body: 'Keep your curls hydrated and held all day, even in the warmest climates.',
  },
];

export default function JourneyBlocks() {
  return (
    <section className="journey" id="journey">
      <div className="wrap journey-heading">
        <span className="eyebrow">Learn &amp; grow</span>
        <h2>
          Your Curly Hair <span>Journey Starts Here</span>
        </h2>
        <p>Honest expert guides, styling tips, and a community of women who celebrate their natural curls.</p>
      </div>

      <div className="journey-blocks">
        {BLOCKS.map((block) => (
          <div className="journey-block" key={block.title}>
            <CurlPortrait tone={block.tone} className="journey-photo" />
            <div className="journey-copy">
              <span className="journey-label">{block.label}</span>
              <h3>{block.title}</h3>
              <p>{block.body}</p>
              <a href="#">Explore Now &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
