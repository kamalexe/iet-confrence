import React from 'react';

const RegistrationScreen = () => {
    return (
        <main className="container py-5">
            <div className="bg-glass p-5 rounded-4 shadow">
                <h1 className="display-6 fw-bold mb-4">Registration Guidelines</h1>

                <section className="mb-4">
                    <h4 className="fw-semibold">Registration Categories</h4>
                    <ul>
                        <li><strong>Author:</strong> Presentation + paper publishing in proceedings.</li>
                        <li><strong>Presenter:</strong> Presentation only, no paper publishing.</li>
                        <li><strong>Delegate:</strong> Attending the conference without presentation or paper publishing.</li>
                    </ul>
                    <p className="mb-0"><strong>Note:</strong> Registration fees are to be paid post-acceptance. Payment is completed on a secure page. Registered participants are entitled to:</p>
                    <ul>
                        <li>Conference Materials (Proceedings, etc.)</li>
                        <li>Access to Keynote Speeches</li>
                        <li>Participation in all sessions (including workshops & posters)</li>
                        <li>Conference reception + refreshments on February 7, 2026</li>
                        <li>Lunch and Dinner Banquet on February 7, 2026</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h4 className="fw-semibold">Submission Requirements</h4>
                    <ul>
                        <li>All papers must be in English (4–5 pages, US letter format).</li>
                        <li>Papers exceeding 5 pages incur overlength charges (70$/500¥ per page).</li>
                        <li>Visa and accommodation arrangements are NOT included in the registration fee.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h4 className="fw-semibold">For Authors or Presenters</h4>
                    <ol>
                        <li>Follow all steps provided in the notification email.</li>
                        <li>Email all required files to <a href="mailto:iscbi@chairmen.org">iscbi@chairmen.org</a> before the registration deadline.</li>
                        <li>Registration will be confirmed after verifying all documents.</li>
                    </ol>
                </section>

                <section className="mb-4">
                    <h4 className="fw-semibold">For Delegates</h4>
                    <p>
                        ISCBI welcomes delegates. Click the registration button to register online:
                        <br />
                        <a
                            className="mt-2"
                            href="https://your-registration-link.com" // Replace with actual delegate registration URL
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Delegate Registration Quick Access
                        </a>
                    </p>
                    <p>
                        After registration, email your order ID and email address to{" "}
                        <a href="mailto:iscbi@chairmen.org">iscbi@chairmen.org</a> to confirm your registration.
                    </p>
                    <p>
                        If no acknowledgment is received, kindly reach out via the same email.
                    </p>
                </section>


                <section className="mb-4">
                    <h4 className="fw-semibold">Registration Cancellation Policy</h4>
                    <ul>
                        <li>60+ days before: 70% refund</li>
                        <li>30–60 days before: 50% refund</li>
                        <li>&lt;30 days: No refund</li>
                    </ul>
                    <p>Requests must be made via email. No-shows will not be refunded.</p>
                    <p>The committee isn’t responsible for external issues (weather, health, visa, travel, etc.).</p>
                    <p><strong>Note:</strong> The committee reserves the right to alter the event date/location due to force majeure.</p>
                </section>

                <section>
                    <h4 className="fw-semibold">Security Precautions</h4>
                    <p>Macau is generally safe, but be cautious around transport hubs and public parks.</p>
                    <ul>
                        <li>Always wear your name/attendance card during the event.</li>
                        <li>Conference access is restricted without proper identification.</li>
                        <li>The committee is not liable for any personal loss or injury.</li>
                    </ul>
                    <p>Please arrange your own travel and health insurance.</p>
                </section>
            </div>
        </main>
    );
};

export default RegistrationScreen;
