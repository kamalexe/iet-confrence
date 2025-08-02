import placeholder from '../assets/placeholder-person.jpg';

const speakers = [
  {
    name: 'Dr. Neha Verma',
    role: 'AI Researcher, IIT Bombay',
    image: placeholder,
  },
  {
    name: 'Prof. A. Sharma',
    role: 'Dean, IET Agra',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Dr. R.K. Mehta',
    role: 'Data Scientist, Infosys',
    image: 'https://invalid-url.com/image.jpg', // for testing fallback
  },
  {
    name: 'Ms. Tanya Gupta',
    role: 'CTO, StartupVerse',
    image: 'https://via.placeholder.com/150',
  },
];

const SpeakersScreen = () => {
  return (
    <main className="mt-5 mb-5">
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
                <div className="card-body">
                  <h5 className="card-title">{speaker.name}</h5>
                  <p className="card-text">{speaker.role}</p>
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
