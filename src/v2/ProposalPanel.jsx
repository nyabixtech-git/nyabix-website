import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { company } from '../data/content';
import Icon from '../components/Icon';
import './ProposalPanel.css';

const services = ['AI / ML', 'Web App', 'Mobile App', 'UI/UX', 'DevOps', 'Other'];

/** Slide-in "Request a Free Proposal" form, opened from the header */
export default function ProposalPanel({ open, onClose }) {
  const [picked, setPicked] = useState(['Web App']);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const toggle = (s) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      phone: formData.get('phone') || 'Not provided',
      services: picked.join(', ') || 'Not specified',
      message: formData.get('message') || 'No project details provided',
      to_email: 'nyabix.tech@gmail.com',
    };

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log({ serviceID, templateID, publicKey, templateParams });

    try {
      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully');

      setSent(true);
      form.reset();
      setPicked(['Web App']);
    } catch (err) {
      console.error('Email sending failed:', err);
      setError('Unable to send your request. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <label className="field"><input name="from_name" required placeholder=" " /><span>Full name</span></label>
              <label className="field"><input name="from_email" required type="email" placeholder=" " /><span>Email</span></label>
              <label className="field"><input name="phone" type="tel" placeholder=" " /><span>Phone</span></label>
              <div className="pp__chips">
                <p>What do you need?</p>
                <div>
                  {services.map((s) => (
                    <button type="button" key={s} className={picked.includes(s) ? 'is-on' : ''} onClick={() => toggle(s)}>{s}</button>
                  ))}
                </div>
              </div>
              <label className="field"><textarea name="message" rows={3} placeholder=" " /><span>Project details</span></label>
              <label className="pp__consent"><input type="checkbox" required /> I agree to be contacted about my request.</label>
              {error && <p role="alert" className="pp__error">{error}</p>}
              <button className="btn btn--primary" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'} {!loading && <Icon name="arrow" size={18} />}
              </button>
            </form>
            <p className="pp__alt">Prefer to talk? <a href={company.phoneHref}>{company.phone}</a></p>
          </>
        )}
      </aside>
    </div>
  );
}