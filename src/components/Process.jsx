import { processSteps } from '../data/content';
import useInView from '../hooks/useInView';
import Reveal from './Reveal';
import Icon from './Icon';
import './Process.css';

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className="section process" id="process">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Our Process</span>
          <h2>Simple, Transparent and <span className="grad-text">Outcome-Driven</span></h2>
        </Reveal>

        <div className={`process__track ${inView ? 'is-in' : ''}`} ref={ref}>
          <div className="process__line" aria-hidden="true"><span /></div>
          {processSteps.map((s, i) => (
            <div className="process__step" key={s.title} style={{ '--i': i }}>
              <div className="process__icon">
                <Icon name={s.icon} size={30} stroke={1.8} />
                <span className="process__num">{i + 1}</span>
              </div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
