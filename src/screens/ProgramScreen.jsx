import React from 'react';

const programTracks = [
    {
      id: "Track 1",
      title: "Artificial Intelligence and Machine Learning",
      content:
        "This track delves into advanced topics including deep learning architectures, convolutional and recurrent neural networks, and large-scale natural language processing (NLP) models. It also covers reinforcement learning, intelligent agents, and generative AI. Focus will be given to the application of ML algorithms in autonomous systems, ethical AI, explainability, and the integration of machine learning in real-world systems using modern frameworks such as TensorFlow, PyTorch, and Scikit-learn.",
    },
    {
      id: "Track 2",
      title: "Data Science, Big Data & Intelligent Analytics",
      content:
        "Focuses on end-to-end data workflows — from data ingestion, cleaning, and feature engineering to data mining and predictive modeling. Topics include scalable big data platforms (e.g., Hadoop, Spark), real-time analytics, intelligent visualization techniques, and business intelligence systems. The track also encourages discussions on responsible AI, data governance, data privacy, and using analytics for strategic decision-making across industries such as healthcare, finance, and smart infrastructure.",
    },
    {
      id: "Track 3",
      title: "Computer Vision, Robotics & Intelligent Automation",
      content:
        "This track encompasses AI-powered visual systems and autonomous machines. Subjects include image segmentation, object detection, video analytics, SLAM (Simultaneous Localization and Mapping), robot path planning, human-robot interaction, and computer vision for embedded systems. Emerging topics like drone vision, surveillance analytics, and vision-based quality inspection in manufacturing will be explored, along with open-source tools and hardware integration for robotics.",
    },
    {
      id: "Track 4",
      title: "Cybersecurity, Blockchain & Secure Systems",
      content:
        "Emphasizes foundational and emerging areas of cybersecurity including cryptographic algorithms, zero-trust architecture, AI-enabled intrusion detection systems, and secure software development practices. The blockchain component addresses consensus mechanisms, smart contract vulnerabilities, decentralized identity, and Web3 security. This track will also feature research on post-quantum cryptography and the application of AI in cyber defense strategies against evolving threats.",
    },
    {
      id: "Track 5",
      title: "IoT, Edge Computing & Smart Systems",
      content:
        "Covers system architectures and data flow in the Internet of Things (IoT) ecosystem, including device communication protocols (MQTT, CoAP), edge analytics, and fog computing. It emphasizes real-time AI at the edge, energy-efficient embedded intelligence, smart city infrastructure, wearable health monitoring, and predictive maintenance in Industry 4.0. Topics also include sensor fusion, digital twins, and integration with 5G networks for low-latency intelligent applications.",
    },
    {
      id: "Track 6",
      title: "Multidisciplinary & Emerging Areas in Computer Science",
      content:
        "This open-ended track encourages cross-disciplinary innovation. Key areas include quantum computing algorithms and hardware, bioinformatics and computational biology, immersive technologies (AR/VR/XR), human-computer interaction (HCI), affective computing, and software engineering methodologies. It also explores the social impact of computing technologies, digital ethics, inclusive design, and the convergence of computing with physics, biology, and cognitive sciences.",
    },
  ];
  
const ProgramScreen = () => {

  return (
    <main className='container'>
      <div className="p-4 rounded">
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
          aria-expanded="true"
          aria-controls={`collapse${normalizedId}`}
        >
          <b className="me-2">{track.id}:</b> {track.title}
        </button>
      </h2>
      <div
        id={`collapse${normalizedId}`}
        className="accordion-collapse collapse show"
      >
        <div className="accordion-body">{track.content}</div>
      </div>
    </div>
  );
})}

        </div>
      </div>
    </main>
  );
};

export default ProgramScreen;
