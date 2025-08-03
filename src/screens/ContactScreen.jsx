const ContactScreen = () => {
  return (
    <main className='container' >

    <div className="container py-5">
      <h2 className="mb-4">Contact Us</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control bg-glass-input"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control bg-glass-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control bg-glass-input"
            rows="4"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-gradient w-100">

          Send Message
        </button>
      </form>
    </div>
</main>
  );
};

export default ContactScreen;
