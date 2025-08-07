import React from 'react';
import MemberCard from "../components/MemberCard";

const committeeMembers = [
  {
    name: 'Prof. Ashu Rani',
    image: '/committees/Prof. Ashu Rani.jpeg',
    role: 'Chief Patron',
    designation: 'Vice Chancellor, Dr. Bhimrao Ambedkar University, Agra',
    isSpecial : true,
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
    <main className="container py-5">
      <div>
        <h2 className="mb-4 text-white">Organizing Committee</h2>
        <div className="row g-4">
          {committeeMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <MemberCard
                image={member.image}
                name={member.name}
                role={member.role}
                designation={member.designation}
                isSpecial={member?.isSpecial}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CommitteesScreen;