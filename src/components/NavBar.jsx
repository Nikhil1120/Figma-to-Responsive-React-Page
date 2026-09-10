import './NavBar.css';
import hydridIcon from '../assets/hydrid icon.png';

const LINKS = [
  { label: 'SHOP', href: '#products' },
  { label: 'ABOUT', href: '#about' },
  { label: 'REVIEWS', href: '#reviews' },
  { label: 'CONTACT', href: '#contact' },
];

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M5 20c1.5-4 13.5-4 15 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconBag() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 8h12l-1 13H7L6 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="wrap navbar-inner">
        <a className="navbar-logo" href="#top" aria-label="Hydra Curls home">
          <img src={hydridIcon} alt="Hydra Curls" className="navbar-logo-mark" />
          <span className="navbar-logo-text">Hydra Curls</span>
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="navbar-actions">
          <div className="navbar-icons" aria-label="Account actions">
            <button type="button" className="navbar-icon-btn" aria-label="Search">
              <IconSearch />
            </button>
            <button type="button" className="navbar-icon-btn" aria-label="Account">
              <IconUser />
            </button>
            <button type="button" className="navbar-icon-btn" aria-label="Shopping bag">
              <IconBag />
            </button>
          </div>
          <a className="btn btn-teal navbar-cta" href="#products">Shop Now</a>
        </div>
      </div>
    </header>
  );
}
