import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { caseStudies, getCaseStudy } from '../data/caseStudies';
import useInView from '../hooks/useInView';
import useCountUp from '../hooks/useCountUp';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import CaseMockup from '../components/CaseMockup';
import Contact from '../components/Contact';
import NotFound from './NotFound';
import '../components/CaseStudies.css';
import './CaseStudyPage.css';

/* Thin progress bar at the top of the page while reading */
function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="cs-progress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />;
}

function ResultTile({ r, start, index }) {
  const n = useCountUp(r.value, start, 2000, r.decimals || 0);
  return (
    <Reveal className="cs-result" delay={index * 90}>
      <strong>{r.text ?? <>{n}<span>{r.suffix}</span></>}</strong>
      <p>{r.label}</p>
    </Reveal>
  );
}

/* Re-mount the page for each case study so animations replay */
export default function CaseStudyPage() {
  const { slug } = useParams();
  return <CaseStudyContent key={slug} slug={slug} />;
}

function CaseStudyContent({ slug }) {
  const cs = getCaseStudy(slug);
  const [resultsRef, resultsIn] = useInView({ threshold: 0.3 });

  useEffect(() => {
    document.title = cs ? `${cs.title} | Case Study | NYABIX` : 'Case study not found | NYABIX';
  }, [cs]);

  if (!cs) return <NotFound />;

  const index = caseStudies.indexOf(cs);
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const more = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3);
  const altVisual = cs.visual === 'web' ? 'mobile' : 'web';

  return (
    <main className="cs" style={{ '--hue': cs.hue }}>
      <ReadingProgress />

      {/* ============ HERO ============ */}
      <section className="cs-hero" id="top">
        <div className="cs-hero__bg" aria-hidden="true">
          <div className="cs-hero__grid" />
          <div className="cs-hero__orb cs-hero__orb--1" />
          <div className="cs-hero__orb cs-hero__orb--2" />
        </div>

        <div className="container cs-hero__inner">
          <div className="cs-hero__copy">
            <nav className="cs-crumbs anim" style={{ '--d': '0.05s' }} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <Icon name="chevron" size={14} />
              <Link to="/#cases">Case Studies</Link>
              <Icon name="chevron" size={14} />
              <span>{cs.title}</span>
            </nav>
            <span className="cs-tag anim" style={{ '--d': '0.12s' }}><span className="hero__pulse" />{cs.tag} Case Study</span>
            <h1 className="anim" style={{ '--d': '0.2s' }}>{cs.title}</h1>
            <p className="cs-hero__summary anim" style={{ '--d': '0.3s' }}>{cs.summary}</p>
            <div className="cs-hero__ctas anim" style={{ '--d': '0.4s' }}>
              <a href="#contact" className="btn btn--primary">Discuss Your Project <Icon name="arrow" size={18} /></a>
              <a href="#results" className="btn btn--ghost">See the Results</a>
            </div>
          </div>

          <div className="cs-hero__visual anim" style={{ '--d': '0.35s' }}>
            <CaseMockup variant={cs.visual} title={cs.title} />
            <div className="cs-hero__chip">
              <strong>{cs.metric}</strong>
              <span>{cs.metricLabel}</span>
            </div>
          </div>
        </div>

        <div className="container">
          <dl className="cs-meta anim" style={{ '--d': '0.5s' }}>
            <div><dt><Icon name="globe" size={16} /> Client</dt><dd>{cs.client}</dd></div>
            <div><dt><Icon name="code" size={16} /> Services</dt><dd>{cs.services.join(', ')}</dd></div>
            <div><dt><Icon name="star" size={16} /> Industry</dt><dd>{cs.industry}</dd></div>
            <div><dt><Icon name="pm" size={16} /> Timeline</dt><dd>{cs.timeline}</dd></div>
          </dl>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="section cs-about">
        <div className="container cs-about__grid">
          <Reveal variant="left">
            <span className="eyebrow">About the Project</span>
            <h2 className="cs-h2">Project <span className="grad-text">overview</span></h2>
            {cs.about.map((p, i) => <p className="cs-lead" key={i}>{p}</p>)}
            <div className="cs-platforms">
              <span>Available on</span>
              {cs.platforms.map((pl) => (
                <b key={pl}><Icon name={pl === 'Web' ? 'web' : 'mobile'} size={16} />{pl}</b>
              ))}
            </div>
          </Reveal>
          <Reveal className="cs-about__card" variant="right">
            <div className="cs-about__metric">
              <strong>{cs.metric}</strong>
              <span>{cs.metricLabel}</span>
            </div>
            <ul>
              <li><span>Industry</span><b>{cs.industry}</b></li>
              <li><span>Timeline</span><b>{cs.timeline}</b></li>
              <li><span>Platforms</span><b>{cs.platforms.join(' · ')}</b></li>
              <li><span>Team</span><b>Design · Engineering · QA</b></li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ OBJECTIVES ============ */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Vision & Objectives</span>
            <h2>What we set out to <span className="grad-text">achieve</span></h2>
          </Reveal>
          <div className="cs-objectives">
            {cs.objectives.map((o, i) => (
              <Reveal className="cs-obj" key={o.title} delay={i * 120}>
                <span className="cs-obj__num">0{i + 1}</span>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHALLENGES ============ */}
      <section className="section section--dark cs-challenges">
        <div className="cs-challenges__glow" aria-hidden="true" />
        <div className="container cs-split">
          <Reveal className="cs-split__intro" variant="left">
            <span className="eyebrow">Core Challenges</span>
            <h2 className="cs-h2">The problems we had to <span className="cs-hl">solve</span></h2>
            <p>Every project has its hard parts. These were the ones that shaped how we designed and built {cs.title.toLowerCase()}.</p>
          </Reveal>
          <ol className="cs-challenge-list">
            {cs.challenges.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 120} variant="right">
                <span className="cs-challenge__icon"><Icon name="arrow" size={20} /></span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
                <span className="cs-challenge__num">0{i + 1}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ MID CTA ============ */}
      <section className="cs-banner-wrap">
        <div className="container">
          <Reveal className="cs-banner" variant="zoom">
            <div>
              <h2>Have a similar project in mind?</h2>
              <p>Tell us about your idea and we'll show you how we'd approach it — free, with no obligation.</p>
            </div>
            <a href="#contact" className="btn cs-banner__btn">Let's Talk <Icon name="arrow" size={18} /></a>
          </Reveal>
        </div>
      </section>

      {/* ============ SOLUTION ============ */}
      <section className="section cs-solution">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The Solution</span>
            <h2>How we <span className="grad-text">built it</span></h2>
            <p>{cs.solution.intro}</p>
          </Reveal>
          <div className="cs-solution__grid">
            <Reveal className="cs-solution__visual" variant="left">
              <CaseMockup variant={altVisual} title={cs.title} />
            </Reveal>
            <div className="cs-features">
              {cs.solution.features.map((f, i) => (
                <Reveal className="cs-feature" key={f.title} delay={i * 130} variant="right">
                  <span className="cs-feature__icon"><Icon name={f.icon} size={26} /></span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ RESULTS ============ */}
      <section className="section section--dark cs-results" id="results" ref={resultsRef}>
        <div className="cs-results__glow" aria-hidden="true" />
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Project Impact</span>
            <h2>The <span className="cs-hl">results</span></h2>
          </Reveal>
          <div className="cs-results__grid">
            {cs.results.map((r, i) => <ResultTile key={r.label} r={r} start={resultsIn} index={i} />)}
          </div>
          <div className="cs-impact">
            {cs.impact.map((im, i) => (
              <Reveal className="cs-impact__item" key={im.title} delay={i * 90}>
                <span><Icon name="check" size={16} stroke={3} /></span>
                <div>
                  <h4>{im.title}</h4>
                  <p>{im.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TECH STACK ============ */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Tech Stack</span>
            <h2>Tools & <span className="grad-text">technologies</span></h2>
          </Reveal>
          <div className="cs-tech">
            {cs.tech.map((group, gi) => (
              <Reveal className="cs-tech__row" key={group.category} delay={gi * 90}>
                <h3>{group.category}</h3>
                <div className="cs-tech__items">
                  {group.items.map((t) => (
                    <div className="cs-tech__item" key={t.name}>
                      <span className="cs-tech__logo">{t.name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2)}</span>
                      <div><strong>{t.name}</strong><small>{t.desc}</small></div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="section cs-quote-wrap">
        <div className="container">
          <Reveal className="cs-quote" variant="zoom">
            <span className="cs-quote__mark" aria-hidden="true">“</span>
            <div className="cs-quote__stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={20} fill="currentColor" stroke={0} />)}
            </div>
            <blockquote>{cs.testimonial.quote}</blockquote>
            <div className="cs-quote__by">
              <span className="avatar">{cs.testimonial.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}</span>
              <div><strong>{cs.testimonial.name}</strong><small>{cs.testimonial.role}</small></div>
            </div>
          </Reveal>

          <nav className="cs-pager" aria-label="More case studies">
            <Link to={`/case-studies/${prev.slug}`} className="cs-pager__link">
              <Icon name="arrowLeft" size={20} />
              <div><small>Previous case study</small><strong>{prev.title}</strong></div>
            </Link>
            <Link to={`/case-studies/${next.slug}`} className="cs-pager__link cs-pager__link--next">
              <div><small>Next case study</small><strong>{next.title}</strong></div>
              <Icon name="arrow" size={20} />
            </Link>
          </nav>
        </div>
      </section>

      {/* ============ MORE CASE STUDIES ============ */}
      <section className="section section--soft">
        <div className="container">
          <div className="cases__head">
            <Reveal variant="left">
              <span className="eyebrow">Keep exploring</span>
              <h2>More Case Studies</h2>
            </Reveal>
            <Reveal variant="right">
              <Link to="/#cases" className="btn btn--outline">View all <Icon name="arrow" size={18} /></Link>
            </Reveal>
          </div>
          <div className="cs-more">
            {more.map((c, i) => (
              <Reveal key={c.slug} delay={i * 110}>
                <Link to={`/case-studies/${c.slug}`} className="case" style={{ '--hue': c.hue }}>
                  <div className="case__media">
                    <div className="case__mock">
                      <div className="case__mock-bar"><i /><i /><i /></div>
                      <div className="case__mock-body">
                        <span className="w60" /><span className="w90" /><span className="w40" />
                        <div className="case__mock-cards"><b /><b /><b /></div>
                      </div>
                    </div>
                    <span className="case__tag">{c.tag}</span>
                  </div>
                  <div className="case__body">
                    <div className="case__metric"><strong>{c.metric}</strong><span>{c.metricLabel}</span></div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                    <span className="case__link">View case study <Icon name="arrow" size={16} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
