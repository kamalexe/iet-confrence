import React from "react";
import { Helmet } from "react-helmet-async";
import { MDBCardBody } from "mdb-react-ui-kit";

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
    <main className="container py-5">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Conference Schedule | FCSAI-2025</title>
        <meta
          name="description"
          content="Check out the detailed schedule of FCSAI-2025: keynote sessions, technical tracks, workshops, and networking events happening from September 25–27, 2025."
        />
        <meta
          name="keywords"
          content="FCSAI 2025, AI Conference Schedule, Computer Science Conference, Artificial Intelligence, Machine Learning, Robotics, Cybersecurity, Blockchain, IoT, Emerging Tech"
        />
        <meta property="og:title" content="FCSAI-2025 Conference Schedule" />
        <meta
          property="og:description"
          content="Explore the 3-day agenda of FCSAI-2025 including AI, ML, Robotics, Cybersecurity, Blockchain, IoT, and Emerging Tech sessions."
        />
        <meta
          property="og:image"
          content="https://iet-confrence.vercel.app/banner.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://iet-confrence.vercel.app/schedule"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FCSAI-2025 Conference Schedule" />
        <meta
          name="twitter:description"
          content="Stay updated with the full schedule of the International Conference on Future of Computer Science with AI (FCSAI-2025)."
        />
        <meta
          name="twitter:image"
          content="https://iet-confrence.vercel.app/banner.jpg"
        />
        <link
          rel="canonical"
          href="https://iet-confrence.vercel.app/schedule"
        />
      </Helmet>

      {/* ✅ Timeline */}
      <div className="main-timeline">
        {schedule.map((daySchedule, index) =>
          daySchedule.sessions.map((session, sessionIndex) => (
            <div
              className={`timeline ${sessionIndex % 2 === 0 ? "left" : "right"}`}
              key={`${daySchedule.day}-${session.title}-${sessionIndex}`}
            >
              <div className="container bg-glass">
                <MDBCardBody className="p-4">
                  <h5 className="mb-2">{daySchedule.day}</h5>
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
  );
}
