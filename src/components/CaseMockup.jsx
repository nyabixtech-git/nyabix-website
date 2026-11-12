import './CaseMockup.css';

/**
 * Illustrated product mockup used on case study pages.
 * Replace with real screenshots when you have them:
 *   <img src="/images/your-project.png" alt="..." />
 */
export default function CaseMockup({ variant = 'web', title = '' }) {
  if (variant === 'mobile') {
    return (
      <div className="mock mock--mobile" aria-hidden="true">
        <div className="mock-phone mock-phone--back">
          <div className="mock-phone__notch" />
          <div className="mock-phone__screen">
            <span className="mk-line w50" />
            <div className="mk-tiles">{[0, 1, 2, 3].map((i) => <b key={i} />)}</div>
            <span className="mk-line w80" /><span className="mk-line w60" />
          </div>
        </div>
        <div className="mock-phone mock-phone--front">
          <div className="mock-phone__notch" />
          <div className="mock-phone__screen">
            <div className="mk-head"><i /><span className="mk-line w40" /></div>
            <div className="mk-hero-card"><span>{title}</span><div className="mk-ring" /></div>
            {[0, 1, 2].map((i) => (
              <div className="mk-row" key={i} style={{ '--i': i }}><i /><span className="mk-line w70" /></div>
            ))}
            <div className="mk-tabbar"><i /><i /><i /><i /></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mock mock--web" aria-hidden="true">
      <div className="mock-win">
        <div className="mock-win__bar"><i /><i /><i /><span>{title.toLowerCase().replace(/\s+/g, '-')}.app</span></div>
        <div className="mock-win__body">
          <aside className="mk-side">
            <b className="mk-logo" />
            {[0, 1, 2, 3, 4].map((i) => <span key={i} className={i === 1 ? 'is-on' : ''} />)}
          </aside>
          <div className="mk-main">
            <div className="mk-kpis">{[0, 1, 2].map((i) => <div key={i}><span className="mk-line w40" /><strong /></div>)}</div>
            <div className="mk-chart">
              {[45, 70, 55, 85, 60, 95, 75, 100, 80].map((h, i) => (
                <span key={i} style={{ '--h': `${h}%`, '--i': i }} />
              ))}
            </div>
            <div className="mk-table">{[0, 1, 2].map((i) => <div key={i}><i /><span className="mk-line w60" /><em /></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
