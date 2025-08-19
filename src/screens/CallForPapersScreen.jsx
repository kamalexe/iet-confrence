import React from 'react';
import { Helmet } from 'react-helmet-async';
import registerQR from '../assets/register_qr.png';

const CallForPapersScreen = () => {
    return (
        <main className='container py-5'>
            {/* ✅ SEO Meta Tags */}
            <Helmet>
                <title>Call for Papers | ICFCSAI 2025</title>
                <meta
                    name="description"
                    content="Submit your research to ICFCSAI 2025. Important dates, submission guidelines, and registration details for the International Conference on the Future of Computer Science with AI."
                />
                <meta property="og:title" content="Call for Papers | ICFCSAI 2025" />
                <meta property="og:description" content="Submit your papers to ICFCSAI 2025. Check deadlines, guidelines, and registration details." />
                <meta property="og:image" content="https://iet-confrence.vercel.app/banner.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://iet-confrence.vercel.app/call-for-papers" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Call for Papers | ICFCSAI 2025" />
                <meta name="twitter:description" content="Submit your research to ICFCSAI 2025. Check important dates, guidelines, and registration process." />
                <meta name="twitter:image" content="https://iet-confrence.vercel.app/banner.jpg" />
            </Helmet>

            <h2>Call for Papers</h2>

            <p className="text-lg mb-6 leading-relaxed">
                The <strong>International Conference on the Future of Computer Science with AI (ICFCSAI 2025)</strong> invites original, high-quality research contributions that have not been published or submitted elsewhere. We aim to foster discussion on the latest advancements and future directions in computing and artificial intelligence.
            </p>

            <section className="container bg-glass my-4 p-4">
                <h2 className="mb-4">Important Dates</h2>
                <ul className="space-y-2 text-gray-300">
                    <li><strong>Submission Deadline:</strong> September 15, 2025</li>
                    <li><strong>Notification of Acceptance:</strong> September 17, 2025</li>
                    <li><strong>Camera Ready Paper & Reg.:</strong> September 20, 2025</li>
                </ul>
            </section>

            <section className="container bg-glass my-4 p-4">
                <h2 className="mb-4">Submission Guidelines</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Use two-column format, typically in US Letter size (8.5” x 11”).</li>
                    <li>Font: Times New Roman, size 10-point.</li>
                    <li>Margins: 0.75 inches on all sides (varies slightly by journal/conference).</li>
                    <li>
                        Download full formatting & submission guidelines{" "}
                        <a
                            href="/pdfs/guide.docx"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Word Format (.docx)
                        </a>
                    </li>

                </ul>
            </section>

            <section className="text-center">
                <h3 className="mb-3">Scan to Fill the Form</h3>
                <img
                    src={registerQR}
                    alt="Google Form QR Code"
                    width="200"
                    height="200"
                    className="rounded shadow"
                />
                <p className="mt-2 text-center">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdN1c9-gQVoHoc-Gw5fKduR5C32QUfbUOtNm56oB4tkQk_8EA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open Form
                    </a>
                </p>
            </section>


        </main>
    );
};

export default CallForPapersScreen;
