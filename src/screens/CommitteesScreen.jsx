import React from 'react';
import MemberCard from "../components/MemberCard";
import StudentCard from"../components/StudentCard";

const committeeMembers = [
  {
    name: 'Prof. Ashu Rani',
    image: '/committees/Prof. Ashu Rani.jpeg',
    role: 'Chief Patron',
    designation: 'Vice Chancellor,<br> Dr. Bhimrao Ambedkar University, Agra',
    isSpecial: true,
  },
  {
    name: 'Prof. Manu Pratap Singh',
    image: '/committees/Prof. Manu Pratap Singh.jpeg',
    role: 'Patron',
    designation: 'Director,<br> Institute of Engineering and Technology, Khandari, Agra',
  },
  {
    name: 'Dr. Rajesh Lavania',
    image: '/committees/Dr. Rajesh Lavania.png',
    role: 'Convenor',
    designation: 'Head Incharge,<br> Department of Computer Science and Engineering',
  },
  {
    name: 'Dr. Ganesh Chandra',
    image: '/committees/Dr. Ganesh Chandra.jpeg',
    role: 'Organizing Secretary',
  },
  {
    name: 'Dr. Pragya Kabra',
    image: '/committees/Dr. Pragya Kabra.jpg',
    role: 'Conference Secretary',
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

const studentConveners = [
  {
    name: 'Puru Shekhawat',
    image: '/students/Puru Shekhawat.webp',
    designation: 'CSE (3rd Year)',
  },
  {
    name: 'Kamal Maurya',
    image: '/students/Kamal Maurya.webp',
    designation: 'CSE (4th Year)',
  },
  {
    name: 'Javed Malik',
    image: '/students/Javed Malik.webp',
    designation: 'CSE (4th Year)',
  },
];

const CommitteesScreen = () => {
  return (
    <main className="container py-5">
      {/* Organizing Committee */}
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

      {/* Student Committee */}
      <div className="mt-5">
        <h2 className="mb-4 text-white">Student Committee</h2>

        <div className="row g-4 justify-content-center">
          {studentConveners.map((student, i) => (
            <StudentCard key={i} {...student} />
          ))}
        </div>

      </div>

    </main>
  );
};

export default CommitteesScreen;
