import React from 'react';
import placeholder from '../assets/placeholder-person.jpg';

const committeeMembers = [
  {
    name: 'Prof. Ashu Rani',
    role: 'Chief Patron\nVice Chancellor, DBRAU, Agra',
    image: placeholder,
  },
  {
    name: 'Prof. Manu Pratap Singh',
    role: 'Patron\nDirector, IET',
    image: placeholder,
  },
  {
    name: 'Dr. Rajesh Lavania',
    role: 'Convenor\nHead Incharge, CSE',
    image: placeholder,
  },
  {
    name: 'Dr. Ganesh Chandra',
    role: 'Organizing Secretary',
    image: placeholder,
  },
  {
    name: 'Dr. Pragya Kabra',
    role: 'Program Organizer',
    image: placeholder,
  },
  {
    name: 'Er. Subodh Sharma',
    role: 'Advisory Committee Head',
    image: placeholder,
  },
  {
    name: 'Er. Prashant Maharishi',
    role: 'Technical Committee Head',
    image: placeholder,
  },
  {
    name: 'Er. Shikhi Agarwal',
    role: 'Publicity Committee Head',
    image: placeholder,
  },
  {
    name: 'Er. Saurabh Garg',
    role: 'Decoration & Media Committee Head',
    image: placeholder,
  },
];

const CommitteesScreen = () => {
  return (
    <main className='container'>
      <div className="container">
        <div className="p-4 rounded">
          <h2 className="mb-4 text-white">Organizing Committee</h2>
          <div className="row g-4">
            {committeeMembers.map((member, index) => (
              <div key={index} className="col-md-4">
                <div className="container bg-glass h-100 text-center p-3 bg-transparent text-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="card-img-top mx-auto rounded-circle"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = placeholder;
                    }}
                  />
                  <div className="card-body mt-3">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text white-space-pre-line">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Accommodation & Food Committee */}
            <div className="col-12">
              <div className="card bg-glass text-white border-0 shadow-sm h-100 text-center p-3">
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
