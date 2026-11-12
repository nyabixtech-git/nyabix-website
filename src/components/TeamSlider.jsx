import { useCallback, useEffect, useRef, useState } from 'react';
import './TeamSlider.css';

export const team = [
  {
    name: 'Faizan Saleem',
    role: 'SAP Process Automation Specialist',
    expertise: 'SAP process automation and approval-workflow design.',
    initials: 'FS',
    image: '/faizan-saleem.jpg', // optional, remove if you have no photo
  },
  {
    name: 'Hammad Shareef',
    role: 'Integration Lead',
    expertise: 'System integration across SAP and non-SAP ERPs, APIs and EDI.',
    initials: 'HS',
  },
  {
    name: 'Fahad Sultan',
    role: 'Team Lead',
    expertise: 'Engineering leadership and team coordination.',
    initials: 'FS',
  },
  {
    name: 'Dr. Amir Manzoor, PhD',
    role: 'AI Researcher',
    expertise: 'Applied AI research: model evaluation and responsible-AI design.',
    initials: 'AM',
  },
  {
    name: 'Najeeb Ahmed',
    role: 'Financial Products Specialist',
    expertise: 'Financial products and accounts-payable control requirements.',
    initials: 'NA',
  },
  {
    name: 'Adnan Zubair',
    role: 'AI Automation Expert',
    expertise: 'Strategic leadership in enterprise technology and customer experience.',
    initials: 'AZ',
  },
  {
    name: 'Rashad Ahmed',
    role: 'Delivery Manager',
    expertise: 'Delivery management: planning, onboarding and release.',
    initials: 'RA',
  },
  {
    name: 'Sumair Khan',
    role: 'Board Advisor',
    expertise: 'Board advisory and marketing.',
    initials: 'SK',
  },
  {
    name: 'Inam Abdullah',
    role: 'Risk and Governance Advisor',
    expertise: 'Risk analysis and governance.',
    initials: 'IA',
  },
];

const Chevron = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
       style={{ transform: dir === 'left' ? 'rotate(180deg)' : 'none' }}>
    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function TeamSlider({ people = team }) {
  const trackRef = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const move = (dir) => {
    const el = trackRef.current;
    const card = el.querySelector('.team__card');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  return (
    <section className="team" aria-label="Our team">
      <div className="team__head">
        <h2 className="team__title">Meet the team</h2>
        <div className="team__controls">
          <button type="button" className="team__btn" onClick={() => move(-1)}
                  disabled={edge.start} aria-label="Previous">
            <Chevron dir="left" />
          </button>
          <button type="button" className="team__btn" onClick={() => move(1)}
                  disabled={edge.end} aria-label="Next">
            <Chevron dir="right" />
          </button>
        </div>
      </div>

      <ul className="team__track" ref={trackRef} onScroll={update} tabIndex={0}>
        {people.map((p) => (
          <li className="team__card" key={p.name}>
            <div className="team__avatar">
              <span>{p.initials}</span>
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              )}
            </div>
            <h3 className="team__name">{p.name}</h3>
            <p className="team__role">{p.role}</p>
            <p className="team__bio">{p.expertise}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
