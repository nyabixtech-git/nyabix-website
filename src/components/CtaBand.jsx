import { ctaBand } from '../data/content';
import Reveal from './Reveal';
import Icon from './Icon';
import './CtaBand.css';

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__box">
          <Reveal className="cta__media" variant="left">
            {/* Replace with an office/team photo: <img src="..." alt="NYABIX office" /> */}
            <div className="cta__art" aria-hidden="true">
              <div className="cta__block cta__block--1" />
              <div className="cta__block cta__block--2" />
              <div className="cta__block cta__block--3" />
              <div className="cta__ring" />
            </div>
          </Reveal>
          <Reveal className="cta__copy" variant="right">
            <h2>{ctaBand.title}</h2>
            <p>{ctaBand.body}</p>
            <a href="#contact" className="btn cta__btn">{ctaBand.cta} <Icon name="arrow" size={18} /></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
