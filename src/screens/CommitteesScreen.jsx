import React from 'react';
import placeholder from '../assets/placeholder-person.jpg';

const committeeMembers = [
  {
    name: 'Prof. Ashu Rani',
    image: '/committees/Prof. Ashu Rani.jpeg',
    role: 'CHIEF PATRON',
    designation: 'Vice Chancellor, Dr. Bhimrao Ambedkar University, Agra',
  },
  {
    name: 'Prof. Manu Pratap Singh',
    image: '/committees/Prof. Manu Pratap Singh.jpeg',
    role: 'Patron',
    designation: 'Director, Institute of Engineering and Technology, Swami Vivekananda Campus, Khandari, Agra',
  },
  {
    name: 'Dr. Rajesh Lavania',
    image: '/committees/Dr. Rajesh Lavania.png',
    role: 'Convenor',
    designation: 'Head Incharge, Department of Computer Science and Engineering',
  },
  {
    name: 'Dr. Ganesh Chandra',
    image: '/committees/Dr. Ganesh Chandra.jpeg',
    role: 'Organizing Secretary',
  },
  {
    name: 'Dr. Pragya Kabra',
    image: '/committees/Dr. Pragya Kabra.jpeg',
    role: 'Program Secretary',
  },
  {
    name: 'Er. Subodh Sharma',
    image: '/committees/Er. Subodh Sharma.jpg',
    role: 'Session Secretary',
  },
  {
    name: 'Er. Saurabh Garg',
    image: '/committees/Er. Saurabh Garg.png',
    role: 'Decoration & Media Secretary',
  },
  {
    name: 'Er. Prashant Maharishi',
    image: '/committees/Er. Prashant Maharishi.png',
    role: 'Technical Secretary',
  },
  {
    name: 'Er. Shikhi Agarwal',
    image: '/committees/Er. Shikhi Agarwal.png',
    role: 'Publicity Secretary',
  },
];

// const foodCommitteeMembers = [
//   { name: 'Er. Subodh Sharma' },
//   { name: 'Er. Saurabh Garg' },
//   { name: 'Er. Prashant Maharishi' },
//   { name: 'Dr. Ganesh Chandra' },
//   { name: 'Dr. Pragya Kabra' },
//   { name: 'Er. Shikhi Agarwal' },
// ];

const CommitteesScreen = () => {

  return (
    <main className='container'>
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
                <div className="card-body">
                  <p className="card-text" style={{ whiteSpace: 'pre-line' }}>{member.role}</p>
                  <h5 className="card-title">{member.name}</h5>
                  {member.designation && (
                    <p className="card-text">{member.designation}</p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Accommodation & Food Committee */}
          {/* <div className="col-12">
            <div className="card bg-glass text-white border-0 shadow-sm h-100 text-center p-3 mt-4">
              <div className="card-body">
                <h5 className="card-title">Accommodation & Food Committee</h5>
                {foodCommitteeMembers.map((member, idx) => (
                  <p key={idx} className="card-text mb-1">{member.name}</p>
                ))}
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </main>
  );
};

export default CommitteesScreen;