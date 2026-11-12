import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function NotFound() {
  useEffect(() => { document.title = 'Page not found | NYABIX'; }, []);
  return (
    <main className="cs-hero" id="top" style={{ minHeight: '80vh', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>404</p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800 }}>We couldn't find that page</h1>
        <p style={{ margin: '16px auto 32px', maxWidth: 480, color: 'var(--ink-2)' }}>
          It may have moved. Head back home or browse our case studies.
        </p>
        <Link to="/" className="btn btn--primary">Back to Home <Icon name="arrow" size={18} /></Link>
      </div>
    </main>
  );
}
