import React from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

const schedule = [
  {
    day: "September 25, 2025",
    sessions: [
      {
        time: "09:00 AM – 09:30 AM",
        title: "Registration",
        description: "Arrival, badge distribution, and delegate kit handover.",
      },
      {
        time: "09:30 AM – 11:00 AM",
        title: "Inaugural Session",
        description: "Welcome address, lighting of the lamp, keynote speeches by dignitaries.",
      },
      {
        time: "11:00 AM – 11:30 AM",
        title: "High Tea",
        description: "Refreshments and networking break.",
      },
      {
        time: "11:30 AM – 01:00 PM",
        title: "Track 1: AI & ML",
        description: "Sessions on deep learning, neural networks, and educational applications.",
      },
      {
        time: "01:00 PM – 02:00 PM",
        title: "Lunch Break",
        description: "Buffet lunch for all delegates and speakers.",
      },
      {
        time: "02:00 PM – 03:30 PM",
        title: "Track 2: Big Data & Analytics",
        description: "Talks on real-time analytics, data pipelines, and case studies.",
      },
    ],
  },
  {
    day: "September 26, 2025",
    sessions: [
      {
        time: "10:00 AM – 11:00 AM",
        title: "Track 3: Robotics & Automation",
        description: "Exploring robotics, drones, and autonomous systems.",
      },
      {
        time: "11:00 AM – 11:15 AM",
        title: "Tea Break",
        description: "Short break with refreshments.",
      },
      {
        time: "11:15 AM – 01:00 PM",
        title: "Track 4: Cybersecurity & AI",
        description: "AI applications in threat detection, data privacy, and digital trust.",
      },
      {
        time: "01:00 PM – 02:00 PM",
        title: "Lunch Break",
        description: "Lunch and networking session.",
      },
      {
        time: "02:00 PM – 03:30 PM",
        title: "Track 5: Blockchain & IoT",
        description: "Sessions on smart contracts, sensor networks, and secure IoT.",
      },
      {
        time: "03:30 PM – 05:00 PM",
        title: "Track 6: Emerging Technologies",
        description: "Quantum computing, AR/VR, HCI trends, and future tech outlook.",
      },
      {
        time: "05:00 PM – 05:15 PM",
        title: "Tea Break",
        description: "Evening tea and informal interaction.",
      },
    ],
  },
  {
    day: "September 27, 2025",
    sessions: [
      {
        time: "10:00 AM – 11:00 AM",
        title: "Track 7: Education & AI",
        description: "AI-powered education systems, assessments, and future classrooms.",
      },
      {
        time: "11:00 AM – 11:15 AM",
        title: "High Tea",
        description: "Morning refreshments and networking.",
      },
      {
        time: "11:15 AM – 01:00 PM",
        title: "Track 8: Industry Applications",
        description: "AI in healthcare, finance, agriculture, and public systems.",
      },
      {
        time: "01:00 PM – 02:00 PM",
        title: "Lunch Break",
        description: "Lunch served to all participants.",
      },
      {
        time: "02:00 PM – 04:00 PM",
        title: "Valedictory Session",
        description: "Awards, feedback, and official conference closure.",
      },
    ],
  },
];

export default function ScheduleScreen() {
  return (
      <main className="container m-5">
      
      <div className="main-timeline">
        {schedule.map((daySchedule, index) =>
          daySchedule.sessions.map((session, sessionIndex) => (
            <div
              className={`timeline ${sessionIndex % 2 === 0 ? "left" : "right"}`}
              key={`${daySchedule.day}-${session.title}`}
            >
              <div className="container bg-glass">
                <MDBCardBody className="p-4">
                  <h5 className="text-primary mb-2">{daySchedule.day}</h5>
                  <h6 className="fw-bold">{session.time}</h6>
                  <h5>{session.title}</h5>
                  <p className="mb-0">{session.description}</p>
                </MDBCardBody>
              </div>
            </div>
          ))
        )}
      </div>
      </main>
    // </MDBContainer>
  );
}
