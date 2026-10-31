/**
 * Layar loading saat pertama kali membuka website.
 * Di-render di server (langsung tampil sebelum JS siap), lalu dikendalikan oleh lib/loader.ts:
 * progres naik sampai font & gambar utama siap → tirai naik → konten terlihat.
 */
export default function Loader() {
  return (
    <div id="ld" className="ld" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="ld-shapes" aria-hidden="true">
        <i className="ld-s ld-s1" />
        <i className="ld-s ld-s2" />
        <i className="ld-s ld-s3" />
        <i className="ld-s ld-s4" />
        <svg className="ld-s ld-s5" viewBox="0 0 64 64">
          <path d="M32 2 C34 22 42 30 62 32 C42 34 34 42 32 62 C30 42 22 34 2 32 C22 30 30 22 32 2Z" fill="#FFE53B" />
        </svg>
      </div>

      <div className="ld-core">
        <div className="ld-logo" aria-hidden="true">
          <svg viewBox="0 0 26 26" fill="currentColor">
            {[5, 13, 21].flatMap((y) => [5, 13, 21].map((x) => ({ x, y }))).filter((p) => !(p.x === 21 && p.y === 21)).map((p, i) => (
              <circle key={`${p.x}${p.y}`} cx={p.x} cy={p.y} r="2" style={{ animationDelay: `${i * 0.09}s` }} />
            ))}
          </svg>
        </div>

        <div className="ld-name" aria-hidden="true">
          <span>NENDI B.</span>
          <span>SETIAWAN</span>
        </div>

        <div className="ld-meta">
          <span className="ld-label">Portfolio · Loading<em>_</em></span>
          <span className="ld-pct"><b data-ld-pct>0</b>%</span>
        </div>
        <div className="ld-bar" aria-hidden="true"><i /></div>
      </div>
    </div>
  );
}
