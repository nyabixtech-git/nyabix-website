import { useState } from 'react';
import { company } from '../data/content';
import Reveal from './Reveal';
import Icon from './Icon';
import './Contact.css';

const budgets = ['< $10k', '$10k – $50k', '$50k – $100k', '$100k+'];

export default function Contact() {
  const [budget, setBudget] = useState(budgets[1]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Collect all form inputs natively
    const formData = new FormData(e.target);

    // Append your Web3Forms access key and selected budget state manually
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
    formData.append("budget", budget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        e.target.reset(); // Reset form fields
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section section--soft contact" id="contact">
      <div className="container contact__layout">
        <Reveal className="contact__info" variant="left">
          <span className="eyebrow">Contact</span>
          <h2>Let's build something <span className="grad-text">great</span> together</h2>
          <p>Tell us about your project and we'll get back to you within one business day.</p>
          <ul>
            <li><span><Icon name="phone" size={18} /></span><a href={company.phoneHref}>{company.phone}</a></li>
            <li><span><Icon name="mail" size={18} /></span><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><span><Icon name="pin" size={18} /></span>{company.address}</li>
          </ul>
        </Reveal>

        <Reveal className="contact__card" variant="right">
          {sent ? (
            <div className="contact__done">
              <span><Icon name="check" size={34} stroke={3} /></span>
              <h3>Thanks, we got your message!</h3>
              <p>Someone from the NYABIX team will reply shortly.</p>
              <button className="btn btn--outline" onClick={() => setSent(false)}>Send another</button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              {error && <p className="contact__error" style={{ color: '#ef4444', marginBottom: '1rem' }}>{error}</p>}

              <div className="field-row">
                <label className="field"><input required placeholder=" " name="name" /><span>Full name</span></label>
                <label className="field"><input required type="email" placeholder=" " name="email" /><span>Work email</span></label>
              </div>
              <div className="field-row">
                <label className="field"><input placeholder=" " name="company" /><span>Company</span></label>
                <label className="field"><input placeholder=" " name="phone" type="tel" /><span>Phone</span></label>
              </div>
              <div className="budget">
                <p>Project budget</p>
                <div>
                  {budgets.map((b) => (
                    <button type="button" key={b} className={b === budget ? 'is-active' : ''} onClick={() => setBudget(b)}>{b}</button>
                  ))}
                </div>
              </div>
              <label className="field"><textarea required placeholder=" " rows={4} name="message" /><span>Tell us about your project</span></label>

              <button className="btn btn--primary contact__submit" type="submit" disabled={loading}>
                {loading ? 'Sending...' : <>Send Message <Icon name="arrow" size={18} /></>}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}