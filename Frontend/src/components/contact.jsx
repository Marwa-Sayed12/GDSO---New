// ContactUs.jsx
import React, { useContext } from 'react';
import { useForm, ValidationError } from "@formspree/react";
import { LanguageContext } from '../context/LanguageContext';
import "../styles/contact.css";
import "../media-query/contact1.css";

function ContactUs() {
  const [state, handleSubmit] = useForm("manbazqj");
  const { translations } = useContext(LanguageContext);

  if (state.succeeded) {
    return (
      <div className="contact-success">
        <h2>{translations.contact.success.title}</h2>
        <p>{translations.contact.success.message}</p>
      </div>
    );
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>{translations.contact.title}</h2>
          <p>{translations.contact.description}</p>
          <p>
            📍 {translations.contact.address} <br />
            📧 gurbat.ngo@gmail.com <br />
            📞 +93792970351
          </p>

          <iframe
            title={translations.contact.mapTitle}
            src="https://maps.google.com/maps?q=Kabul&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">{translations.contact.form.name}</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder={translations.contact.form.namePlaceholder}
            required
          />

          <label htmlFor="email">{translations.contact.form.email}</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={translations.contact.form.emailPlaceholder}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">{translations.contact.form.message}</label>
          <textarea
            id="message"
            name="message"
            placeholder={translations.contact.form.messagePlaceholder}
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? translations.contact.form.sending : translations.contact.form.send}
          </button>
        </form>
      </div>
      
    </section>
  );
}

export default ContactUs;