import React from "react";

const TravelScreen = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-white">Travel & Accommodation</h2>

      {/* How to Reach */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="bg-glass p-4 text-white rounded shadow-sm h-100">
            <h4 className="fw-semibold mb-3">How to Reach IET Agra</h4>
            <p className="mb-2"><strong>By Train:</strong> Agra Cantt (AGC) is the nearest railway station, approx. 8 km from campus.</p>
            <p className="mb-2"><strong>By Road:</strong> Connected via NH-19 from Delhi and other major cities. Reliable bus and taxi services are available.</p>
            <p><strong>By Air:</strong> The nearest airport is Pandit Deen Dayal Upadhyay Airport (AGR). Delhi’s IGI Airport (DEL) is another accessible option.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-glass p-4 text-white rounded shadow-sm h-100">
            <h4 className="fw-semibold mb-3">Accommodation Options</h4>
            <p className="mb-2">Participants are encouraged to book in advance due to the tourist season.</p>
            <ul className="mb-2">
              <li><strong>Budget:</strong> Hotel Ganga Ratan, Hotel Sidhartha</li>
              <li><strong>Mid-range:</strong> Clarks Shiraz, Crystal Sarovar Premiere</li>
              <li><strong>Luxury:</strong> ITC Mughal, Jaypee Palace</li>
            </ul>
            <p className="fst-italic">Several options are within 5–15 km of the conference venue.</p>
          </div>
        </div>
      </div>

      {/* Local Transport */}
      <div className="bg-glass p-4 text-white rounded shadow-sm mb-5">
        <h4 className="fw-semibold mb-3">Local Transportation</h4>
        <p><strong>From Railway Station/Airport:</strong> Ola, Uber, and prepaid auto-rickshaws are available. Approx. ₹150–300 fare range.</p>
        <p><strong>During Conference:</strong> Dedicated campus shuttle service will run between key hotels and IET Agra.</p>
        <p><strong>Nearby Attractions:</strong> Taj Mahal, Agra Fort, Mehtab Bagh, and Fatehpur Sikri are all easily accessible for attendees wishing to explore.</p>
      </div>

      {/* Google Map Embed */}
      <div className="bg-glass p-4 text-white rounded shadow-sm">
        <h4 className="fw-semibold mb-3">Campus Location</h4>
        <div className="ratio ratio-16x9">
          <iframe
            title="IET Agra Location"
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

export default TravelScreen;
