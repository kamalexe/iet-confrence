import React, { useState } from "react";
import carousel1 from "../assets/c1.jpg";
import carousel2 from "../assets/college_teachers.png";
import carousel3 from "../assets/college_tour.jpg";


const HomeScreen = () => {

  const carouselImages = [
    {
      src: carousel1,
      title: "Welcome to IET Conference",
      desc: "Join the leading minds in technology and innovation.",
    },
  ];

  return (
    <main >      {/* Carousel */}


      <div style={{ marginTop: "-10rem" }}>        <div
        id="eventCarousel"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#eventCarousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? "active" : ""}
              aria-current={idx === 0 ? "true" : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner rounded shadow-sm">
          {carouselImages.map((img, idx) => (
            <div
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
              key={idx}
            >
              <img
                src={img.src}
                className="d-block w-100 carousel-img"
                alt={img.title}
              />
              <div className="carousel-caption d-none d-md-block bg-glass bg-opacity-50 rounded">
                <h5>{img.title}</h5>
                <p>{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#eventCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#eventCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
      </div>
      {/* About Section */}
      <section className="container">
        <div className="bg-glass text-white p-5 rounded shadow-sm">
          <h2 className="fw-bold mb-3">About the Conference</h2>
          <p className="mb-3">
            The <strong>International Conference on Future of Computer Science with AI: Theory, Practice, and Impact (FCSAI-2025)</strong> is a premier event that brings together leading minds from academia, industry, and research to explore the evolving landscape of Computer Science and Artificial Intelligence.
          </p>
          <p className="mb-3">
            Hosted by the <strong>Institute of Engineering and Technology, Dr. Bhim Rao Ambedkar University, Agra</strong>, from <strong>25th to 27th September 2025</strong>, the conference aims to foster innovation, collaboration, and knowledge-sharing across disciplines.
          </p>
          <p className="mb-3">
            FCSAI-2025 will feature keynote speeches, technical paper presentations, and interactive sessions focused on emerging technologies, practical implementations, and the broader impact of AI on society.
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
