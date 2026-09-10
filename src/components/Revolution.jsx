import './Revolution.css';

const STATS = [
  { value: '48k', label: 'Happy Customers' },
  { value: '05', label: 'Product Lines' },
  { value: '4', label: 'Hair Types' },
  { value: '100%', label: 'Sulfate Free' },
];

export default function Revolution() {
  return (
    <section className="revolution">
      <div className="wrap revolution-inner">
        <h2>Join the Curly Hair Revolution</h2>
        <p>Thousands grow curly hair journey with expert guidance, premium products, and a supportive community.</p>
        <div className="revolution-actions">
          <a className="btn btn-teal" href="#products">Shop Now</a>
          <a className="btn btn-outline-light" href="#method">Learn Curly Girl Method</a>
        </div>
        <div className="revolution-stats">
          {STATS.map((stat) => (
            <div className="revolution-stat" key={stat.label}>
              <span className="revolution-value">{stat.value}</span>
              <span className="revolution-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
