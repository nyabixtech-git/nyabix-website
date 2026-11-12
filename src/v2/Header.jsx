import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/nyabix-logo.png';
import { navV2, aiBanner } from '../data/homeV2';
import { company } from '../data/content';
import Icon from '../components/Icon';
import SectionLink from '../components/SectionLink';
import ProposalPanel from './ProposalPanel';
import './Header.css';

function NavItem({ item, onNavigate }) {
  if (item.href === '/') return <Link to="/" onClick={onNavigate}>{item.label}</Link>;
  return <SectionLink href={item.href} onClick={onNavigate}>{item.label}</SectionLink>;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [stripClosed, setStripClosed] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setExpanded(null); }, [pathname]);
  useEffect(() => { document.body.style.overflow = menuOpen || panelOpen ? 'hidden' : ''; }, [menuOpen, panelOpen]);

  const closeMenu = () => { setMenuOpen(false); setExpanded(null); };
  const onLogo = () => { closeMenu(); if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <>
      <header className={`hd ${scrolled ? 'hd--scrolled' : ''}`}>
        {/* Top AI strip */}
        {!stripClosed && (
          <div className="hd-strip">
            <div className="container hd-strip__inner">
              <span className="hd-strip__badge">AI</span>
              <p><b>{aiBanner.kicker}:</b> {aiBanner.title}</p>
              <SectionLink href="#ai" className="hd-strip__link">{aiBanner.cta} <Icon name="arrow" size={14} /></SectionLink>
              <button className="hd-strip__x" onClick={() => setStripClosed(true)} aria-label="Close banner"><Icon name="close" size={14} /></button>
            </div>
          </div>
        )}

        <div className="container hd__bar">
          <Link to="/" className="hd__logo" onClick={onLogo} aria-label="NYABIX home">
            <img src={logo} alt="NYABIX" />
          </Link>

          <nav className="hd__nav" aria-label="Main">
            <ul>
              {navV2.map((item) => (
                <li key={item.label} className={item.children ? 'hd-has-drop' : ''}>
                  {item.children ? (
                    <>
                      <SectionLink href={item.href} className="hd__link">
                        {item.label} <Icon name="chevron" size={14} />
                      </SectionLink>
                      <div className="hd-drop">
                        <div className="hd-drop__intro">
                          <h4>{item.heading}</h4>
                          <p>{item.intro}</p>
                          <SectionLink href={item.href} className="hd-drop__all">View all <Icon name="arrow" size={14} /></SectionLink>
                        </div>
                        <ul className="hd-drop__list">
                          {item.children.map((c) => (
                            <li key={c.label}>
                              <SectionLink href={c.href}>
                                <strong>{c.label}</strong>
                                <span>{c.desc}</span>
                              </SectionLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <span className="hd__link-wrap"><NavItem item={item} /></span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hd__right">
            <a href={company.phoneHref} className="hd__phone"><Icon name="phone" size={16} /> {company.phone}</a>
            <button className="hd__cta" onClick={() => setPanelOpen(true)}>Estimate Project</button>
            <button className={`hd__burger ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div className={`hd-mobile ${menuOpen ? 'is-open' : ''}`}>
        <ul>
          {navV2.map((item, i) => (
            <li key={item.label} style={{ '--i': i }}>
              {item.children ? (
                <>
                  <button onClick={() => setExpanded(expanded === i ? null : i)}>
                    {item.label} <Icon name="chevron" size={20} className={expanded === i ? 'rot' : ''} />
                  </button>
                  <div className={`hd-mobile__sub ${expanded === i ? 'is-open' : ''}`}>
                    <div>{item.children.map((c) => <SectionLink key={c.label} href={c.href} onClick={closeMenu}>{c.label}</SectionLink>)}</div>
                  </div>
                </>
              ) : (
                <NavItem item={item} onNavigate={closeMenu} />
              )}
            </li>
          ))}
        </ul>
        <div className="hd-mobile__foot">
          <a href={company.phoneHref} className="hd__phone"><Icon name="phone" size={16} /> {company.phone}</a>
          <button className="hd__cta" onClick={() => { closeMenu(); setPanelOpen(true); }}>Estimate Project</button>
        </div>
      </div>

      <ProposalPanel open={panelOpen} onClose={() => setPanelOpen(false)} />
    </>
  );
}
