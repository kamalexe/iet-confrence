const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white">
      <hr />
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold">Institute of Engineering & Technology, Agra</h6>
              {/* <hr className="mb-4 mt-0 d-inline-block mx-auto bg-info" style={{ width: "60px", height: "2px" }} /> */}
              <h6 className="fw-bold">Dr. Bhimrao Ambedkar University, Agra</h6>
            </div>

            <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful Links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto bg-info" style={{ width: "120px", height: "2px" }} />

              <div className="row">
                <div className="col-12 col-lg-6 d-flex flex-column">
                  <p><a className="text-white text-decoration-none" href="/pdfs/paper-template.docx" download>Download Paper Template</a></p>
                  <p><a className="text-white text-decoration-none" href="/pdfs/guide.docx" download>Download Submission Guidelines</a></p>
                  <p><a className="text-white text-decoration-none" href="/pdfs/ICFCSAI-2025 Brochure.pdf" target="_blank">ICFCSAI-2025 Brochure</a></p>
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column">
                  <p><a className="text-white text-decoration-none" href="https://docs.google.com/forms/d/e/1FAIpQLSdN1c9-gQVoHoc-Gw5fKduR5C32QUfbUOtNm56oB4tkQk_8EA/viewform" target="_blank">Registration Form</a></p>
                  <p><a className="text-white text-decoration-none" href="https://dbrau.ac.in/" target="_blank">Dr. Bhimrao Ambedkar University, Agra</a></p>
                  <p><a className="text-white text-decoration-none" href="/contact">Help</a></p>

                </div>
              </div>
            </div>



            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto bg-info" style={{ width: "60px", height: "2px" }} />
              <p>
                <a
                  href="https://maps.app.goo.gl/3Q4BWgvDzVAnts7J9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >Swami Vivekanand Campus Khandari, Agra, India - 282002</a>
              </p>

              <p>
                <a href="mailto:icfcsai2025@gmail.com" className="text-white text-decoration-none">
                  icfcsai2025@gmail.com
                </a>
              </p>
              <p>

                <a href="tel:+9173551 50794" className="text-white text-decoration-none">
                  +9173551 50794 (Dr. Ganesh Chandra)
                </a>
              </p>

              <p>
                <a href="tel:+919457250534" className="text-white text-decoration-none">
                  +91 94572 50534 (Dr. Pragya Kabra)
                </a>
              </p>

            </div>

          </div>
        </div>
      </section>
      <div className="text-center p-3">
        © 2025 Copyright ICFCSAI
      </div>
    </footer>
  );
};

export default Footer;
