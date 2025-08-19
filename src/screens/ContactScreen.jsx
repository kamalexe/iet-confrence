import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

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
      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>Contact Us | ICFCSAI 2025</title>
        <meta
          name="description"
          content="Get in touch with the organizing team of the International Conference on Future of Computer Science with AI (ICFCSAI 2025). Reach us via email for queries and collaborations."
        />
        <meta name="keywords" content="ICFCSAI 2025, Contact, Conference, Computer Science, AI, IET Agra" />
        <meta name="author" content="ICFCSAI 2025 Team" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | ICFCSAI 2025" />
        <meta
          property="og:description"
          content="Reach out to the ICFCSAI 2025 team for queries, support, or collaborations."
        />
        <meta property="og:image" content="https://iet-confrence.vercel.app/banner.jpg" />
        <meta property="og:url" content="https://iet-confrence.vercel.app/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | ICFCSAI 2025" />
        <meta
          name="twitter:description"
          content="Connect with the ICFCSAI 2025 organizing team for queries, workshops, and conference details."
        />
        <meta name="twitter:image" content="https://iet-confrence.vercel.app/banner.jpg" />
      </Helmet>

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
        <button type="submit" className="btn-gradient w-100 text-decoration-none">
          Send Message
        </button>
      </form>
    </main>
  );
};

export default ContactScreen;
