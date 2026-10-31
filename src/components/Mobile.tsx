import type { CSSProperties, ReactNode } from "react";
import { GRADIENTS } from "../content/gradients";
import { IMAGES } from "../content/images";
import {
  NAV, LINKS, HOME, ABOUT, SKILLS, EXPERIENCE, CERTIFICATES, PROJECTS, ENGLISH, CONTACT, type IconName,
} from "../content/mobile";

/* ───────── util ───────── */
const imgSrc = (key: string): string | undefined => {
  const e = IMAGES[key];
  return !e ? undefined : typeof e === "string" ? e : e.src;
};
const imgPos = (key: string): string | undefined => {
  const e = IMAGES[key];
  return e && typeof e !== "string" ? e.position : undefined;
};
const imgAlt = (key: string, fallback: string): string => {
  const e = IMAGES[key];
  return e && typeof e !== "string" && e.alt ? e.alt : fallback;
};

const panel = (i: number): CSSProperties => {
  const g = GRADIENTS[i];
  const stops = g.c.map((c, k) => `rgb(${c.join(",")}) ${g.p[k]}%`).join(",");
  return { background: `linear-gradient(${g.a}deg,${stops})` };
};

/* ───────── ikon ───────── */
const S = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.4, viewBox: "0 0 24 24", "aria-hidden": true } as const;

const ICONS: Record<IconName, ReactNode> = {
  home: (<svg {...S}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h5v-6h4v6h5V10" /></svg>),
  user: (<svg {...S}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></svg>),
  bolt: (<svg {...S}><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg>),
  briefcase: (<svg {...S}><rect height="13" rx="3" width="18" x="3" y="7" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" /></svg>),
  award: (<svg {...S}><circle cx="12" cy="9" r="6" /><path d="M8 14l-2 8 6-3 6 3-2-8" /></svg>),
  grid: (<svg {...S}><rect height="7" rx="2" width="7" x="3" y="3" /><rect height="7" rx="2" width="7" x="14" y="3" /><rect height="7" rx="2" width="7" x="3" y="14" /><rect height="7" rx="2" width="7" x="14" y="14" /></svg>),
  book: (<svg {...S}><path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5v-15z" /><path d="M4 20.5A2.5 2.5 0 006.5 18H20v3H6.5A2.5 2.5 0 014 20.5z" /></svg>),
  mail: (<svg {...S}><rect height="14" rx="3" width="18" x="3" y="5" /><path d="M3 8l9 6 9-6" /></svg>),
};

const Arrow = () => (<svg {...S} strokeWidth={3}><path d="M7 17L17 7M8 7h9v9" /></svg>);

const Socials = ({ className = "" }: { className?: string }) => (
  <div className={`m-socials ${className}`}>
    <a aria-label="GitHub" href={LINKS.github} target="_blank" rel="noopener noreferrer">
      <svg {...S}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
    </a>
    <a aria-label="LinkedIn" className="m-in" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">in</a>
    <a aria-label="Instagram" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
      <svg {...S}><rect height="18" rx="5" width="18" x="3" y="3" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" fill="currentColor" r="1" /></svg>
    </a>
    <a aria-label="Email" href={`mailto:${LINKS.email}`}>{ICONS.mail}</a>
  </div>
);

/* ───────── potongan umum ───────── */
const Head = ({ n, title, children }: { n: string; title: ReactNode; children?: ReactNode }) => (
  <header className="m-head m-rv">
    <div className="m-num">{n} <span>»»</span></div>
    <h2 className="m-title">{title}</h2>
    {children}
  </header>
);

const Photo = ({ k, label, className, eager }: { k: string; label: string; className: string; eager?: boolean }) => {
  const src = imgSrc(k);
  return (
    <div className={`m-photo ${className}`}>
      {src ? (
        <img src={src} alt={imgAlt(k, label)} style={{ objectPosition: imgPos(k) }} loading={eager ? "eager" : "lazy"} decoding="async" draggable={false} />
      ) : (
        <span className="m-ph">[{label.toUpperCase()}]</span>
      )}
    </div>
  );
};

const Tags = ({ tags }: { tags: string[] }) => (
  <ul className="m-tags">{tags.map((t) => (<li key={t}>{t}</li>))}</ul>
);

const DOT = ["pink", "cyan", "yellow", "violet"] as const;

/* ───────── halaman mobile ───────── */
export default function Mobile() {
  return (
    <div id="m-app">
      {/* Bar atas */}
      <div className="m-top">
        <a className="m-logo" href="#home" aria-label="Home">
          <svg viewBox="0 0 26 26" fill="currentColor" aria-hidden="true">
            {[5, 13, 21].flatMap((y) => [5, 13, 21].map((x) => ({ x, y }))).filter((p) => !(p.x === 21 && p.y === 21)).map((p) => (<circle key={`${p.x}${p.y}`} cx={p.x} cy={p.y} r="2" />))}
          </svg>
        </a>
        <div className="m-cur" aria-live="polite"><b data-m-cur-n>01</b><span data-m-cur-t>Home</span></div>
        <div className="m-top-r">
          <button type="button" className="m-ic m-theme" aria-label="Toggle theme">
            <svg className="m-moon" {...S}><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" /></svg>
            <svg className="m-sun" {...S}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          </button>
          <a className="m-ic m-cta" href="#contact" aria-label="Contact"><Arrow /></a>
        </div>
      </div>

      <main className="m-main">
        {/* 01 · HOME */}
        <section id="home" className="m-sec m-home" data-m-sec data-n="01" data-t="Home" style={panel(0)}>
          <i className="m-bar m-bar1" /><i className="m-bar m-bar2" /><i className="m-dots" /><i className="m-half" />
          <div className="m-hero m-rv">
            <i className="m-blob" />
            <svg className="m-spark" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 2 C34 22 42 30 62 32 C42 34 34 42 32 62 C30 42 22 34 2 32 C22 30 30 22 32 2Z" fill="#FFE53B" /></svg>
            <div className="m-avatar"><Photo k="home-photo" label="Your profile photo" className="m-avatar-in" eager /></div>
            <span className="m-chip m-chip-top">{HOME.tagTop}</span>
            <span className="m-chip m-chip-ring">{HOME.tagRing}</span>
          </div>
          <div className="m-num m-num-home m-rv">01 <span>»»</span></div>
          <div className="m-hello m-rv"><span>{HOME.hi}</span><span className="m-role">{HOME.role}<em /></span></div>
          <h1 className="m-name m-rv"><span>{HOME.first}</span><span>{HOME.last}</span></h1>
          <div className="m-stats m-rv">
            {HOME.stats.map((s) => (
              <div className="m-stat" key={s.small}><strong>{s.big} <span>{s.small}</span></strong><small>{s.note}</small></div>
            ))}
          </div>
          <p className="m-tagline m-rv">{HOME.tagline}</p>
          <p className="m-school m-rv">{HOME.school}</p>
          <div className="m-actions m-rv">
            <a className="m-btn m-btn-dark" href="#projects">View Projects <span className="m-btn-ic"><Arrow /></span></a>
            <a className="m-btn m-btn-ghost" href="#contact">Download CV</a>
          </div>
          <Socials className="m-rv" />
        </section>

        {/* 02 · ABOUT */}
        <section id="about" className="m-sec m-about" data-m-sec data-n="02" data-t="About" style={panel(1)}>
          <Head n="02" title="About" />
          <Photo k="about-photo" label="Your photo" className="m-about-photo m-rv" />
          <div className="m-edu m-rv">
            <small>{ABOUT.edu.kicker}</small>
            <strong>{ABOUT.edu.school}</strong>
            <span>{ABOUT.edu.degree}</span>
            <em>{ABOUT.edu.years}</em>
          </div>
          <div className="m-glass m-rv">
            {ABOUT.paragraphs.map((p) => (<p key={p}>{p}</p>))}
            <ul className="m-pills">
              {ABOUT.highlights.map((h) => (
                <li key={h.text}><span className={`m-pill-ic t-${h.tone}`}>{ICONS[h.icon as IconName]}</span>{h.text}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 03 · SKILLS */}
        <section id="skills" className="m-sec m-skills" data-m-sec data-n="03" data-t="Skills" style={panel(2)}>
          <Head n="03" title="Skills"><p className="m-lead">{SKILLS.intro}</p></Head>
          <div className="m-skill-grid m-slider" data-m-slider>
            {SKILLS.groups.map((g, gi) => (
              <article className={`m-skill t-${g.tone} m-rv`} key={g.title}>
                <header><h3>{g.title}</h3><b>{String(g.items.length).padStart(2, "0")}</b></header>
                <ul>
                  {g.items.map(([name, yrs], ri) => {
                    const src = imgSrc(`skill-${gi + 1}-${ri + 1}`);
                    return (
                      <li key={name}>
                        <span className={`m-dot d-${DOT[ri % DOT.length]}`}>{src && <img src={src} alt="" loading="lazy" decoding="async" />}</span>
                        <span className="m-skill-n">{name}</span>
                        <span className="m-skill-y">{yrs}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* 04 · EXPERIENCE */}
        <section id="experience" className="m-sec m-exp" data-m-sec data-n="04" data-t="Experience" style={panel(3)}>
          <i className="m-ex-b1" /><i className="m-ex-b2" />
          <Head n="04" title="Experience"><p className="m-lead">{EXPERIENCE.intro}</p></Head>
          <div className="m-total m-rv"><b>{EXPERIENCE.total}</b><span>{EXPERIENCE.totalLabel}</span></div>
          <ol className="m-timeline">
            {EXPERIENCE.items.map((it, i) => (
              <li className={`m-tl ${i % 2 ? "alt" : ""} m-rv`} key={it.role + it.date}>
                <i className={`m-node n${i % 3}`} />
                <div className="m-tl-meta"><span className="m-date">{it.date}</span><span className="m-span">{it.span}</span></div>
                <h3>{it.role}</h3>
                <p className="m-org">{it.org}</p>
                <p className="m-desc">{it.desc}</p>
                <span className={`m-tag-pill p${i % 3}`}>{it.tag}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* 05 · CERTIFICATES */}
        <section id="certificates" className="m-sec m-certs" data-m-sec data-n="05" data-t="Certificates" style={panel(4)}>
          <i className="m-ce-b1" />
          <Head n="05" title="Certificates">
            <p className="m-lead m-lead-dark">{CERTIFICATES.intro}</p>
            <div className="m-row">
              <span className="m-count">{CERTIFICATES.count}</span>
              <a className="m-btn m-btn-yellow" href="#certificates" data-cert-all>View all certificates →</a>
            </div>
          </Head>
          <div className="m-cert-grid m-slider" data-m-slider>
            {CERTIFICATES.items.map((c) => (
              <article className={`m-cert t-${c.tone} m-rv`} key={c.n} data-cert-card={c.n}>
                <div className="m-cert-top">
                  <span className="m-cert-logo">{imgSrc(c.logo) && <img src={imgSrc(c.logo)} alt="" loading="lazy" decoding="async" />}</span>
                  <span className="m-mono" data-f="issuer">{c.issuer}</span>
                </div>
                <h3 data-f="name">{c.name}</h3>
                <div className="m-cert-foot">
                  <span className="m-mono" data-f="date">{c.date}</span>
                  <a className="m-btn m-btn-sm" href="#certificates" data-cert={c.n} data-cert-src={imgSrc(`certificate-${c.n}`)}>View certificate ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 06 · PROJECTS */}
        <section id="projects" className="m-sec m-projects" data-m-sec data-n="06" data-t="Projects" style={panel(5)}>
          <i className="m-pr-b1" />
          <Head n="06" title="Projects">
            <a className="m-btn m-btn-dark m-btn-sm" href={PROJECTS.all.href} target="_blank" rel="noopener noreferrer">{PROJECTS.all.label}</a>
          </Head>
          <div className="m-proj-grid m-slider" data-m-slider>
            {PROJECTS.items.map((p) => (
              <article className={`m-proj t-${p.tone} m-rv`} key={p.title}>
                <div className="m-proj-img">
                  {imgSrc(p.img) ? (<img src={imgSrc(p.img)} alt={p.title} loading="lazy" decoding="async" draggable={false} />) : (<span className="m-ph">[PROJECT IMAGE]</span>)}
                  {p.featured && <span className="m-feat">★ FEATURED</span>}
                </div>
                <div className="m-proj-meta"><span className="m-done">DONE</span><span className="m-mono">{p.meta}</span></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Tags tags={p.tags} />
                <div className="m-proj-links">
                  {p.links.map((l) => (
                    <a key={l.label} className={`m-btn m-btn-sm ${l.primary ? "m-btn-pri" : "m-btn-out"}`} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 07 · ENGLISH TASK */}
        <section id="english-task" className="m-sec m-eng" data-m-sec data-n="07" data-t="English Task" style={panel(6)}>
          <i className="m-en-b1" />
          <Head n="07" title="English Task" />
          <div className="m-eng-grid m-slider" data-m-slider>
            {ENGLISH.items.map((t, i) => (
              <article className={`m-eng-card c${i % 3} m-rv`} key={t.title}>
                <div className="m-eng-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <Tags tags={t.tags} />
                <a className="m-btn m-btn-sm m-btn-pri" href={t.href} target="_blank" rel="noopener noreferrer">Open Task ↗</a>
              </article>
            ))}
          </div>
        </section>

        {/* 08 · CONTACT */}
        <section id="contact" className="m-sec m-contact" data-m-sec data-n="08" data-t="Contact" style={panel(7)}>
          <i className="m-co-b1" /><i className="m-co-b2" />
          <Head n="08" title={<>Contact<br />Me</>}>
            <p className="m-lead">{CONTACT.lead}</p>
          </Head>
          <div className="m-info m-rv">
            <a className="m-chipbox" href={`mailto:${LINKS.email}`}><span className="m-pill-ic t-yellow">{ICONS.mail}</span><span className="m-mono">{LINKS.email}</span></a>
            <div className="m-chipbox"><span className="m-pill-ic t-cyan"><svg {...S}><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg></span><span className="m-mono">{CONTACT.location}</span></div>
          </div>
          <Socials className="m-rv" />
          <form className="m-form m-rv" noValidate>
            <span className="m-form-tag">{CONTACT.formTag}</span>
            {CONTACT.fields.map((f) => (
              <label key={f.id} htmlFor={`m-${f.id}`}><span>{f.label}</span><input id={`m-${f.id}`} name={f.id} type={f.type} placeholder={f.placeholder} autoComplete={f.id === "name" ? "name" : f.id === "email" ? "email" : "off"} /></label>
            ))}
            <label htmlFor="m-message"><span>{CONTACT.messageLabel}</span><textarea id="m-message" name="message" rows={5} placeholder={CONTACT.messagePlaceholder} /></label>
            <button type="submit" className="m-btn m-btn-white">{CONTACT.send} <span className="m-btn-ic pink"><Arrow /></span></button>
          </form>
        </section>
      </main>

      {/* Navigasi bawah (pengganti sidebar desktop) */}
      <nav className="m-nav" aria-label="Sections">
        {NAV.map((n, i) => (
          <a key={n.id} href={`#${n.id}`} aria-label={n.label} title={n.label} className={i === 0 ? "act" : ""} data-m-nav={n.id}>{ICONS[n.icon]}</a>
        ))}
      </nav>
    </div>
  );
}
