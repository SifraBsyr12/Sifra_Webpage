const Chrome = ({ title, children }) => (
  <svg viewBox="0 0 400 230" role="img" aria-label={title} className="shot-svg">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#4f46e5" /><stop offset="1" stopColor="#14b8a6" /></linearGradient>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#312e81" /><stop offset="1" stopColor="#f59e8b" /></linearGradient>
    </defs>
    <rect width="400" height="230" fill="#0d1538" />
    <rect width="400" height="30" fill="#162152" />
    <circle cx="16" cy="15" r="4.5" fill="#f87171" /><circle cx="31" cy="15" r="4.5" fill="#fbbf24" /><circle cx="46" cy="15" r="4.5" fill="#34d399" />
    <rect x="70" y="8" width="250" height="14" rx="7" fill="#0d1538" />
    {children}
  </svg>
)

const urls = [['https://university.edu/login', 'SAFE', '#34d399'], ['http://paypa1-secure.xyz', 'BLOCKED', '#f87171'], ['https://github.com/SifraBsyr12', 'SAFE', '#34d399'], ['http://free-gift.win/claim', 'BLOCKED', '#f87171']]
const tests = ['Login with valid credentials', 'Sort products by price', 'Add and remove cart items', 'Complete checkout']

export default function Shot({ kind }) {
  if (kind === 'url') return (
    <Chrome title="Malicious URL detection results">
      {urls.map(([u, s, c], i) => (
        <g key={u} transform={`translate(24 ${50 + i * 38})`}>
          <rect width="270" height="28" rx="8" fill="#1a2760" />
          <text x="12" y="18" fill="#c9d1f5" fontSize="11" fontFamily="monospace">{u}</text>
          <rect x="208" y="6" width="54" height="16" rx="8" fill={c} opacity=".2" />
          <text x="235" y="17.5" textAnchor="middle" fill={c} fontSize="9" fontWeight="700" fontFamily="sans-serif">{s}</text>
        </g>
      ))}
      <path d="M350 66 l36 12 v32 c0 24-16 38-36 46 c-20-8-36-22-36-46 v-32 z" fill="url(#g1)" />
      <path d="M334 112 l12 12 l22-26" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="206" width="352" height="8" rx="4" fill="#1a2760" /><rect x="24" y="206" width="318" height="8" rx="4" fill="url(#g1)" />
    </Chrome>
  )
  if (kind === 'swag') return (
    <Chrome title="Playwright test report">
      {tests.map((t, i) => (
        <g key={t} transform={`translate(26 ${48 + i * 34})`}>
          <circle cx="9" cy="9" r="9" fill="#34d399" opacity=".2" />
          <path d="M4.5 9.5 l3.5 3.5 l6-7.5" stroke="#34d399" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="28" y="13" fill="#d6dcf5" fontSize="12" fontFamily="sans-serif">{t}</text>
          <text x="348" y="13" textAnchor="end" fill="#8d97c9" fontSize="11" fontFamily="monospace">{(0.6 + i * 0.3).toFixed(1)}s</text>
        </g>
      ))}
      <rect x="26" y="192" width="140" height="22" rx="11" fill="#34d399" opacity=".18" />
      <text x="96" y="207" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="700" fontFamily="sans-serif">4 passed · 0 failed</text>
    </Chrome>
  )
  if (kind === 'safari') return (
    <Chrome title="Safari booking platform">
      <rect y="30" width="400" height="200" fill="url(#sky)" />
      <circle cx="290" cy="104" r="30" fill="#fde68a" />
      <polygon points="0,230 0,165 70,102 130,172 190,122 270,202 330,150 400,190 400,230" fill="#1e1b4b" />
      <polygon points="0,230 0,195 90,152 170,208 250,172 340,216 400,204 400,230" fill="#0b1030" />
      <rect x="24" y="48" width="150" height="74" rx="12" fill="#0b1030" opacity=".82" />
      <text x="38" y="74" fill="#fff" fontSize="14" fontWeight="700" fontFamily="serif">Wild Safari</text>
      <rect x="38" y="88" width="90" height="7" rx="3.5" fill="#fff" opacity=".3" /><rect x="38" y="102" width="64" height="7" rx="3.5" fill="#fff" opacity=".3" />
      <rect x="24" y="134" width="100" height="26" rx="13" fill="url(#g1)" />
      <text x="74" y="151" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">Book now</text>
    </Chrome>
  )
  return (
    <Chrome title="E-commerce store">
      {['#4f46e5', '#14b8a6', '#a5b4fc'].map((c, i) => (
        <g key={c} transform={`translate(${24 + i * 118} 46)`}>
          <rect width="104" height="100" rx="10" fill="#1a2760" />
          <rect x="10" y="10" width="84" height="52" rx="7" fill={c} opacity=".85" />
          <rect x="10" y="70" width="60" height="8" rx="4" fill="#c9d1f5" opacity=".6" />
          <rect x="10" y="84" width="34" height="8" rx="4" fill="#5eead4" />
        </g>
      ))}
      <rect x="24" y="162" width="352" height="44" rx="10" fill="#1a2760" />
      <text x="40" y="189" fill="#d6dcf5" fontSize="12" fontFamily="sans-serif">Cart · 3 items</text>
      <rect x="276" y="170" width="88" height="28" rx="14" fill="url(#g1)" />
      <text x="320" y="188" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">Checkout</text>
    </Chrome>
  )
}
