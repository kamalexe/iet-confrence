const SpeakersScreen = () => {
    return (
      <div className="container py-5">
        <h2 className="mb-4">Speakers</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 text-center p-3">
              <img src="https://via.placeholder.com/150" className="card-img-top mx-auto" alt="Speaker 1" />
              <div className="card-body">
                <h5 className="card-title">Dr. Neha Verma</h5>
                <p className="card-text">AI Researcher, IIT Bombay</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center p-3">
              <img src="https://via.placeholder.com/150" className="card-img-top mx-auto" alt="Speaker 2" />
              <div className="card-body">
                <h5 className="card-title">Prof. A. Sharma</h5>
                <p className="card-text">Dean, IET Agra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SpeakersScreen;
  