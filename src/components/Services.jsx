import { useEffect, useRef, useState } from 'react';
import { services, company } from '../data/content';
import Reveal from './Reveal';
import Icon from './Icon';
import './Services.css';

const AUTOPLAY_MS = 6000;

export default function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState(1);
  const tabsRef = useRef(null);
  const total = services.length;

  const go = (i) => {
    setDir(i > active || (active === total - 1 && i === 0) ? 1 : -1);
    setActive((i + total) % total);
  };

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(active + 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [active, paused]); // eslint-disable-line react-hooks/exhaustive-deps

  // keep active tab visible on small screens
  useEffect(() => {
    const el = tabsRef.current?.children[active];
    const wrap = tabsRef.current;
    if (el && wrap) wrap.scrollTo({ left: el.offsetLeft - wrap.clientWidth / 2 + el.clientWidth / 2, behavior: 'smooth' });
  }, [active]);

  const s = services[active];

  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Our Services</span>
          <h2>Create User Experiences Your Customers <span className="grad-text">Trust</span></h2>
        </Reveal>

        <Reveal className="svc__tabs">
          <div className="svc__tabs-track" ref={tabsRef} role="tablist">
            {services.map((sv, i) => (
              <button
                key={sv.tab}
                role="tab"
                aria-selected={i === active}
                className={`svc__tab ${i === active ? 'is-active' : ''}`}
                onClick={() => go(i)}
              >
                {sv.tab}
                {i === active && !paused && <span className="svc__tab-progress" style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal
          className="svc__panel"
          variant="zoom"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="svc__visual" key={`v${active}`} data-dir={dir}>
            <div className="svc__visual-bg" />
            <div className="svc__orbit">
              {[0, 1, 2, 3, 4, 5].map((n) => <span key={n} style={{ '--n': n }} />)}
            </div>
            <div className="svc__icon"><Icon name={s.icon} size={64} stroke={1.5} /></div>
            <div className="svc__brand">NYABIX</div>
            <div className="svc__count">{String(active + 1).padStart(2, '0')}</div>
          </div>

          <div className="svc__content" key={`c${active}`} data-dir={dir}>
            <span className="svc__kicker"><img src="/favicon.svg" alt="" /> {s.tab}</span>
            <h3>
              <a href="#contact">{s.title} <Icon name="arrow" size={26} /></a>
            </h3>
            <p>{s.body}</p>
            <ul className="svc__tags">
              {s.tags.map((t) => <li key={t}><Icon name="check" size={14} stroke={3} />{t}</li>)}
            </ul>
            <a href={company.bookingUrl} className="btn btn--primary">Book a free consultation <Icon name="arrow" size={18} /></a>
          </div>

          <div className="svc__nav">
            <button onClick={() => go(active - 1)} aria-label="Previous service"><Icon name="arrowLeft" size={20} /></button>
            <span><b>{active + 1}</b> / {total}</span>
            <button onClick={() => go(active + 1)} aria-label="Next service"><Icon name="arrow" size={20} /></button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
