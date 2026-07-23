import './contact.css';
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

function Contact() {
  const form = useRef();
  const recaptchaRef = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot!");
      return;
    }

    setIsSubmitting(true);

    // Pass the recaptcha token via EmailJS parameters
    const templateParams = {
      ...formData,
      'g-recaptcha-response': captchaValue, // SECURE: Sends token to EmailJS for server verification
      time: new Date().toLocaleString()
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,  
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY       
    )
    .then(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset reCAPTCHA after successful submission
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaValue(null);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again later.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className='contact'>
      <h1>{t("contact_title")}</h1>
      <form className="contact-form" onSubmit={handleSubmit} ref={form}>
        <input
          className="input"
          type="text"
          name="name"
          placeholder={t("contact_name")}
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="input"
          type="email"
          name="email"
          placeholder={t("contact_email")}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          className="input message"
          name="message"
          placeholder={t("contact_message")}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
          onChange={(value) => setCaptchaValue(value)}
          onExpired={() => setCaptchaValue(null)}
        />

        <button 
          className="send-button" 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : t("contact_send")}
        </button>

        {submitted && <p className="success">Message sent successfully!</p>}
      </form>
    </div>
  );
}

export default Contact;