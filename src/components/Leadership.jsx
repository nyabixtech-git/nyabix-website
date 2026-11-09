import { leadership } from '../data/content';
import Reveal from './Reveal';
import Icon from './Icon';
import './Leadership.css';

export default function Leadership() {
  return (
    <section className="section section--soft leadership" id="leadership">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The people behind NYABIX</span>
          <h2>Leadership</h2>
        </Reveal>
        <div className="lead__grid">
          {leadership.map((p, i) => (
            <Reveal className="lead__card" key={p.name} delay={i * 150} variant={i ? 'right' : 'left'}>
              <div className="lead__photo">
                {/* Replace with <img src="..." alt={p.name} /> */}
                <span className="lead__initials">{p.initials}</span>
                <div className="lead__social">
                  <a href="#" aria-label={`${p.name} on LinkedIn`}><Icon name="linkedin" size={18} /></a>
                </div>
              </div>
              <div className="lead__info">
                <h3>{p.name}</h3>
                <span className="lead__role">{p.role}</span>
                <p>{p.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
