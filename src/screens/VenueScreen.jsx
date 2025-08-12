import React from "react";

const VenueScreen = () => {
  return (
    <main className="container py-5">
      <h2 className="mb-5">Venue Details</h2>

      {/* Venue Overview */}
      <div className="bg-glass p-4 mb-5">
        <h4 className="fw-semibold mb-3">Institute of Engineering & Technology, Agra</h4>
        <p className="mb-2">
          The International Conference on Future of Computer Science with AI (ICFCSAI-2025) will be hosted at the <strong>Institute of Engineering & Technology (IET), Agra</strong>, a prestigious institution under Dr Bhimrao Ambedkar University, Agra (DBRAU).
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
          <div className="bg-glass p-4 h-100">
            <h5 className="fw-semibold mb-3">Venue Address</h5>
            <p className="mb-2">Institute of Engineering & Technology</p>
            <p className="mb-2">Khandari Campus, Agra – 282002</p>
            <p>Uttar Pradesh, India</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-glass p-4 h-100">
            <h5 className="fw-semibold mb-3">Nearby Landmarks</h5>
            <ul className="mb-0">
              <li>Agra Fort – 6.3 km</li>
              <li>Agra Cantt Railway Station – 7.4 km</li>
              <li>Taj Mahal – 7.4 km</li>
              <li>Sanjay Place (Commercial Hub) – 2.4 km</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map Embed */}
      <div className="bg-glass p-4">
        <h5 className="fw-semibold mb-3">Map Location</h5>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.3054108721285!2d77.98947207503542!3d27.20955947647149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747766625cce3f%3A0x9eb5b271353779a9!2sInstitute%20of%20Engineering%20%26%20Technology%2C%20Khandari%2C%20Agra!5e0!3m2!1sen!2sin!4v1754554386303!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IET Agra Location"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default VenueScreen;
