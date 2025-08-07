import React from "react";

const SubmissionInstructionsScreen = () => {
    return (
        <main className="container py-5">
            <div className="bg-glass p-5 rounded-4 shadow">
                <h2 className="mb-4">Submission Guidelines</h2>
                <p className="lead">
                    Please read the instructions carefully prior to submitting.
                </p>

                <section className="mt-4">
                    <h4 className="text-white mb-3">Paper Requirements</h4>
                    <ul className="">
                        <li>
                            All submissions should be written in English and should have 4 to 5 pages, including figures,
                            all of them in the US letter format pages. Ready versions of accepted papers exceeding five (5)
                            pages will be allowed pending payment of overlength charges ($70 for each additional page).
                        </li>
                        <li>The full papers must be written in English.</li>
                        <li>The full paper submission is required for publication.</li>
                        <li>
                            The version of your submission must be in the requested format. The authors are suggested to use
                            the Conference Paper template.
                        </li>
                        <li>
                            Please email{" "}
                            <a href="mailto:icfcsai2025@gmail.com" className="text-primary">
                                icfcsai2025@gmail.com
                            </a>{" "}
                            if you have any queries.
                        </li>
                        <li>
                            Download Paper Template:&nbsp;
                            <a
                                href="/pdfs/paper-template.docx"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary"
                            >
                                Word Format (.docx)
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="mt-5">
                    <h4 className="text-white mb-3">Submission Method</h4>
                    <p className="">
                        Please upload your abstract or full paper to{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary"
                        >
                            Conference Submission System
                        </a>.
                    </p>
                </section>

                <section className="mt-5">
                    <h4 className="text-white mb-3">Publication Ethics</h4>
                    <p className="">
                        All submitted articles should report original, previously unpublished research results,
                        experimental or theoretical. Articles submitted to the conference should meet these criteria and
                        must not be under consideration for publication elsewhere. We firmly believe that ethical conduct
                        is the most essential virtue of any academic. Hence, any act of plagiarism is a totally unacceptable
                        academic misconduct and cannot be tolerated.
                    </p>
                    <p className="">
                        If an author is found to commit an act of plagiarism, the following acts of sanction will be taken:
                    </p>
                    <ul className="">
                        <li>Reject the article submitted or delete the article from the final publications.</li>
                        <li>Report the author's violation to their supervisor(s) and affiliated institution(s).</li>
                        <li>
                            Report the author's violation to the appropriate overseeing office of academic ethics and research
                            funding agency.
                        </li>
                        <li>
                            Reserve the right to publish the author's name(s), the title of the article, the name(s) of the
                            affiliated institution, and the details of misconduct, etc. of the plagiarist.
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default SubmissionInstructionsScreen;
