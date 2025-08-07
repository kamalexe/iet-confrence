import placeholder from '../assets/placeholder-person.jpg';

const speakers = [
  {
    name: 'Dr. Elbert M. Galas',
    role: 'University President',
    image: '/speakers/Dr. Elbert M. Galas.jpg',
    designation: 'Pangasinan State University (PSU), Philippines',
  },
  {
    name: 'Dr. Razeale Resultay',
    role: 'Vice President for Research, Extension & Innovation',
    image: '/speakers/Dr. Razeale Resultay.jpeg',
    designation: 'Pangasinan State University (PSU), Philippines',
  },
  {
    name: 'Prof. R.K Agrawal',
    role: 'Professor',
    image: '/speakers/R. K. Agrawal.jpg',
    designation: 'Jawaharlal Nehru University',
  },
  {
    name: 'Prof. Sanjay K. Dwivedi',
    role: 'Professor',
    image: '/speakers/Prof. Sanjay K. Dwivedi.jpg',
    designation: 'Dept. of Computer Science, BBAU (Central University), Lucknow, U.P., India',
  },
  {
    name: 'Prof. Neelendra Badal',
    role: 'Director',
    image: '/speakers/Prof. (Dr.) Neelendra Badal.jpeg',
    designation: 'Rajkiya Engineering College, Bijnor, India',
  },
  {
    name: 'Dr. B.D.K. Patro',
    role: 'Associate Professor',
    image: '/speakers/Dr. B.D.K. Patro.jpg',
    designation: 'Dept. of Computer Science & Engineering, Rajkiya Engineering College, Kannauj',
  },
];

const SpeakersScreen = () => {
  return (
    <main className="container">
      <div className="container py-5">
        <h2 className="mb-4 text-white">Speakers</h2>
        <div className="row g-4">
          {speakers.map((speaker, index) => (
            <div key={index} className="col-md-4">
            <div className="container bg-glass h-100 text-center p-3 bg-transparent text-white">
            <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="card-img-top mx-auto rounded-circle"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholder;
                  }}
                />
                <div className="card-body mt-3">
                  <p className="card-text mb-1">{speaker.role}</p>
                  <h5 className="card-title">{speaker.name}</h5>
                  {speaker.designation && (
                    <p className="card-text small">{speaker.designation}</p>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SpeakersScreen;
