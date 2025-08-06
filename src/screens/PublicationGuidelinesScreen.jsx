import React from "react";

const PublicationGuidelinesScreen = () => {
    return (
        <main className="container py-5">
            <div className="bg-glass p-5 rounded-4 shadow">
                <h2 className="mb-4 text-white">Publication Guidelines</h2>
                <p className="lead text-white-50">
                    Please review the publication process carefully before submitting your paper.
                </p>

                <section className="mt-4">
                    <p className="text-white-50">
                        All full paper submissions to ISCBI 2026 should be related to the main topics of the conference. 
                        Each paper will be peer-reviewed and evaluated based on originality, technical or research depth, correctness, completeness, 
                        contributions, and readability.
                    </p>
                    <p className="text-white-50">
                        Manuscripts will first undergo initial screening by the editorial team. Submissions that pass the screening 
                        will be reviewed by at least two to three experts. Based on reviewer feedback, the editor will decide whether to accept or reject the paper.
                        Accepted papers will be published in the proceedings after registration and presentation.
                    </p>
                </section>

                <section className="mt-5">
                    <h4 className="text-white mb-3">Publishing Process</h4>
                    <ol className="text-white-50">
                        <li>
                            Authors must submit their papers via the submission system or by email to:{" "}
                            <a href="mailto:iscbi@chairmen.org" className="text-primary">iscbi@chairmen.org</a>. 
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
                            <a href="mailto:iscbi@chairmen.org" className="text-primary">iscbi@chairmen.org</a>: final manuscript (PDF and Word), registration form, and payment proof.
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
