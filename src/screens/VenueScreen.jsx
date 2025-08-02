import React from "react";

const VenueScreen = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center text-white fw-bold mb-5">Venue Details</h2>

      {/* Venue Overview */}
      <div className="bg-glass p-4 mb-5 text-white rounded shadow-sm">
        <h4 className="fw-semibold mb-3">Institute of Engineering & Technology, Agra</h4>
        <p className="mb-2">
          The International Conference on Future of Computer Science with AI (FCSAI-2025) will be hosted at the <strong>Institute of Engineering & Technology (IET), Agra</strong>, a prestigious institution under Dr. A.P.J. Abdul Kalam Technical University (AKTU).
        </p>
        <p className="mb-2">
          The institute is located at Khandari Campus, a serene academic environment situated in the heart of Agra, known for its historic legacy and accessibility.
        </p>
        <p>
          The campus features state-of-the-art conference facilities, smart classrooms, seminar halls, and green surroundings, making it a prime location for academic engagement and networking.
        </p>
      </div>

      {/* Address and Access */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="bg-glass p-4 text-white rounded shadow-sm h-100">
            <h5 className="fw-semibold mb-3">Venue Address</h5>
            <p className="mb-2">Institute of Engineering & Technology</p>
            <p className="mb-2">Khandari Campus, Agra – 282002</p>
            <p>Uttar Pradesh, India</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-glass p-4 text-white rounded shadow-sm h-100">
            <h5 className="fw-semibold mb-3">Nearby Landmarks</h5>
            <ul className="mb-0">
              <li>Agra Fort – 4.5 km</li>
              <li>Agra Cantt Railway Station – 8.2 km</li>
              <li>Taj Mahal – 6.5 km</li>
              <li>Sanjay Place (Commercial Hub) – 2.1 km</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map Embed */}
      <div className="bg-glass p-4 text-white rounded shadow-sm">
        <h5 className="fw-semibold mb-3">Map Location</h5>
        <div className="ratio ratio-16x9">
          <iframe
            title="IET Agra Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.947500222418!2d78.01000565!3d27.19288285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974765e9fbd6b81%3A0x603a9915c999f19f!2sInstitute%20of%20Engineering%20and%20Technology%2C%20Agra!5e0!3m2!1sen!2sin!4v1693568416790"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VenueScreen;
