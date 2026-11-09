import { useState } from 'react';
import { faqs, company } from '../data/content';
import Reveal from './Reveal';
import Icon from './Icon';
import './Faq.css';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="container faq__layout">
        <Reveal className="faq__intro" variant="left">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked <span className="grad-text">Questions</span></h2>
          <p>Can't find what you're looking for? Our team is happy to help.</p>
          <a href={company.bookingUrl} className="btn btn--outline">Ask us anything <Icon name="arrow" size={18} /></a>
        </Reveal>

        <div className="faq__list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal className={`faq__item ${isOpen ? 'is-open' : ''}`} key={f.q} delay={i * 50}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                >
                  <span className="faq__num">{i + 1}</span>
                  <span className="faq__text">{f.q}</span>
                  <span className="faq__icon"><Icon name="plus" size={18} stroke={2.5} /></span>
                </button>
                <div className="faq__a" id={`faq-${i}`} role="region">
                  <div><p>{f.a}</p></div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
