import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/* Saved scroll position for every visited page (keyed by history entry) */
const positions = {};

const scrollToHash = (hash, behavior) => {
  const el = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (el) el.scrollIntoView({ behavior, block: 'start' });
  return !!el;
};

/**
 * Handles scrolling when the route changes:
 *  - Back / Forward  -> returns to where you were on that page
 *  - Link to "/#id"  -> lands exactly on that section
 *  - Any other link  -> starts at the top of the new page
 */
export default function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType(); // 'PUSH' | 'POP' | 'REPLACE'
  const prevPath = useRef(location.pathname);

  // We control scroll restoration ourselves (the browser's version fights React)
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  // Remember the scroll position of the current page
  useEffect(() => {
    const key = location.key;
    const save = () => { positions[key] = window.scrollY; };
    window.addEventListener('scroll', save, { passive: true });
    return () => window.removeEventListener('scroll', save);
  }, [location.key]);

  useEffect(() => {
    const changedPage = prevPath.current !== location.pathname;
    prevPath.current = location.pathname;
    const timers = [];
    const later = (fn, ms) => timers.push(setTimeout(fn, ms));

    // 1) Back / Forward: restore the saved position
    const saved = positions[location.key];
    if (navType === 'POP' && saved != null) {
      window.scrollTo({ top: saved, behavior: 'instant' });
      later(() => window.scrollTo({ top: saved, behavior: 'instant' }), 100); // after layout settles
      return () => timers.forEach(clearTimeout);
    }

    // 2) Link to a section: "/#process", "/#cases" ...
    if (location.hash) {
      if (changedPage) {
        // New page: jump straight to the section, then re-check once the layout has settled
        window.scrollTo({ top: 0, behavior: 'instant' });
        later(() => scrollToHash(location.hash, 'instant'), 0);
        later(() => scrollToHash(location.hash, 'instant'), 350);
      } else {
        // Same page: smooth scroll
        later(() => scrollToHash(location.hash, 'smooth'), 0);
      }
      return () => timers.forEach(clearTimeout);
    }

    // 3) Normal page change: start at the top
    if (changedPage) window.scrollTo({ top: 0, behavior: 'instant' });
    return () => timers.forEach(clearTimeout);
  }, [location.key]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
