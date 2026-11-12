import { useEffect, useRef, useState } from 'react';
import { slides } from '../data/homeV2';
import Icon from '../components/Icon';
import SectionLink from '../components/SectionLink';
import './HeroSlider.css';

const DURATION = 6500;

/* Original CSS illustrations, one per slide type */
function Art({ type }) {
  if (type === 'ai') {
    return (
      <div className="art art--ai">
        <div className="art-ai__core"><Icon name="ai" size={56} stroke={1.5} /></div>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <span key={i} className="art-ai__node" style={{ '--i': i }} />)}
        <div className="art-ai__ring" /><div className="art-ai__ring art-ai__ring--2" />
        <div className="art-chip art-chip--a"><b>98.2%</b> model accuracy</div>
      </div>
    );
  }
  if (type === 'mobile') {
    return (
      <div className="art art--mobile">
        <div className="art-phone">
          <div className="art-phone__screen">
            <div className="art-phone__hero" />
            {[0, 1, 2].map((i) => <div key={i} className="art-phone__row" style={{ '--i': i }}><i /><span /></div>)}
          </div>
        </div>
        <div className="art-chip art-chip--a"><Icon name="star" size={14} fill="currentColor" stroke={0} /><b>4.8</b> app rating</div>
        <div className="art-chip art-chip--b"><b>120k</b> downloads</div>
      </div>
    );
  }
  if (type === 'web') {
    return (
      <div className="art art--web">
        <div className="art-win">
          <div className="art-win__bar"><i /><i /><i /></div>
          <div className="art-win__body">
            <div className="art-win__kpis"><b /><b /><b /></div>
            <svg viewBox="0 0 300 100" className="art-win__line" preserveAspectRatio="none">
              <path d="M0 80 C40 70 60 40 100 50 S160 20 200 30 S260 10 300 5" />
            </svg>
          </div>
        </div>
        <div className="art-chip art-chip--a"><b>0.8s</b> load time</div>
      </div>
    );
  }
  if (type === 'team') {
    return (
      <div className="art art--team">
        {['FE', 'BE', 'QA', 'UX', 'AI', 'PM'].map((r, i) => (
          <span key={r} className="art-team__avatar" style={{ '--i': i }}>{r}</span>
        ))}
        <div className="art-team__center"><Icon name="users" size={46} stroke={1.6} /></div>
        <div className="art-chip art-chip--a"><b>48 hrs</b> to onboard</div>
      </div>
    );
  }
  return (
    <div className="art art--code">
      <div className="art-code">
        <p><em>const</em> idea = <s>'your product'</s>;</p>
        <p><em>await</em> nyabix.<u>design</u>(idea);</p>
        <p><em>await</em> nyabix.<u>build</u>(idea);</p>
        <p className="ok">✓ launched</p>
      </div>
      <div className="art-chip art-chip--a"><b>120+</b> projects shipped</div>
      <div className="art-chip art-chip--b"><Icon name="check" size={14} stroke={3} /> On time</div>
    </div>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const total = slides.length;
  const go = (i) => setIndex((i + total) % total);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), DURATION);
    return () => clearTimeout(t);
  }, [index, paused]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      className="hs"
      id="top"
      style={{ '--hue': slides[index].hue }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="hs__bg" aria-hidden="true">
        <div className="hs__glow" />
        <div className="hs__mesh" />
      </div>

      <div className="container hs__stage">
        {slides.map((s, i) => (
          <div className={`hs__slide ${i === index ? 'is-active' : ''}`} key={s.title} aria-hidden={i !== index}>
            <div className="hs__copy">
              <span className="hs__kicker">{s.kicker}</span>
              <h1>{s.title}</h1>
              <p>{s.body}</p>
              <div className="hs__ctas">
                <SectionLink href="#contact" className="btn btn--primary" tabIndex={i === index ? 0 : -1}>{s.primary} <Icon name="arrow" size={18} /></SectionLink>
                <SectionLink href="#work" className="btn btn--ghost" tabIndex={i === index ? 0 : -1}>See Our Work</SectionLink>
              </div>
            </div>
            <div className="hs__art"><Art type={s.art} /></div>
          </div>
        ))}
      </div>

      <div className="container hs__controls">
        <div className="hs__dots" role="tablist" aria-label="Slides">
          {slides.map((s, i) => (
            <button
              key={s.title} role="tab" aria-selected={i === index} aria-label={`Slide ${i + 1}`}
              className={`hs__dot ${i === index ? 'is-active' : ''}`} onClick={() => go(i)}
            >
              <span className="hs__dot-label">{s.kicker}</span>
              <i>{i === index && <b style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? 'paused' : 'running' }} />}</i>
            </button>
          ))}
        </div>
        <div className="hs__arrows">
          <span className="hs__count"><b>{String(index + 1).padStart(2, '0')}</b> / {String(total).padStart(2, '0')}</span>
          <button onClick={() => go(index - 1)} aria-label="Previous slide"><Icon name="arrowLeft" size={20} /></button>
          <button onClick={() => go(index + 1)} aria-label="Next slide"><Icon name="arrow" size={20} /></button>
        </div>
      </div>
    </section>
  );
}
