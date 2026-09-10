import './SectionImage.css';

export default function SectionImage({ src, alt, id, className = '' }) {
  return (
    <section id={id} className={`section-image ${className}`}>
      <img src={src} alt={alt} className="section-image__img" loading="lazy" />
    </section>
  );
}
