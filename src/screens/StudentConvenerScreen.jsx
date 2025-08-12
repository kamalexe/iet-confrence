import React from 'react';
import MemberCard from "../components/MemberCard";

const studentConveners = [
    {
        name: 'Puru Shekhawat',
        image: '/students/Puru Shekhawat.webp',
        role: 'Publicity',
        designation: '3rd Year',
      },
  {
    name: 'Kamal Maurya',
    image: '/students/Kamal Maurya.webp',
    role: 'Technical Support',
    designation: '4th Year',
  },
  {
    name: 'Javed Malik',
    image: '/students/Javed Malik.webp',
    role: 'Hospitality',
    designation: '4th Year',
  },

];

const StudentConvenerScreen = () => {
  return (
    <main className="container py-5">
      <div>
        <h2 className="mb-4 text-white">Student Conveners</h2>
        <div className="row g-4">
          {studentConveners.map((student, index) => (
            <div key={index} className="col-md-4">
              <MemberCard
                image={student.image}
                name={student.name}
                role={student.role}
                designation={student.designation}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default StudentConvenerScreen;
