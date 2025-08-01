import { useState } from 'react';
import carousel1 from '../assets/building2.jpg';
import carousel2 from '../assets/college_teachers.png';
import carousel3 from '../assets/college_tour.jpg';

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
    <main className="container my-5">
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
              className={idx === 0 ? 'active' : ''}
              aria-current={idx === 0 ? 'true' : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner rounded shadow-sm">
          {carouselImages.map((img, idx) => (
            <div
              className={`carousel-item ${idx === 0 ? 'active' : ''}`}
              key={idx}
            >
              <img
                src={img.src}
                className="d-block w-100 carousel-img"
                alt={img.title}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
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
    </main>
  );
};

export default HomeScreen;
