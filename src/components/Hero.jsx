import { useEffect, useState } from 'react';
import { hero } from '../data/content';
import Icon from './Icon';
import './Hero.css';

function RotatingWord({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className="rot-word" aria-live="polite">
      {words.map((w, idx) => (
        <span key={w} className={`rot-word__item ${idx === i ? 'is-active' : ''} ${idx === (i - 1 + words.length) % words.length ? 'is-leaving' : ''}`}>
          {w}
        </span>
      ))}
      <span className="rot-word__sizer">{words[i]}</span>
    </span>
  );
}

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
  };

  return (
    <section className="hero" id="top" onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__beam" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          {/* <span className="hero__eyebrow anim" style={{ '--d': '0.1s' }}>
            <span className="hero__pulse" /> {hero.eyebrow}
          </span> */}
          <h1 className="anim" style={{ '--d': '0.2s' }}>
            {hero.titleStart} <RotatingWord words={hero.rotatingWords} /> {hero.titleEnd}
          </h1>
          <p className="hero__sub anim" style={{ '--d': '0.35s' }}>{hero.subtitle}</p>
          <p className="hero__body anim" style={{ '--d': '0.45s' }}>{hero.body}</p>
          <div className="hero__ctas anim" style={{ '--d': '0.55s' }}>
            <a href="#engagement" className="btn btn--primary">
              {hero.primaryCta} <Icon name="arrow" size={18} />
            </a>
            <a href="#cases" className="btn btn--ghost">{hero.secondaryCta}</a>
          </div>
        </div>

        <div className="anim" style={{ '--d': '0.4s' }} aria-hidden="true">
        <div
          className="hero__visual"
          style={{ transform: `perspective(1200px) rotateY(${tilt.x * 8}deg) rotateX(${-tilt.y * 8}deg)` }}
        >
          <div className="hv-ring hv-ring--1" />
          <div className="hv-ring hv-ring--2" />

          <div className="hv-window">
            <div className="hv-window__bar"><i /><i /><i /><span>nyabix / build-pipeline</span></div>
            <div className="hv-code">
              <p><b className="k">const</b> team = <b className="f">assemble</b>([</p>
              <p className="in">'frontend', 'backend', 'ai', 'qa'</p>
              <p>]);</p>
              <p><b className="k">await</b> team.<b className="f">ship</b>(<b className="s">'your-idea'</b>);</p>
              <p className="ok">✓ Deployed to production <span className="caret" /></p>
            </div>
            <div className="hv-bars">
              {[62, 84, 48, 92, 70, 100, 78].map((h, i) => (
                <span key={i} style={{ '--h': `${h}%`, '--i': i }} />
              ))}
            </div>
          </div>

          <div className="hv-chip hv-chip--1"><Icon name="rocket" size={18} /><div><strong>Release v2.4</strong><span>shipped today</span></div></div>
          <div className="hv-chip hv-chip--2"><Icon name="check" size={18} /><div><strong>All tests passing</strong><span>1,248 checks</span></div></div>
          <div className="hv-chip hv-chip--3"><Icon name="ai" size={18} /><div><strong>AI model live</strong><span>98.2% accuracy</span></div></div>
        </div>
        </div>
      </div>

      <a href="#proof" className="hero__scroll" aria-label="Scroll down"><span /></a>
    </section>
  );
}
