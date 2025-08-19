import React from "react";
import { Helmet } from "react-helmet-async";

const PublicationGuidelinesScreen = () => {
  return (
    <main className="container py-5">
      <Helmet>
        <title>Publication Guidelines | ICFCSAI 2025</title>
        <meta
          name="description"
          content="Review the publication process and submission guidelines for ICFCSAI 2025. Learn about paper submission, peer review, acceptance, and publishing steps."
        />
        <meta property="og:title" content="Publication Guidelines - ICFCSAI 2025" />
        <meta property="og:description" content="Guidelines for submitting and publishing papers at ICFCSAI 2025." />
        <meta property="og:image" content="https://iet-confrence.vercel.app/banner.jpg" />
      </Helmet>

      <div className="bg-glass p-5 rounded-4 shadow">
        <h2 className="mb-4">Publication Guidelines</h2>
        <p className="lead">
          Please review the publication process carefully before submitting your paper.
        </p>

        <section className="mt-4">
                    <p className="">
                        All full paper submissions to ICFCSAI 2025 should be related to the main topics of the conference. 
                        Each paper will be peer-reviewed and evaluated based on originality, technical or research depth, correctness, completeness, 
                        contributions, and readability.
          </p>
                    <p className="">
                        Manuscripts will first undergo initial screening by the editorial team. Submissions that pass the screening 
                        will be reviewed by at least two to three experts. Based on reviewer feedback, the editor will decide whether to accept or reject the paper.
                        Accepted papers will be published in the proceedings after registration and presentation.
          </p>
        </section>

        <section className="mt-5">
                    <h4 className="text-white mb-3">Publishing Process</h4>
                    <ol className="">
            <li>
                            Authors must submit their papers via the submission system or by email to:{" "}
                            <a href="mailto:icfcsai2025@gmail.com">icfcsai2025@gmail.com</a>. 
                            Preferred formats: Word (.docx) or PDF.
            </li>
            <li>
                            After the submission deadline, the organizing committee will start reviewing all submitted papers.
            </li>
            <li>
                            Notification of acceptance or rejection will be sent to the corresponding authors on or before the announced date.
            </li>
            <li>
                            Upon acceptance, authors must pay the registration fee and send the following documents to{" "}
                            <a href="mailto:icfcsai2025@gmail.com">icfcsai2025@gmail.com</a>: final manuscript (PDF and Word), registration form, and payment proof.
            </li>
            <li>
                            The final version should be proofread, properly typeset, and submitted before the deadline.
            </li>
                        <li>
                            Final manuscripts will be forwarded to the publication office for official publication.
                        </li>
          </ol>
        </section>
      </div>
    </main>
  );
};

export default PublicationGuidelinesScreen;
