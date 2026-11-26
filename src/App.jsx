import { useLayoutEffect } from 'react'
import './styles.css'
import * as d from './data.js'
import Shot from './art.jsx'
import { initAnimations, initExtras } from './motion.js'
import photo from './assets/sifra.jpg'
import heroBg from './assets/hero-bg.svg'

const Points = ({ items }) => (
  <ul className="tick">{items.map(t => <li key={t}>{t}</li>)}</ul>
)
const Chips = ({ items }) => (
  <div className="chips">{items.map(c => <span className="chip" key={c}>{c}</span>)}</div>
)
const Cards = ({ items }) => (
  <ul className="cred">
    {items.map(([a, b]) => <li key={a}><strong>{a}</strong><span>{b}</span></li>)}
  </ul>
)
const nav = [['about','About'],['experience','Experience'],['projects','Projects'],['skills','Skills'],['credentials','Credentials'],['contact','Contact']]
const stats = [['30+','functional test cases in the URL detection research'],['3','web platforms and apps tested end to end'],['4','ISO standards studied'],['4','professional certifications']]
const logos = ['CP', 'NB']
const kinds = ['swag', 'safari', 'shop']

export default function App() {
  useLayoutEffect(() => { initAnimations(); initExtras() }, [])
  const p = d.profile
  return (
    <>
      <nav><div className="wrap">
        <a className="brand" href="#top">{p.short}</a>
        <ul>{nav.map(([id, l]) => <li key={id}><a href={`#${id}`}>{l}</a></li>)}</ul>
      </div></nav>

      <header className="hero" id="top">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="wrap">
          <div>
            <h1>{p.name}</h1>
            <div className="role">{p.role}</div>
            <p className="lead">{p.lead}</p>
            <div className="btns">
              <a className="btn primary" href="#projects">View projects</a>
              <a className="btn ghost" href="#contact">Get in touch</a>
            </div>
          </div>
          <div className="portrait">
            <div className="frame"><img src={photo} alt="Portrait of Sifra Basayar" width="640" height="850" /></div>
            <span className="badge b1"><i />Playwright automation</span>
            <span className="badge b2"><i />ISO 27001 trained</span>
            <span className="badge b3"><i />JIRA bug tracking</span>
          </div>
        </div>
      </header>

      <div className="wrap statswrap"><div className="stats">
        {stats.map(([n, t]) => <div key={t}><b>{n}</b><span>{t}</span></div>)}
      </div></div>

      <section id="about"><div className="wrap about">
        <figure className="aboutpic">
          <img src={photo} alt="Sifra Basayar" loading="lazy" width="640" height="850" />
          <figcaption><span className="live" />Open to QA roles</figcaption>
        </figure>
        <div>
          <div className="head"><h2>About</h2></div>
          {d.about.map(t => <p key={t}>{t}</p>)}
          <div className="facts">
            {d.facts.map(([k, v]) => <div key={k}><span>{k}</span><strong>{v}</strong></div>)}
          </div>
        </div>
      </div></section>

      <section id="experience" className="alt"><div className="wrap">
        <div className="head"><h2>Experience</h2><p>Hands-on work in auditing and workflow automation.</p></div>
        <div className="tl">
          {d.jobs.map((j, i) => (
            <div className="job" key={j.title}>
              <div className="jobhead"><span className="logo">{logos[i]}</span><div><h3>{j.title}</h3><div className="org">{j.org}</div></div></div>
              <Points items={j.points} />
            </div>
          ))}
        </div>
      </div></section>

      <section id="projects"><div className="wrap">
        <div className="head"><h2>Projects and research</h2><p>Testing work across e-commerce, travel booking and security.</p></div>
        <div className="grid">
          <article className="p feature">
            <div><div className="tag">{d.research.tag}</div><h3>{d.research.title}</h3><Points items={d.research.points} /><Chips items={d.research.chips} /></div>
            <div className="shot"><Shot kind="url" /></div>
          </article>
          {d.projects.map((x, i) => (
            <article className="p" key={x.title}>
              <div className="shot"><Shot kind={kinds[i]} /></div>
              <div className="tag">{x.tag}</div><h3>{x.title}</h3><Points items={x.points} />
            </article>
          ))}
        </div>
      </div></section>

      <section id="skills" className="alt"><div className="wrap">
        <div className="head"><h2>Technical skills</h2></div>
        <div className="skills">
          {Object.entries(d.skills).map(([k, v]) => <div className="sk" key={k}><h3>{k}</h3><Chips items={v} /></div>)}
        </div>
      </div></section>

      <section id="credentials"><div className="wrap two">
        <div><h3>Training and standards</h3><Cards items={d.training} /></div>
        <div><h3>Certifications</h3><Cards items={d.certs} /></div>
      </div></section>

      <section id="contact" className="contact">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="wrap">
          <h2>Let’s work on software quality together</h2>
          <p>I’m open to QA, test automation and quality-focused roles. Send me a message and I’ll reply promptly.</p>
          <div className="btns">
            <a className="btn primary" href={`mailto:${p.email}`}>{p.email}</a>
            <a className="btn ghost" href={`tel:${p.phone.replace(/\s/g, '')}`}>{p.phone}</a>
            <a className="btn ghost" href={p.github} rel="noopener">GitHub</a>
            <a className="btn ghost" href={p.linkedin} rel="noopener">LinkedIn</a>
          </div>
          <div className="refs"><div><strong>References</strong>Available on request.</div></div>
        </div>
      </section>
      <footer className="end"><div className="wrap">© 2026 {p.name} · Anuradhapura, Sri Lanka</div></footer>
    </>
  )
}
