import { useState } from 'react';

function ContactForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formElement = e.target;
    const formDataToSend = new FormData(formElement);

    fetch(formElement.action, {
      method: 'POST',
      body: formDataToSend,
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          setFormData({ name: '', email: '', message: '' });
          closeForm();
        } else {
          alert("Yikes! Something went wrong.");
        }
      })
      .catch(() => {
        alert("Network error! Please try again later.");
      });
  };

  return (
    <>
      <div className="message-icon" onClick={openForm}>📩</div>

      <div 
        className="form-container" 
        style={{ display: isFormOpen ? 'flex' : 'none' }}
      >
        <div className="form-box">
          <span className="close-btn" onClick={closeForm}>✖</span>
          <h2>Contact Form</h2>

          <form
            action="https://formspree.io/f/xeoaqora"
            method="POST"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />

            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />

            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;