const ContactScreen = () => {
    return (
      <div className="container py-5">
        <h2 className="mb-4">Contact Us</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default ContactScreen;
  