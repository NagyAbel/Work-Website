import './contact.css'
import { useState } from "react";

function Contact() {
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

    console.log(formData); // later you’ll send this to backend
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
        <form className="contact-form" onSubmit={handleSubmit}>
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

        <button className="send-button" type="submit">Send</button>
        {submitted && <p className="success">Message sent successfully!</p>}

      </form>

        
    </div>

  )
}

export default Contact
