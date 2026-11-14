import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/content';
import Reveal from './Reveal';
import Icon from './Icon';
import './CaseStudies.css';

export default function CaseStudies() {
  const trackRef = useRef(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const [progress, setProgress] = useState(0);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    const card = el.querySelector('.case');
    el.scrollBy({ left: dir * (card.clientWidth + 24), behavior: 'smooth' });
  };

  useEffect(() => {
    const el = trackRef.current;
    const onScroll = () => setProgress(el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth));
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  
  const onDown = (e) => {
    drag.current = { down: true, x: e.pageX, left: trackRef.current.scrollLeft, moved: false };
    trackRef.current.classList.add('is-dragging');
  };
  const onMove = (e) => {
    if (!drag.current.down) return;
    const dx = e.pageX - drag.current.x;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    trackRef.current.scrollLeft = drag.current.left - dx;
  };
  const onUp = () => {
    drag.current.down = false;
    trackRef.current?.classList.remove('is-dragging');
  };

  return (
    <section className="section cases" id="cases">
      <div className="container">
        <div className="cases__head">
          <Reveal variant="left">
            <span className="eyebrow">Our Work</span>
            <h2>Case Studies</h2>
          </Reveal>
          <Reveal className="cases__arrows" variant="right">
            <button onClick={() => scrollBy(-1)} aria-label="Previous"><Icon name="arrowLeft" /></button>
            <button onClick={() => scrollBy(1)} aria-label="Next"><Icon name="arrow" /></button>
          </Reveal>
        </div>
      </div>

      <div
        className="cases__track"
        ref={trackRef}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onClickCapture={(e) => { if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); } }}
      >
        {caseStudies.map((c, i) => (
          <Link to={`/case-studies/${c.slug}`} className="case" key={c.slug} style={{ '--hue': c.hue }} draggable="false">
            <div className="case__media">
              <div className="case__mock">
                <div className="case__mock-bar"><i /><i /><i /></div>
                <div className="case__mock-body">
                  <span className="w60" /><span className="w90" /><span className="w40" />
                  <div className="case__mock-cards"><b /><b /><b /></div>
                </div>
              </div>
              <span className="case__tag">{c.tag}</span>
            </div>
            <div className="case__body">
              <div className="case__metric"><strong>{c.metric}</strong><span>{c.metricLabel}</span></div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <span className="case__link">View case study <Icon name="arrow" size={16} /></span>
            </div>
            <span className="case__num">0{i + 1}</span>
          </Link>
        ))}
      </div>

      <div className="container">
        <div className="cases__bar"><span style={{ transform: `scaleX(${0.2 + progress * 0.8})` }} /></div>
      </div>
    </section>
  );
}
