import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesV2, industries, solutions, techStack, clientsV2, aiBanner } from '../data/homeV2';
import { caseStudies, testimonials, company } from '../data/content';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import SectionLink from '../components/SectionLink';
import '../components/Contact.css';
import './ProposalPanel.css';
import './Sections.css';

/* ---------------- About strip ---------------- */
export function AboutStrip() {
  return (
    <section className="v2-about" id="about">
      <div className="container v2-about__grid">
        <Reveal variant="left">
          <span className="eyebrow">Who we are</span>
          <h2 className="v2-h2">A software partner that ships, <span className="grad-text">not just codes</span></h2>
        </Reveal>
        <Reveal variant="right">
          <p className="v2-about__text">
            NYABIX is a custom software development company. We design and build web platforms, mobile apps and AI
            solutions for startups and growing businesses — with clear communication and delivery you can see.
          </p>
          <div className="v2-about__nums">
            <div><strong>120+</strong><span>Projects delivered</span></div>
            <div><strong>98%</strong><span>Client satisfaction</span></div>
            <div><strong>8 yrs</strong><span>Building software</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Services grid ---------------- */
export function ServicesGrid() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="v2-head">
          <Reveal variant="left">
            <span className="eyebrow">Our Services</span>
            <h2 className="v2-h2">Everything you need to <span className="grad-text">launch & grow</span></h2>
          </Reveal>
          <Reveal variant="right"><p>From first prototype to millions of users, our teams cover strategy, design, engineering and support.</p></Reveal>
        </div>
        <div className="v2-services">
          {servicesV2.map((s, i) => (
            <Reveal className="v2-svc" key={s.title} delay={(i % 3) * 100}>
              <span className="v2-svc__num">0{i + 1}</span>
              <span className="v2-svc__icon"><Icon name={s.icon} size={30} stroke={1.7} /></span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <SectionLink href="#contact" className="v2-more">Explore More <Icon name="arrow" size={16} /></SectionLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI band ---------------- */
export function AiBand() {
  return (
    <section className="v2-ai" id="ai">
      <div className="container">
        <Reveal className="v2-ai__box" variant="zoom">
          <div className="v2-ai__grid" aria-hidden="true" />
          <div className="v2-ai__orb" aria-hidden="true" />
          <div className="v2-ai__copy">
            <span className="v2-ai__kicker"><span className="hero__pulse" /> {aiBanner.kicker}</span>
            <h2>{aiBanner.title}</h2>
            <p>{aiBanner.body}</p>
            <SectionLink href="#contact" className="btn btn--primary">{aiBanner.cta} <Icon name="arrow" size={18} /></SectionLink>
          </div>
          <ul className="v2-ai__list">
            {['AI chat assistants', 'Document & image AI', 'Predictive analytics', 'Workflow automation'].map((t, i) => (
              <li key={t} style={{ '--i': i }}><Icon name="check" size={16} stroke={3} />{t}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Industries ---------------- */
export function Industries() {
  const [active, setActive] = useState(0);
  return (
    <section className="section section--soft" id="industries">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Industries</span>
          <h2>Industries we <span className="grad-text">serve</span></h2>
          <p>Deep experience across sectors means fewer surprises and faster delivery.</p>
        </Reveal>
        <div className="v2-ind">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.title}
              delay={i * 70}
              className={`v2-ind__tile ${i === active ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(i)}
            >
              <span className="v2-ind__icon"><Icon name={ind.icon} size={26} stroke={1.8} /></span>
              <h3>{ind.title}</h3>
              <p>{ind.body}</p>
              <Icon name="arrow" size={18} className="v2-ind__go" />
            </Reveal>
          ))}
          <Reveal delay={490} className="v2-ind__tile v2-ind__tile--cta">
            <h3>Don't see your industry?</h3>
            <p>We adapt quickly. Tell us about your space.</p>
            <SectionLink href="#contact" className="v2-more v2-more--light">Talk to us <Icon name="arrow" size={16} /></SectionLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Case studies ---------------- */
export function Work() {
  const [featured, ...rest] = caseStudies;
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="v2-head">
          <Reveal variant="left">
            <span className="eyebrow">Case Studies</span>
            <h2 className="v2-h2">Work that <span className="grad-text">speaks for itself</span></h2>
          </Reveal>
          <Reveal variant="right"><p>A few of the products we've designed, built and launched with our clients.</p></Reveal>
        </div>

        <Reveal variant="zoom">
          <Link to={`/case-studies/${featured.slug}`} className="v2-feat" style={{ '--hue': featured.hue }}>
            <div className="v2-feat__copy">
              <div className="v2-tags"><span>{featured.tag}</span><span>{featured.platforms.join(' · ')}</span></div>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
              <div className="v2-feat__metric"><strong>{featured.metric}</strong><span>{featured.metricLabel}</span></div>
              <span className="v2-more v2-more--light">View Case Study <Icon name="arrow" size={16} /></span>
            </div>
            <div className="v2-feat__art" aria-hidden="true">
              <div className="v2-feat__win"><i /><i /><i />
                <div><b /><b /><b /><em /></div>
              </div>
            </div>
          </Link>
        </Reveal>

        <div className="v2-work">
          {rest.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 120}>
              <Link to={`/case-studies/${c.slug}`} className="v2-case" style={{ '--hue': c.hue }}>
                <div className="v2-case__top">
                  <span className="v2-case__logo">{c.title.split(' ').map((w) => w[0]).join('').slice(0, 2)}</span>
                  <div className="v2-tags v2-tags--dark"><span>{c.tag}</span><span>{c.platforms[0]}</span></div>
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <div className="v2-case__foot">
                  <div className="v2-case__metric"><strong>{c.metric}</strong><span>{c.metricLabel}</span></div>
                  <span className="v2-case__go"><Icon name="arrow" size={18} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Clients marquee ---------------- */
export function Clients() {
  const rowA = clientsV2.slice(0, 6);
  const rowB = clientsV2.slice(6);
  const Logo = ({ name, i }) => (
    <span className="v2-client"><i style={{ '--h': i * 23 }} />{name}</span>
  );
  return (
    <section className="v2-clients">
      <div className="container">
        <Reveal as="p" className="v2-clients__title">Trusted by startups and growing businesses</Reveal>
      </div>
      <div className="marquee" style={{ '--speed': '32s' }}>
        <div className="marquee__track">{[...rowA, ...rowA, ...rowA, ...rowA].map((n, i) => <Logo key={i} name={n} i={i} />)}</div>
      </div>
      <div className="marquee marquee--reverse" style={{ '--speed': '36s' }}>
        <div className="marquee__track">{[...rowB, ...rowB, ...rowB, ...rowB].map((n, i) => <Logo key={i} name={n} i={i + 6} />)}</div>
      </div>
    </section>
  );
}

/* ---------------- Solutions + tech stack ---------------- */
export function SolutionsTech() {
  const tabs = Object.keys(techStack);
  const [tab, setTab] = useState(tabs[0]);
  return (
    <section className="section section--dark v2-sol" id="solutions">
      <div className="v2-sol__glow" aria-hidden="true" />
      <div className="container">
        <div className="v2-sol__grid">
          <Reveal variant="left" className="v2-sol__intro">
            <span className="eyebrow">Solutions</span>
            <h2 className="v2-h2">{solutions.title}</h2>
            <p>{solutions.body}</p>
            <SectionLink href="#contact" className="btn btn--primary">Get a Free Consultation <Icon name="arrow" size={18} /></SectionLink>
          </Reveal>
          <div className="v2-sol__tiles">
            {solutions.items.map((s, i) => (
              <Reveal className="v2-sol__tile" key={s.label} delay={i * 60}>
                <Icon name={s.icon} size={26} stroke={1.7} />
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="v2-tech">
          <div className="v2-tech__head">
            <h3>Our Tech Stack</h3>
            <div className="v2-tech__tabs" role="tablist">
              {tabs.map((t) => (
                <button key={t} role="tab" aria-selected={t === tab} className={t === tab ? 'is-on' : ''} onClick={() => setTab(t)}>{t}</button>
              ))}
            </div>
          </div>
          <div className="v2-tech__grid" key={tab}>
            {techStack[tab].map((name, i) => (
              <div className="v2-tech__item" key={name} style={{ '--i': i }}>
                <span>{name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2)}</span>
                {name}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Reviews carousel ---------------- */
export function Reviews() {
  const [i, setI] = useState(0);
  const [perView, setPerView] = useState(3);
  const max = Math.max(0, testimonials.length - perView);

  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth < 700 ? 1 : window.innerWidth < 1060 ? 2 : 3);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  useEffect(() => { if (i > max) setI(max); }, [max, i]);
  useEffect(() => {
    const t = setTimeout(() => setI((n) => (n >= max ? 0 : n + 1)), 5000);
    return () => clearTimeout(t);
  }, [i, max]);

  return (
    <section className="section section--soft" id="reviews">
      <div className="container">
        <div className="v2-head">
          <Reveal variant="left">
            <span className="eyebrow">Ratings & Reviews</span>
            <h2 className="v2-h2">What our <span className="grad-text">clients say</span></h2>
          </Reveal>
          <Reveal variant="right" className="v2-rev__nav">
            <button onClick={() => setI(i <= 0 ? max : i - 1)} aria-label="Previous review"><Icon name="arrowLeft" size={20} /></button>
            <button onClick={() => setI(i >= max ? 0 : i + 1)} aria-label="Next review"><Icon name="arrow" size={20} /></button>
          </Reveal>
        </div>
        <div className="v2-rev__viewport">
          <div className="v2-rev__track" style={{ '--per': perView, transform: `translateX(calc(${-i} * (100% + 24px) / var(--per)))` }}>
            {testimonials.map((t, n) => (
              <figure className="v2-rev" key={n}>
                <div className="v2-rev__stars">{Array.from({ length: 5 }).map((_, k) => <Icon key={k} name="star" size={16} fill="currentColor" stroke={0} />)}</div>
                <blockquote>{t.text}</blockquote>
                <figcaption>
                  <span className="avatar">{t.initials}</span>
                  <div><strong>{t.name}</strong><small>{t.role}</small></div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="v2-rev__dots">
          {Array.from({ length: max + 1 }).map((_, n) => (
            <button key={n} className={n === i ? 'is-on' : ''} onClick={() => setI(n)} aria-label={`Go to review ${n + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact band ---------------- */
export function ContactBand() {
  const [sent, setSent] = useState(false);
  return (
    <section className="v2-contact" id="contact">
      <div className="container v2-contact__grid">
        <Reveal variant="left" className="v2-contact__info">
          <span className="eyebrow">Contact Us</span>
          <h2 className="v2-h2">Let's talk about your <span className="v2-hl">next project</span></h2>
          <p>Share your idea and get a free consultation, estimate and timeline from our team.</p>
          <ul>
            <li><span><Icon name="pin" size={18} /></span><div><small>Headquarters</small>{company.address}</div></li>
            <li><span><Icon name="phone" size={18} /></span><div><small>Call us</small><a href={company.phoneHref}>{company.phone}</a></div></li>
            <li><span><Icon name="mail" size={18} /></span><div><small>Email</small><a href={`mailto:${company.email}`}>{company.email}</a></div></li>
          </ul>
        </Reveal>
        <Reveal variant="right" className="v2-contact__card">
          {sent ? (
            <div className="v2-contact__done">
              <span><Icon name="check" size={32} stroke={3} /></span>
              <h3>Thank you!</h3>
              <p>We'll get back to you within one business day.</p>
              <button className="btn btn--outline" onClick={() => setSent(false)}>Send another</button>
            </div>
          ) : (
            /* TODO: connect onSubmit to your backend / Formspree / EmailJS */
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <h3>Request a FREE Proposal</h3>
              <div className="field-row">
                <label className="field"><input required placeholder=" " /><span>Full name</span></label>
                <label className="field"><input required type="email" placeholder=" " /><span>Email</span></label>
              </div>
              <div className="field-row">
                <label className="field"><input type="tel" placeholder=" " /><span>Phone</span></label>
                <label className="field"><input placeholder=" " /><span>Company</span></label>
              </div>
              <label className="field"><textarea rows={4} required placeholder=" " /><span>Tell us about your project</span></label>
              <label className="pp__consent"><input type="checkbox" required /> I agree to be contacted about my request.</label>
              <button className="btn btn--primary" type="submit">Submit <Icon name="arrow" size={18} /></button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
