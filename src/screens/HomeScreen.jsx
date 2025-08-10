import React, { useState, useEffect } from "react";
import carousel1 from "../assets/c1.jpg";
import { calculateTimeLeft } from "../utils/calculateTimeLeft";
import { CONFERENCE_START_DATE, REGISTRATION_START_DATE } from "../constants/dates";

const HomeScreen = () => {
  const targetDateString = CONFERENCE_START_DATE;
  const registrationStartDate = REGISTRATION_START_DATE;

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDateString));
  const [registrationStarted, setRegistrationStarted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      setTimeLeft(calculateTimeLeft(targetDateString));
      const now = new Date();
      setRegistrationStarted(now >= new Date(registrationStartDate));
      setLoading(false); // 👈 only set after first check
    };

    // Run immediately on mount
    checkStatus();

    // Run every second
    const timer = setInterval(checkStatus, 1000);

    return () => clearInterval(timer);
  }, [targetDateString, registrationStartDate]);

  return (
    <main>
      {/* Carousel */}
      <div className="mb-5" style={{ marginTop: "-10rem", position: "relative" }}>
        <div className="rounded shadow-sm position-relative">
          <img
            src={carousel1}
            className="d-block w-100 carousel-img"
            alt="ICFCSAI 2025" style={{
              mixBlendMode: "overlay"
            }}
          />

          <div
            className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start position-absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
            }}
          >
            <p
              className="mb-0 text-light border border-primary rounded-pill px-3 py-1 d-inline-block"
              style={{
                fontSize: "1.25rem",
                fontWeight: 400,
                letterSpacing: "0.2px",
              }}
            >
              25<sup>th</sup> – 27<sup>th</sup> September 2025
            </p>

            <h1
              className="fw-bold text-shadow text-light mb-3"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                letterSpacing: "0.5px",
                lineHeight: "1.4",
              }}
            >
              International Conference on <br className="d-none d-lg-block" />
              Future of <span>Computer Science with AI:</span>
              <br className="d-none d-lg-block" />
              <span>Theory, Practice, and Impact</span>
            </h1>

            <h2
              className="fw-semibold text-shadow mb-4"
              style={{
                fontSize: "1.75rem",
                marginBottom: "0.5rem",
              }}
            >
              (ICFCSAI-2025)
            </h2>

            {loading ? (
              <p className="text-light mt-2">Loading...</p>
            ) : registrationStarted ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient text-shadow text-decoration-none"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdN1c9-gQVoHoc-Gw5fKduR5C32QUfbUOtNm56oB4tkQk_8EA/viewform"
              >
                Register Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 1 1-.708-.708L12.293 8H2.5a.5.5 0 0 1 0-1h9.793l-2.147-2.146a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            ) : (
              <p
                className="text-shadow text-warning mt-2"
                style={{
                  fontSize: "1rem",
                  letterSpacing: "0.2px",
                }}
              >
                Registration starts from 15<sup>th</sup> September 2025
              </p>
            )}
          </div>
        </div>
      </div>



      {/* About Section */}
      <section className="container">
        <div className="bg-glass p-5">
          <h2 className="mb-3">About the Conference</h2>
          <p className="mb-3">
            The <strong>International Conference on Future of Computer Science with AI: Theory, Practice, and Impact (ICFCSAI-2025)</strong> is a premier event that brings together leading minds from academia, industry, and research to explore the evolving landscape of Computer Science and Artificial Intelligence.
          </p>
          <p className="mb-3">
            Hosted by the <strong>Department of Computer Science & Engineering, Institute of Engineering & Technology, Dr. Bhimrao Ambedkar University, Agra</strong>, from <strong>25th to 27th September 2025</strong>, the conference aims to foster innovation, collaboration, and knowledge-sharing across disciplines.
          </p>
          <p className="mb-3">
            ICFCSAI-2025 will feature keynote speeches, technical paper presentations, and interactive sessions focused on emerging technologies, practical implementations, and the broader impact of AI on society.
          </p>
          <p className="mb-4">
            The event provides a vibrant platform for researchers, scientists, academicians, industrialists, and students to present their work, gain insights, and build lasting collaborations that can shape the future of technology. By highlighting both theoretical advancements and real-world applications, the conference is committed to driving impactful research and inspiring the next generation of innovators in Computer Science and AI.
          </p>
        </div>
      </section>

    </main>
  );
};

export default HomeScreen;
