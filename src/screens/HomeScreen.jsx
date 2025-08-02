import React, { useState } from "react";
import carousel1 from "../assets/building2.jpg";
import carousel2 from "../assets/college_teachers.png";
import carousel3 from "../assets/college_tour.jpg";

const HomeScreen = () => {
  const [count, setCount] = useState(0);

  const carouselImages = [
    {
      src: carousel1,
      title: "Welcome to IET Conference",
      desc: "Join the leading minds in technology and innovation.",
    },
    {
      src: carousel2,
      title: "Workshops & Talks",
      desc: "Hands-on sessions from industry experts.",
    },
    {
      src: carousel3,
      title: "Campus Experience",
      desc: "Experience IET Agra’s vibrant student culture.",
    },
  ];

  return (
    <main className="mt-5 mb-5">
      {/* Carousel */}
      <div>
        <div
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
            The <strong>International Conference on Future of Computer Science with AI (FCSAI-2025)</strong> brings together leading researchers, academics, and professionals to explore cutting-edge advancements in AI and their transformative impact on computer science, society, and global industries.
          </p>
          <p className="mb-4">
            The conference will feature keynote addresses, paper presentations, workshops, and panel discussions across diverse tracks such as AI in education, healthcare, cybersecurity, data science, and more.
          </p>

          <h4 className="fw-semibold">Organized by</h4>
          <p className="mb-0">
            <strong>Institute of Engineering & Technology, Agra</strong> – a constituent college of Dr. A.P.J. Abdul Kalam Technical University (AKTU), known for its excellence in engineering education, innovation, and research-driven academic environment.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomeScreen;
