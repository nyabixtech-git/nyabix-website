import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/nyabix-logo.png';
import { footerV2, locations } from '../data/homeV2';
import { company } from '../data/content';
import Icon from '../components/Icon';
import SectionLink from '../components/SectionLink';
import './FooterV2.css';

export default function FooterV2() {
  const [showTop, setShowTop] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="ft">
      <div className="container">
        <div className="ft__cta">
          <h2>Have a project in mind?</h2>
          <SectionLink href="#contact" className="btn btn--primary">Let's Talk <Icon name="arrow" size={18} /></SectionLink>
        </div>

        <div className="ft__top">
          <div className="ft__brand">
            <Link to="/" className="ft__logo" onClick={() => pathname === '/' && toTop()}><img src={logo} alt="NYABIX" /></Link>
            <p>Custom software, AI and dedicated engineering teams for ambitious businesses.</p>
            <ul className="ft__contact">
              <li><Icon name="pin" size={16} />{company.address}</li>
              <li><Icon name="mail" size={16} /><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><Icon name="phone" size={16} /><a href={company.phoneHref}>{company.phone}</a></li>
            </ul>
          </div>
          {footerV2.map((col) => (
            <div className="ft__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => <li key={l.label}><SectionLink href={l.href}>{l.label}</SectionLink></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="ft__locs">
          <span>We work with clients in</span>
          <div>{locations.map((l) => <b key={l}><Icon name="globe" size={13} />{l}</b>)}</div>
        </div>

        <div className="ft__bottom">
          <p>© {new Date().getFullYear()} NYABIX. All rights reserved.</p>
          <div className="ft__legal">
            <a href="#">Privacy Policy</a>{/* TODO: link your policy page */}
            <a href="#">Terms of Service</a>
          </div>
          <div className="ft__social">
            {['linkedin', 'x', 'facebook', 'instagram'].map((s) => (
              <a href="#" key={s} aria-label={s}><Icon name={s} size={17} /></a>
            ))}
          </div>
        </div>
      </div>

      <button className={`to-top ${showTop ? 'is-shown' : ''}`} onClick={toTop} aria-label="Back to top">
        <Icon name="arrow" size={20} style={{ transform: 'rotate(-90deg)' }} />
      </button>
    </footer>
  );
}
