import React from 'react';

const CallForPapersScreen = () => {
    return (
        <main className='container'>
            <h1 >Call for Papers</h1>

            <p className="text-lg mb-6 leading-relaxed">
                The <strong>International Conference on the Future of Computer Science with AI (FCSAI-2025)</strong> invites original, high-quality research contributions that have not been published or submitted elsewhere. We aim to foster discussion on the latest advancements and future directions in computing and artificial intelligence.
            </p>

            <section className="container bg-glass my-4 p-4">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-300">Topics of Interest</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Artificial Intelligence and Machine Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision and Image Processing</li>
                    <li>Blockchain and Decentralized Applications</li>
                    <li>Cybersecurity and Privacy</li>
                    <li>Big Data and Cloud Computing</li>
                    <li>IoT and Embedded Systems</li>
                    <li>Human-Computer Interaction</li>
                </ul>
            </section>

            <section className="container bg-glass my-4 p-4">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-300">Important Dates</h2>
                <ul className="space-y-2 text-gray-300">
                    <li><strong>Submission Deadline:</strong> August 31, 2025</li>
                    <li><strong>Notification of Acceptance:</strong> September 10, 2025</li>
                    <li><strong>Final Paper Submission:</strong> September 17, 2025</li>
                </ul>
            </section>

            <section className="container bg-glass my-4 p-4">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-300">Submission Guidelines</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Papers must adhere to the IEEE conference formatting guidelines.</li>
                    <li>Maximum length: 6 pages (including references).</li>
                    <li>All submissions will be reviewed by at least two independent reviewers.</li>
                    <li>Submit your manuscript via <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline hover:text-indigo-300">Microsoft CMT</a>.</li>
                </ul>
            </section>

            <button
                href="https://example.com/submission-portal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gradient w-100">
                Submit Your Paper
            </button>



        </main>
    );
};

export default CallForPapersScreen;
