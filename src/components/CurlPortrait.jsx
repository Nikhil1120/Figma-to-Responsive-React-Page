import './CurlPortrait.css';

const PALETTES = {
  plum: ['#5a2a80', '#2c1441'],
  teal: ['#23c4d6', '#0f5866'],
  sun: ['#f2a53c', '#7a4413'],
  rose: ['#c76b8f', '#4a1f38'],
};

export default function CurlPortrait({ tone = 'plum', className = '', children }) {
  const [c1, c2] = PALETTES[tone] || PALETTES.plum;
  const uid = `curl-${tone}-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div className={`curl-portrait ${className}`} style={{ '--c1': c1, '--c2': c2 }}>
      <svg viewBox="0 0 300 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
        </defs>
        <rect width="300" height="340" fill={`url(#${uid})`} />
        <g opacity="0.35" stroke="#fff" strokeWidth="3" fill="none">
          <path d="M40 60 q20 -30 40 0 t40 0 t40 0 t40 0 t40 0" />
          <path d="M20 110 q20 -30 40 0 t40 0 t40 0 t40 0 t40 0" />
          <path d="M40 260 q20 30 40 0 t40 0 t40 0 t40 0" />
          <path d="M20 300 q20 30 40 0 t40 0 t40 0 t40 0 t40 0" />
        </g>
      </svg>
      {children && <div className="curl-portrait-content">{children}</div>}
    </div>
  );
}
