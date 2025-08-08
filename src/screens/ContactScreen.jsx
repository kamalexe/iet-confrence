import React, { useState } from 'react';


const ContactScreen = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`);

    const mailtoLink = `mailto:icfcsai2025@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="container py-5">
      <h2 className="mb-4">Contact us with mail</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control bg-glass-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-control bg-glass-input"
            placeholder="Subject of your message"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control bg-glass-input"
            rows="4"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-gradient w-100">
          Send Message
        </button>
      </form>
    </main>
  );
};

export default ContactScreen;
