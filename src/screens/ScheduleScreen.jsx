import React from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

const schedule = [
  {
    day: "September 25, 2025",
    sessions: [
      {
        time: "09:00 AM – 10:00 AM",
        title: "Inaugural Ceremony",
        description: "Welcome address, lighting of the lamp, keynote by Chief Guest.",
      },
      {
        time: "10:15 AM – 12:00 PM",
        title: "Keynote Session 1",
        description: "Future of AI in India – Prof. Raghunath Reddy (IISc Bangalore).",
      },
      {
        time: "12:15 PM – 01:30 PM",
        title: "Track 1: AI & ML",
        description: "Deep learning architectures and AI in education.",
      },
      {
        time: "02:30 PM – 04:30 PM",
        title: "Workshop: GenAI for Students",
        description: "Hands-on session on ChatGPT, Gemini, Copilot tools.",
      },
    ],
  },
  {
    day: "September 26, 2025",
    sessions: [
      {
        time: "09:00 AM – 10:30 AM",
        title: "Panel Discussion",
        description: "Ethical AI & Regulations – Experts from Academia & Industry.",
      },
      {
        time: "10:45 AM – 12:15 PM",
        title: "Track 2: Big Data & Analytics",
        description: "Real-time analytics and case study on climate prediction.",
      },
      {
        time: "01:15 PM – 03:00 PM",
        title: "Track 3: Robotics & Automation",
        description: "Drone tech, autonomous vehicles, and manufacturing AI.",
      },
      {
        time: "03:15 PM – 04:30 PM",
        title: "Workshop: AI in Cybersecurity",
        description: "Using AI for intrusion detection and secure infrastructure.",
      },
    ],
  },
  {
    day: "September 27, 2025",
    sessions: [
      {
        time: "09:00 AM – 10:30 AM",
        title: "Track 4: Blockchain & IoT",
        description: "Smart contracts, edge computing, and secure IoT frameworks.",
      },
      {
        time: "10:45 AM – 12:30 PM",
        title: "Track 5: Emerging Technologies",
        description: "Quantum Computing, AR/VR, HCI & software engineering innovation.",
      },
      {
        time: "01:30 PM – 03:00 PM",
        title: "Valedictory Session",
        description: "Award ceremony, vote of thanks, and closing remarks.",
      },
    ],
  },
];

export default function ScheduleScreen() {
  return (
      <main className="py-5 px-5">
      
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
