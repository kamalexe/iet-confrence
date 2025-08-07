const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white">
      <hr />
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Institute of Engineering & Technology, Agra</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto bg-info" style={{ width: "60px", height: "2px" }} />
              <p>Dr. B. R. Ambedkar University, Agra </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful Links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto bg-info" style={{ width: "60px", height: "2px" }} />
              <p><a className="text-white" href="/pdfs/paper-template.docx" download>Download Paper Template</a></p>
              <p><a className="text-white" href="/pdfs/guide.docx" download>Download Submission Guidelines</a></p>
              <p><a className="text-white" href="/pdfs/FCSAI-2025 Brochure.pdf" download>FCSAI-2025 Brochure</a></p>
              <p><a className="text-white" href="/pdfs/Call-for-Papers.pdf" download>Call for Papers</a></p>
              <p><a className="text-white" href="/contact">Help</a></p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto bg-info" style={{ width: "60px", height: "2px" }} />
              <p>
                <i className="fas fa-home me-3"></i>
                <a
                  href="https://maps.app.goo.gl/3Q4BWgvDzVAnts7J9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  IET Khandari, Agra, India
                </a>
              </p>

              <p>
                <i className="fas fa-envelope me-3"></i>
                <a href="mailto:icfcsai2025@gmail.com" className="text-white text-decoration-none">
                  icfcsai2025@gmail.com
                </a>
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>
                <a href="tel:+919453483137" className="text-white text-decoration-none">
                  +91 94534 83137
                </a>
              </p>
              <p>
                <i className="fas fa-print me-3"></i>
                <a href="tel:+919457250534" className="text-white text-decoration-none">
                  +91 94572 50534
                </a>
              </p>

            </div>

          </div>
        </div>
      </section>

      <div className="text-center p-3">
        © 2025 Copyright:
        <a className="text-white" href="https://www.linkedin.com/in/kamal-maurya/"> Kamal Maurya</a>
      </div>
    </footer>
  );
};

export default Footer;
