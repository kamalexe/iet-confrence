import MemberCard from '../components/MemberCard';

const speakers = [
  {
    name: 'Dr. Elbert M. Galas',
    role: 'University President',
    image: '/speakers/Dr. Elbert M. Galas.jpg',
    designation: 'Pangasinan State University (PSU), Pangasinan, Philippines',
  },
  {
    name: 'Dr. Razeale Resultay',
    role: 'Vice President for Research, Extension & Innovation',
    image: '/speakers/Dr. Razeale Resultay.jpeg',
    designation: 'Pangasinan State University (PSU), Pangasinan, Philippines',
  },
  {
    name: 'Rex B. Basuel',
    role: 'Center Director',
    image: '/speakers/Rex B. Basuel.jpg',
    designation: 'Pangasinan State University (PSU), Pangasinan, Philippines',
  },
  {
    name: 'Dr. Sanghyuk Lee',
    role: 'Professor',
    image: '/speakers/Sanghyuk Lee.jpg',
    designation: 'School of Engineering, New Uzbekistan University, Tashkent, Uzbekistan',
  },
  {
    name: 'Prof. R.K Agrawal',
    role: 'Professor',
    image: '/speakers/R. K. Agrawal.jpg',
    designation: 'Jawaharlal Nehru University (JNU), New Delhi, India',
  },
  {
    name: 'Prof. Sanjay K. Dwivedi',
    role: 'Professor',
    image: '/speakers/Prof. Sanjay K. Dwivedi.jpg',
    designation: 'Babasaheb Bhimrao Ambedkar University (BBAU), Lucknow, India',
  },
  {
    name: 'Prof. Neelendra Badal',
    role: 'Director',
    image: '/speakers/Prof. (Dr.) Neelendra Badal.jpeg',
    designation: 'Rajkiya Engineering College (REC), Bijnor, India',
  },
  {
    name: 'Dr. Saroj Kr. Biswas',
    role: 'Associate Professor',
    image: '/speakers/Dr. Saroj Kr. Biswas.jpg',
    designation: 'National Institute of Technology (NIT), Silchar, India',
  },
  {
    name: 'Dr. B.D.K. Patro',
    role: 'Associate Professor',
    image: '/speakers/Dr. B.D.K. Patro.jpg',
    designation: 'Rajkiya Engineering College (REC), Kannauj, India',
  },
];


const SpeakersScreen = () => {
  return (
    <main className="container py-5">
      <div>
        <h2 className="mb-4 text-white">Speakers</h2>
        <div className="row g-4">
          {speakers.map((speaker, index) => (
            <div key={index} className="col-md-4">
              <MemberCard
                image={speaker.image}
                name={speaker.name}
                role={speaker.role}
                designation={speaker.designation}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SpeakersScreen;
