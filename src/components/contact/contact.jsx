import './contact.css'
import { useState } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

import { useRef } from 'react';
function Contact() {

  const form = useRef();
  const recaptchaRef = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      time: new Date().toLocaleString() // local date/time
    };

    if (!captchaValue) {
      alert("Please verify that you are not a robot!");
      return;
    }
    emailjs.sendForm(
      'service_v1drdpm',  
      'template_tqabteg', 
      form.current,
      'Sp0VybSVEqrjhs81w'       
    )

    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return (
    <div className='contact'>
        <h1>Contact</h1>
        <form className="contact-form" onSubmit={handleSubmit} ref={form} >
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="input"
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          className="input message"
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <ReCAPTCHA
          sitekey="6LdtgX0sAAAAAN4Fxi_C1M7wZHDY2TU93emzakKN"
          ref={recaptchaRef}
          onChange={(value) => setCaptchaValue(value)}
        />
        <button className="send-button" type="submit">Send</button>
        {submitted && <p className="success">Message sent successfully!</p>}

      </form>

        
    </div>

  )
}

export default Contact
