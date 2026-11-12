import { proofCards, clientLogos } from '../data/content';
import useInView from '../hooks/useInView';
import useCountUp from '../hooks/useCountUp';
import Reveal from './Reveal';
import Icon from './Icon';
import './Proof.css';

function CountLine({ value, suffix, label, start }) {
  const n = useCountUp(value, start, 2200);
  return (
    <div className="proof__count">
      <strong>~{n}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function Proof() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const { projects, engineering, team } = proofCards;

  return (
    <section className="proof" id="proof" ref={ref}>
      <div className="container proof__grid">
        <Reveal className="proof__card proof__card--logos" delay={0}>
          <h4><span className="grad-text">{projects.value}</span> {projects.label}</h4>
          <div className="marquee" style={{ '--speed': '22s' }}>
            <div className="marquee__track">
              {[...clientLogos, ...clientLogos].map((name, i) => (
                <span className="client-logo" key={i}>
                  <i style={{ '--h': (i * 37) % 360 }} />{name}
                </span>
              ))}
            </div>
          </div>
          <hr />
          <p className="proof__muted">{engineering.title}</p>
          <div className="proof__counts">
            {engineering.lines.map((l) => <CountLine key={l.label} {...l} start={inView} />)}
          </div>
        </Reveal>

        <Reveal className="proof__card proof__card--team" delay={120}>
          <div className="avatars">
            {team.initials.map((ini, i) => (
              <span className="avatar" key={ini} style={{ '--i': i }}>{ini}</span>
            ))}
            <span className="avatar avatar--more">+10</span>
          </div>
          <h4>{team.title}</h4>
          <hr />
          <p className="proof__muted">{team.body}</p>
        </Reveal>

        {/* <Reveal className="proof__card proof__card--awards" delay={240}>
          <h4>{awards.title}</h4>
          <hr />
          <p className="proof__muted">{awards.body}</p>
          <div className="badges">
            {awards.badges.map((b, i) => (
              <div className="badge" key={b} style={{ '--i': i }}>
                <Icon name="award" size={22} />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
