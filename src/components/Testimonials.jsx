import { testimonials } from '../data/content';
import Reveal from './Reveal';
import Icon from './Icon';
import './Testimonials.css';

function Card({ t }) {
  return (
    <figure className="tcard">
      <div className="tcard__top">
        <span className="avatar">{t.initials}</span>
        <div>
          <figcaption>{t.name}</figcaption>
          <small>{t.role}</small>
        </div>
        <span className="tcard__quote">“</span>
      </div>
      <div className="tcard__stars" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={16} fill="currentColor" stroke={0} />)}
      </div>
      <blockquote>{t.text}</blockquote>
    </figure>
  );
}

export default function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  // repeat each row so one half of the marquee is always wider than the screen
  const fill = (row) => { let r = [...row]; while (r.length < 8) r = r.concat(row); return r; };
  const rowA = fill(testimonials.slice(0, half));
  const rowB = fill(testimonials.slice(half));

  return (
    <section className="section section--soft testimonials" id="testimonials">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>What Our <span className="grad-text">Clients</span> Say</h2>
          <div className="t__rating">
            <span className="t__stars">
              {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={20} fill="currentColor" stroke={0} />)}
            </span>
            <span><b>5.0</b> average from client reviews</span>
          </div>
        </Reveal>
      </div>

      <div className="t__rows">
        <div className="marquee" style={{ '--speed': '55s' }}>
          <div className="marquee__track">
            {[...rowA, ...rowA].map((t, i) => <Card t={t} key={`a${i}`} />)}
          </div>
        </div>
        <div className="marquee marquee--reverse" style={{ '--speed': '60s' }}>
          <div className="marquee__track">
            {[...rowB, ...rowB].map((t, i) => <Card t={t} key={`b${i}`} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
