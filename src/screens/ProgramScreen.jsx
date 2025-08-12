import React from 'react';

const programTracks = [
  {
    id: "Track 1",
    title: "Artificial Intelligence and Machine Learning",
    content:
      "This track focuses on theoretical and practical advancements in AI and ML, including deep learning, neural networks, reinforcement learning, natural language processing, and intelligent agent systems. It aims to highlight algorithms, frameworks, and novel models that contribute to smart decision-making systems.",
  },
  {
    id: "Track 2",
    title: "Data Science, Big Data, and Intelligent Analytics",
    content:
      "Covering the full data pipeline — from data collection and storage to analysis and visualization — this track invites research on big data platforms, predictive modeling, data mining, statistical computing, and the role of AI in transforming raw data into actionable insights.",
  },
  {
    id: "Track 3",
    title: "Computer Vision, Robotics, and Intelligent Automation",
    content:
      "This track brings together innovation in computer vision, robotics, drone technology, image and video processing, and AI-powered automation. It emphasizes intelligent systems capable of perception, motion, and interaction with the physical world.",
  },
  {
    id: "Track 4",
    title: "Cybersecurity, Blockchain, and Secure Systems",
    content:
      "As AI becomes more pervasive, ensuring secure computing is essential. This track invites research on cybersecurity protocols, blockchain technologies, intrusion detection systems, cryptography, and AI’s role in enhancing digital security.",
  },
  {
    id: "Track 5",
    title: "IoT, Edge Computing, and Smart Systems",
    content:
      "This track focuses on the integration of AI with the Internet of Things (IoT), smart sensors, edge and fog computing, and their applications in smart homes, cities, healthcare, and industries.",
  },
  {
    id: "Track 6",
    title: "Education Technology and Digital Learning",
    content: {
      paragraph:
        "This track explores how digital tools are transforming education through innovative approaches and platforms. Key topics include:",
      bullets: [
        "E-Learning Platforms",
        "EdTech Innovation",
        "MOOCs",
        "Gamification",
      ],
    },
  },
  {
    id: "Track 7",
    title: "Advances in Communication and Network",
    content:
      "This track focuses on the integration of AI with the Internet of Things (IoT), smart sensors, edge and fog computing, and their applications in smart homes, cities, healthcare, and industries.",
  },
  {
    id: "Track 8",
    title: "Multidisciplinary and Emerging Areas in Computer Science",
    content: {
      paragraph:
        "This inclusive track encourages submissions across all areas of Computer Science, especially those combining multiple disciplines. This track is designed to promote interdisciplinary collaboration and offer a platform for ideas that cut across traditional academic boundaries, aligning with the conference's broader mission. This track invites papers that integrate computer science with other disciplines to solve real-world problems or create innovative systems. Topics include:",
      bullets: [
        "Software Engineering and Agile Methodologies",
        "Cloud Computing and Grid Technologies",
        "High-Performance Computing and Quantum Computing",
        "Human-Computer Interaction (HCI)",
        "Natural Language Processing",
        "Bioinformatics and Computational Biology",
        "AR/VR and Gaming Technologies",
      ],
    },
  },
];

const recommendedTopics = [
  "Rethinking cities as planetary agents",
  "Conceptual and historical overview of remote sensing and the city",
  "From pixels to politics",
  "Critical Geographies of urban remote sensing",
  "Multi-temporal satellite study of land use change and urban growth",
  "Urban classification and zoning",
  "Utilizing SAR data in congested urban environments",
  "Urban remote sensing using AI, machine learning, and deep learning",
  "A multi-sensor approach to urban growth and heat islands in Kolkata",
  "Delhi’s air quality and aerosol mapping",
  "Potentials and drawbacks of remote sensing for smart city governance",
  "Climate-resilient city and geospatial planning",
  "Coastal megacities’ disaster risk reduction",
  "The future of urban sensing with geospatial AI",
  "Urban circular economy transitions and remote sensing",
  "Change of cultural landscape",
  "Case study based observations",
];

const ProgramScreen = () => {
  return (
    <main className="container py-5">
      <h2 className="mb-4">Conference Program Tracks</h2>

      <div className="accordion" id="programAccordion">
        {programTracks.map((track) => {
          const normalizedId = track.id.replace(/\s+/g, '');

          return (
            <div key={track.id} className="accordion-item bg-transparent text-white border-0">
              <h2 className="accordion-header" id={`heading${normalizedId}`}>
                <button
                  className="accordion-button bg-glass text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${normalizedId}`}
                  aria-expanded="false"
                  aria-controls={`collapse${normalizedId}`}
                >
                  <b className="me-2">{track.id}:</b> {track.title}
                </button>
              </h2>
              <div
                id={`collapse${normalizedId}`}
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  {typeof track.content === 'string' ? (
                    <p>{track.content}</p>
                  ) : (
                    <>
                      <p>{track.content.paragraph}</p>
                      <ul className="ms-3">
                        {track.content.bullets?.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recommended Topics Section */}
      <div className="mt-5">
        <h3>Recommended Topics (but not limited to)</h3>
        <ul className="ms-3">
          {recommendedTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ProgramScreen;
