import React from 'react';

const CommitteesScreen = () => {
  return (
    <main className='my-5'>
    <div className="container">
      <div className="bg-glass p-4 rounded">
        <h2 className="mb-4">Organizing Committee</h2>
        <div className="row g-4">
          {/* Chief Patron */}
          <div className="col-md-6">
            <div className="card bg-glass text-white border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Chief Patron</h5>
                <p className="card-text">Prof. Ashu Rani<br />Vice Chancellor, DBRAU, Agra</p>
              </div>
            </div>
          </div>

          {/* Patron */}
          <div className="col-md-6">
            <div className="card bg-glass text-white border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Patron</h5>
                <p className="card-text">Prof. Manu Pratap Singh<br />Director, IET</p>
              </div>
            </div>
          </div>

          {/* Convenor */}
          <div className="col-md-6">
            <div className="card bg-glass text-white border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Convenor</h5>
                <p className="card-text">Dr. Rajesh Lavania<br />Head Incharge, CSE</p>
              </div>
            </div>
          </div>

          {/* Organizing Secretary */}
          <div className="col-md-6">
            <div className="card bg-glass text-white border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Organizing Secretary</h5>
                <p className="card-text">Dr. Ganesh Chandra</p>
              </div>
            </div>
          </div>

          {/* Program Organizer */}
          <div className="col-md-6">
            <div className="card bg-glass text-white border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Program Organizer</h5>
                <p className="card-text">Dr. Pragya Kabra</p>
              </div>
            </div>
          </div>

          {/* Advisory Committee Head */}
          <div className="col-md-6">
            <div className="card bg-glass text-white border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Advisory Committee Head</h5>
                <p className="card-text">Er. Subodh Sharma</p>
              </div>
            </div>
          </div>

          {/* Technical Committee Head */}
          <div className="col-md-6">
            <div className="card bg-glass text-white border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Technical Committee Head</h5>
                <p className="card-text">Er. Prashant Maharishi</p>
              </div>
            </div>
          </div>

          {/* Publicity Committee Head */}
          <div className="col-md-6">
            <div className="card bg-glass text-white border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Publicity Committee Head</h5>
                <p className="card-text">Er. Shikhi Agarwal</p>
              </div>
            </div>
          </div>

          {/* Decoration & Media Committee Head */}
          <div className="col-md-6">
            <div className="card bg-glass text-white border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Decoration & Media Committee Head</h5>
                <p className="card-text">Er. Saurabh Garg</p>
              </div>
            </div>
          </div>

          {/* Accommodation & Food Committee Members */}
          <div className="col-12">
            <div className="card bg-glass text-white border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Accommodation & Food Committee</h5>
                <p className="card-text mb-1">Er. Subodh Sharma</p>
                <p className="card-text mb-1">Er. Saurabh Garg</p>
                <p className="card-text mb-1">Er. Prashant Maharishi</p>
                <p className="card-text mb-1">Dr. Ganesh Chandra</p>
                <p className="card-text mb-1">Dr. Pragya Kabra</p>
                <p className="card-text">Er. Shikhi Agarwal</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </main>
  );
};

export default CommitteesScreen;
