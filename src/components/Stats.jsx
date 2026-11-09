import { stats, media } from '../data/content';
import useInView from '../hooks/useInView';
import useCountUp from '../hooks/useCountUp';
import Reveal from './Reveal';
import './Stats.css';

function Stat({ stat, start, index }) {
  const n = useCountUp(stat.value, start, 2000, stat.decimals || 0);
  return (
    <Reveal className="stat" delay={index * 70}>
      <h3>{stat.text ?? <>{n}<span>{stat.suffix}</span></>}</h3>
      <p>{stat.label}</p>
    </Reveal>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <section className="stats section--dark" ref={ref}>
      <div className="stats__glow" aria-hidden="true" />
      <div className="container">
        <div className="stats__layout">
          <Reveal className="stats__globe" variant="zoom">
            <div className="globe" aria-hidden="true">
              <div className="globe__sphere">
                <div className="globe__lines" />
              </div>
              <span className="globe__dot" style={{ '--x': '30%', '--y': '35%' }} />
              <span className="globe__dot" style={{ '--x': '62%', '--y': '28%', '--dl': '-0.8s' }} />
              <span className="globe__dot" style={{ '--x': '70%', '--y': '58%', '--dl': '-1.6s' }} />
              <span className="globe__dot" style={{ '--x': '42%', '--y': '66%', '--dl': '-2.2s' }} />
            </div>
            <div className="stats__coverage">
              <small>Global Engineering Coverage</small>
              <strong>24<span>Hours</span></strong>
            </div>
          </Reveal>

          <div className="stats__grid">
            {stats.map((s, i) => <Stat key={s.label + i} stat={s} start={inView} index={i} />)}
          </div>
        </div>

        <div className="media">
          <Reveal as="h3" className="media__title">NYABIX in the <span className="grad-text">Media Spotlight</span></Reveal>
          <div className="marquee" style={{ '--speed': '35s' }}>
            <div className="marquee__track">
              {[...media, ...media].map((m, i) => (
                <span className="media__logo" key={i}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
