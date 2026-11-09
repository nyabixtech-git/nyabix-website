import { useEffect, useState } from 'react';
import logo from '../assets/nyabix-logo.png';
import { navLinks, company } from '../data/content';
import Icon from './Icon';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > 500 && y > last + 4);   // hide on scroll down, show on scroll up
      if (y < last - 4) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => { setOpen(false); setExpanded(null); };

  return (
    <>
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${hidden && !open ? 'nav--hidden' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="NYABIX home">
          <img src={logo} alt="NYABIX" />
        </a>

        <nav className="nav__links" aria-label="Main">
          <ul>
            {navLinks.map((l) => (
              <li key={l.label} className={l.children ? 'has-drop' : ''}>
                <a href={l.href}>
                  {l.label}
                  {l.children && <Icon name="chevron" size={14} />}
                </a>
                {l.children && (
                  <div className={`drop ${l.mega ? 'drop--mega' : ''}`}>
                    <div className="drop__grid">
                      {l.children.map((c) => (
                        <a key={c.label} href={c.href} className="drop__item">
                          <strong>{c.label}</strong>
                          <span>{c.desc}</span>
                        </a>
                      ))}
                    </div>
                    {l.mega && (
                      <a href={company.bookingUrl} className="drop__cta">
                        <span>Not sure what you need?</span>
                        <strong>Book a free consultation <Icon name="arrow" size={16} /></strong>
                      </a>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__right">
          <a href={company.phoneHref} className="nav__phone">
            <span className="nav__phone-ic"><Icon name="phone" size={15} /></span>
            {company.phone}
          </a>
          <a href="#careers" className="nav__jobs">Jobs</a>
          <a href="#contact" className="btn btn--primary nav__cta">Contact</a>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile drawer (outside header so backdrop-filter doesn't trap it) */}
      <div className={`drawer ${open ? 'is-open' : ''} ${scrolled ? 'drawer--scrolled' : ''}`}>
        <ul>
          {navLinks.map((l, i) => (
            <li key={l.label} style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}>
              {l.children ? (
                <>
                  <button className="drawer__toggle" onClick={() => setExpanded(expanded === i ? null : i)}>
                    {l.label}
                    <Icon name="chevron" size={18} className={expanded === i ? 'rot' : ''} />
                  </button>
                  <div className={`drawer__sub ${expanded === i ? 'is-open' : ''}`}>
                    <div>
                      {l.children.map((c) => (
                        <a key={c.label} href={c.href} onClick={close}>{c.label}</a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a href={l.href} onClick={close}>{l.label}</a>
              )}
            </li>
          ))}
          <li style={{ transitionDelay: open ? '380ms' : '0ms' }}><a href="#careers" onClick={close}>Jobs</a></li>
        </ul>
        <div className="drawer__foot">
          <a href={company.phoneHref} className="nav__phone"><span className="nav__phone-ic"><Icon name="phone" size={15} /></span>{company.phone}</a>
          <a href="#contact" className="btn btn--primary" onClick={close}>Contact Us</a>
        </div>
      </div>
    </>
  );
}
