import { useEffect, useState } from 'react';
import logo from '../assets/nyabix-logo.png';
import { footer, company } from '../data/content';
import Icon from './Icon';
import './Footer.css';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="footer" id="careers">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" className="footer__logo"><img src={logo} alt="NYABIX" /></a>
            <p>{footer.blurb}</p>
            <form
              className="footer__news"
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); setEmail(''); }}
            >
              <input
                type="email" required placeholder="Your email address"
                value={email} onChange={(e) => setEmail(e.target.value)}
                aria-label="Email for newsletter"
              />
              <button type="submit" aria-label="Subscribe"><Icon name="arrow" size={18} /></button>
            </form>
            {subscribed && <small className="footer__ok">Thanks for subscribing!</small>}
          </div>

          {footer.columns.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>{col.links.map((l) => <li key={l}><a href="#top">{l}</a></li>)}</ul>
            </div>
          ))}

          <div className="footer__col">
            <h4>Get in touch</h4>
            <ul className="footer__contact">
              <li><Icon name="phone" size={16} /><a href={company.phoneHref}>{company.phone}</a></li>
              <li><Icon name="mail" size={16} /><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><Icon name="pin" size={16} />{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer__big" aria-hidden="true">NYABIX</div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} NYABIX. All rights reserved.</p>
          <div className="footer__social">
            {['linkedin', 'x', 'facebook', 'instagram'].map((s) => (
              <a href="#" key={s} aria-label={s}><Icon name={s} size={17} /></a>
            ))}
          </div>
        </div>
      </div>

      <a href="#top" className={`to-top ${showTop ? 'is-shown' : ''}`} aria-label="Back to top">
        <Icon name="arrow" size={20} style={{ transform: 'rotate(-90deg)' }} />
      </a>
    </footer>
  );
}
