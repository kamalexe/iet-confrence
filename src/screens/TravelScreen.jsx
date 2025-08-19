import React from "react";
import carousel1 from "../assets/travel/taj-mahal.jpg";
import carousel2 from "../assets/travel/agra-fort.jpg";
import carousel3 from "../assets/travel/agra-fort1.jpg";
import { Helmet } from "react-helmet-async";

const TravelScreen = () => {
  return (
    <main className="container py-5">
      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>Travel & Accommodation | ICFCSAI-2025, Agra</title>
        <meta
          name="description"
          content="Plan your travel to ICFCSAI-2025 in Agra. Find details on how to reach IET Agra, accommodation options, local transport, and nearby attractions including the Taj Mahal and Agra Fort."
        />
        <meta
          name="keywords"
          content="ICFCSAI-2025, Travel, Accommodation, Hotels in Agra, IET Agra, Taj Mahal, Agra Fort, Conference Venue"
        />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="Travel & Accommodation | ICFCSAI-2025" />
        <meta
          property="og:description"
          content="Get details on how to reach IET Agra, book accommodation, and explore Agra’s attractions during ICFCSAI-2025."
        />
        <meta property="og:image" content="https://iet-confrence.vercel.app/banner.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iet-confrence.vercel.app/travel" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel & Accommodation | ICFCSAI-2025, Agra" />
        <meta
          name="twitter:description"
          content="Plan your visit to ICFCSAI-2025. Travel info, hotels, transport, and attractions in Agra."
        />
        <meta name="twitter:image" content="https://iet-confrence.vercel.app/banner.jpg" />
      </Helmet>

      {/* ✅ UI CONTENT */}
      <div>

        <div id="carouselExampleIndicators" className="carousel slide mb-4">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img src={carousel1} className="d-block w-100 rounded" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="d-block w-100 rounded" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="d-block w-100 rounded" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h2 className="mb-5">Travel & Accommodation</h2>

      {/* How to Reach */}
      <div className="row mb-5 align-items-stretch">
        <div className="col-md-6 mb-4 mb-md-0 d-flex">
          <div className="bg-glass p-4 h-100 w-100">
            <h4 className="fw-semibold mb-3">How to Reach IET Agra</h4>
            <p className="mb-2"><strong>By Train:</strong> Agra Cantt (AGC) is the nearest railway station, approx. 8 km from campus.</p>
            <p className="mb-2"><strong>By Road:</strong> Connected via NH-19 from Delhi and other major cities. Reliable bus and taxi services are available.</p>
            <p><strong>By Air:</strong> The nearest airport is Pandit Deen Dayal Upadhyay Airport (AGR). Delhi’s IGI Airport (DEL) is another accessible option.</p>
          </div>
        </div>

        <div className="col-md-6 d-flex">
          <div className="bg-glass p-4 h-100 w-100">
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
      <div className="bg-glass p-4 mb-5">
        <h4 className="fw-semibold mb-3">Local Transportation</h4>
        <p><strong>From Railway Station/Airport:</strong> Ola, Uber, and prepaid auto-rickshaws are available. Approx. ₹150–300 fare range.</p>
        <p><strong>During Conference:</strong> Dedicated campus shuttle service will run between key hotels and IET Agra.</p>
        <p><strong>Nearby Attractions:</strong> Taj Mahal, Agra Fort, Mehtab Bagh, and Fatehpur Sikri are all easily accessible for attendees wishing to explore.</p>
      </div>

      {/* Google Map Embed */}
      <div className="bg-glass p-4">
        <h4 className="fw-semibold mb-3">Campus Location</h4>
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

export default TravelScreen;
