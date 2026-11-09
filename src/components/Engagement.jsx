import { engagement } from '../data/content';
import Reveal from './Reveal';
import Icon from './Icon';
import './Engagement.css';

const visuals = ['shield', 'code', 'globe'];

export default function Engagement() {
  return (
    <section className="section section--soft engagement" id="engagement">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">How we work together</span>
          <h2>{engagement.title}</h2>
          <p>{engagement.intro}</p>
        </Reveal>

        {/* Sticky stacking cards: each card pins and the next slides over it */}
        <div className="stack">
          {engagement.cards.map((c, i) => (
            <article className="stack__card" key={c.title} style={{ '--i': i }}>
              <div className="stack__visual">
                <div className="stack__visual-inner">
                  <span className="stack__num">0{i + 1}</span>
                  <div className="stack__shape"><Icon name={visuals[i]} size={70} stroke={1.4} /></div>
                  <div className="stack__lines"><i /><i /><i /></div>
                </div>
              </div>
              <div className="stack__body">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <h4>{c.listTitle}:</h4>
                <ul>
                  {c.list.map((li) => (
                    <li key={li}><span><Icon name="check" size={13} stroke={3} /></span>{li}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <Reveal className="engagement__cta">
          <a href="#contact" className="btn btn--primary">{engagement.cta} <Icon name="arrow" size={18} /></a>
        </Reveal>
      </div>
    </section>
  );
}
