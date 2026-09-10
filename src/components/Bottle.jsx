export default function Bottle({ cap = '#23c4d6', body = '#f6f2fb', label = '#6d2f96', width = 120 }) {
  return (
    <svg viewBox="0 0 120 260" width={width} height={width * (260 / 120)} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="60" cy="252" rx="30" ry="6" fill="rgba(44,20,65,0.15)" />
      <rect x="48" y="10" width="24" height="20" rx="4" fill={cap} />
      <rect x="52" y="2" width="16" height="12" rx="3" fill={cap} />
      <path
        d="M40 30 h40 v20 c14 10 18 24 18 42 v120 c0 14 -8 22 -22 22 H44 c-14 0 -22 -8 -22 -22 V92 c0 -18 4 -32 18 -42 Z"
        fill={body}
        stroke="rgba(44,20,65,0.12)"
        strokeWidth="1.5"
      />
      <rect x="26" y="120" width="68" height="78" rx="10" fill={label} />
      <rect x="34" y="132" width="52" height="4" rx="2" fill="rgba(255,255,255,0.85)" />
      <rect x="34" y="142" width="36" height="8" rx="2" fill="#fff" />
      <rect x="34" y="156" width="44" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
      <rect x="34" y="164" width="30" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
      <circle cx="70" cy="184" r="8" fill="#23c4d6" opacity="0.9" />
    </svg>
  );
}
