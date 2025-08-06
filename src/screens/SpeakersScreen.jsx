import placeholder from '../assets/placeholder-person.jpg';

const speakers = [
  {
    name: 'Dr. Elbert M. Galas',
    role: 'University President, Pangasinan State University (PSU), Philippines',
    image: '/speakers/Dr. Elbert M. Galas.jpg',
    // phone: '-',
    // email: '-',
  },
  {
    name: 'Dr. Razeale Resultay',
    role: 'Vice President for Research, Extension & Innovation, Pangasinan State University (PSU), Philippines',
    image: '/speakers/Dr. Razeale Resultay.jpeg',
    // phone: '-',
    // email: '-',
  },

  {
    name: 'Prof. R.K Agrawal',
    role: 'Jawaharlal Nehru University',
    image: '/speakers/R. K. Agrawal.jpg',
    // phone: '-',
    // email: '-',
  },
  // {
  //   name: 'Dr. Kalidas Yeturu',
  //   role: 'Associate Professor, Ph.D - IISc Bangalore, Areas: Machine Learning, Big Data Technologies',
  //   image: '/speakers/Dr. Kalidas Yeturu.jpg',
  //   phone: '0877 250 3206',
  //   email: 'ykalidas@iittp.ac.in',
  // },

  {
    name: 'Prof. Sanjay K. Dwivedi',
    role: 'Professor, Dept. of Computer Science, BBAU (Central University), Lucknow, U.P., India',
    image: '/speakers/Prof. Sanjay K. Dwivedi.jpg',
    // phone: '9452752447',
    // email: 'skd200@yahoo.com',
  },
  {
    name: 'Prof. Neelendra Badal',
    role: 'Director, Rajkiya Engineering College, Bijnor',
    image: '/speakers/Prof. (Dr.) Neelendra Badal.jpeg',
    // phone: '9415077454',
    // email: 'director@recb.ac.in',
  },
  {
    name: 'Dr. B.D.K. Patro',
    role: 'Associate Professor,Dept. of Computer Science & Engineering, Rajkiya Engineering College, Kannauj',
  image: '/speakers/Dr. B.D.K. Patro.jpg',
    // phone: '9412011464',
    // email: 'bdkpatro@rediffmail.com',
  },
  // {
    // name: 'Dr. Saroj Kr. Biswas',
    // role: 'Associate Professor, Dept. of Computer Science, NIT Silchar',
    // image: '/speakers/Dr. Saroj Kr. Biswas.jpg',
    // phone: '9508727987',
    // email: 'saroj@cse.nits.ac.in',
  // },
  // {
    // name: 'Prof. Sanjay Goal',
    // role: 'Ex V.C., J P University (Anoopsaher)',
    // image: '/speakers/Prof. Sanjay Goal.jpeg',
    // phone: '-',
    // email: '-',
  // },



  // {
  //   name: 'Prof. R.K Agrawal',
  //   role: 'Jawaharlal Nehru University',
  //   image: '/speakers/R. K. Agrawal.jpg',
  //   // phone: '-',
  //   // email: '-',
  // },

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
                <div className="card-body">
                  <h5 className="card-title">{speaker.name}</h5>
                  <p className="card-text">{speaker.role}</p>

                  <p className="mb-1">
                    <i className="bi bi-telephone-fill me-1" /> {speaker.phone}
                  </p>

                  <p className="mb-0">
                    <i className="bi bi-envelope-fill me-1" />
                    <a href={`mailto:${speaker.email}`} className="text-white text-decoration-underline">
                      {speaker.email}
                    </a>
                  </p>

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
