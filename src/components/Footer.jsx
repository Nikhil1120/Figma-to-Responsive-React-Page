import './Footer.css';

const COLUMNS = [
  { title: 'Products', links: ['Shampoo', 'Conditioner', 'Hair Mask', 'Styling Oil'] },
  { title: 'Hair Care', links: ['Curly Hair Guide', 'Coily Hair Guide', 'Wavy Hair Guide'] },
  { title: 'Connect', links: ['Follow us on Instagram', 'Join the Curly Girl Community'] },
  { title: 'About', links: ['Our Ingredients', 'Sustainability', 'Contact us'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <span className="footer-logo">Hydra Curls</span>
          <p>Designed for Arab curly, coily &amp; wavy hair types 2, 3 and 4.</p>
        </div>
        {COLUMNS.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} Hydra Curls. All rights reserved.</p>
        <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Get hair care tips in your inbox" aria-label="Email address" />
          <button type="submit" className="btn btn-teal">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}
