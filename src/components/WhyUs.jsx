import { whyUs, company } from '../data/content';
import Reveal from './Reveal';
import Icon from './Icon';
import './WhyUs.css';

/** Card that lights up under the cursor */
function SpotCard({ item, index }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <Reveal className="why__card" delay={index * 100} onMouseMove={onMove}>
      <span className="why__icon"><Icon name={item.icon} size={26} /></span>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <span className="why__index">0{index + 1}</span>
    </Reveal>
  );
}

export default function WhyUs() {
  return (
    <section className="section section--dark why" id="why">
      <div className="why__bg" aria-hidden="true" />
      <div className="container why__layout">
        <Reveal className="why__intro" variant="left">
          <span className="eyebrow">Why choose us</span>
          <h2>{whyUs.title.replace('NYABIX', '')}<span className="grad-text why__brand">NYABIX</span></h2>
          <p>{whyUs.intro}</p>
          <a href={company.bookingUrl} className="btn btn--primary">{whyUs.cta} <Icon name="arrow" size={18} /></a>
        </Reveal>
        <div className="why__grid">
          {whyUs.items.map((it, i) => <SpotCard key={it.title} item={it} index={i} />)}
        </div>
      </div>
    </section>
  );
}
