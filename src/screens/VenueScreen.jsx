const VenueScreen = () => {
  return (

    <main className='mt-5 mb-5' >

    <div className="container py-5">
      <h2 className="mb-4">Venue Details</h2>

      <div className="row">
        <div className="col-md-6 mb-4 container bg-glass p-4">
          <h5>Location</h5>
          <p>
            Institute of Engineering & Technology, Khandari Campus, Agra, Uttar Pradesh – 282002
          </p>

          <h5>Date & Time</h5>
          <p>
            <strong>September 25–27, 2025</strong><br />
            Daily sessions start at 10:00 AM
          </p>

          <h5>Transportation</h5>
          <p>
            Auto, buses, and ride-sharing options are available from Agra Cantt and Raja Ki Mandi railway stations.
          </p>
        </div>

        <div className="col-md-6">
          <iframe
            title="IET Agra Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.346525238129!2d78.00932567533066!3d27.177083976490757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477293eb0bbfd%3A0x6ef7df38384c8eb4!2sIET%20Agra!5e0!3m2!1sen!2sin!4v1693298390670!5m2!1sen!2sin"
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            className="map-frame"
          ></iframe>
        </div>
      </div>
    </div>
    </main>
  );
};

export default VenueScreen;
