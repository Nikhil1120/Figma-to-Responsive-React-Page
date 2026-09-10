import './LayeredSection.css';

export default function LayeredSection({ base, overlay, alt, id, className = '' }) {
  return (
    <section id={id} className={`layered-section ${className}`}>
      <img src={base} alt="" className="layered-section__base" aria-hidden="true" />
      <img src={overlay} alt={alt} className="layered-section__overlay" />
    </section>
  );
}
