import { useEffect, useState } from 'react';
import { company } from '../data/content';
import Icon from '../components/Icon';
import './ProposalPanel.css';

const services = ['AI / ML', 'Web App', 'Mobile App', 'UI/UX', 'DevOps', 'Other'];

/** Slide-in "Request a Free Proposal" form, opened from the header */
export default function ProposalPanel({ open, onClose }) {
  const [picked, setPicked] = useState(['Web App']);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const toggle = (s) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <div className={`pp ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="pp__backdrop" onClick={onClose} />
      <aside className="pp__panel" role="dialog" aria-modal="true" aria-label="Request a free proposal">
        <button className="pp__close" onClick={onClose} aria-label="Close"><Icon name="close" size={20} /></button>
        {sent ? (
          <div className="pp__done">
            <span><Icon name="check" size={32} stroke={3} /></span>
            <h3>Request received!</h3>
            <p>We'll send your free proposal within one business day.</p>
            <button className="btn btn--primary" onClick={() => { setSent(false); onClose(); }}>Close</button>
          </div>
        ) : (
          <>
            <span className="eyebrow">Free proposal</span>
            <h3>Request a FREE Proposal</h3>
            <p className="pp__sub">Tell us a little about your project. We'll reply with an estimate, timeline and team plan.</p>
            {/* TODO: connect onSubmit to your backend / Formspree / EmailJS */}
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label className="field"><input required placeholder=" " /><span>Full name</span></label>
              <label className="field"><input required type="email" placeholder=" " /><span>Email</span></label>
              <label className="field"><input type="tel" placeholder=" " /><span>Phone</span></label>
              <div className="pp__chips">
                <p>What do you need?</p>
                <div>
                  {services.map((s) => (
                    <button type="button" key={s} className={picked.includes(s) ? 'is-on' : ''} onClick={() => toggle(s)}>{s}</button>
                  ))}
                </div>
              </div>
              <label className="field"><textarea rows={3} placeholder=" " /><span>Project details</span></label>
              <label className="pp__consent"><input type="checkbox" required /> I agree to be contacted about my request.</label>
              <button className="btn btn--primary" type="submit">Submit <Icon name="arrow" size={18} /></button>
            </form>
            <p className="pp__alt">Prefer to talk? <a href={company.phoneHref}>{company.phone}</a></p>
          </>
        )}
      </aside>
    </div>
  );
}
