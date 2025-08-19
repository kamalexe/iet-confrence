import React from 'react';
import { Helmet } from 'react-helmet-async';
import registerQR from '../assets/register_qr.png';

const RegistrationScreen = () => {
    return (
        <main className="container py-5">
            {/* ✅ SEO Meta Tags */}
            <Helmet>
                <title>Registration | FCSAI-2025 Conference</title>
                <meta
                    name="description"
                    content="Register now for the International Conference on Future of Computer Science with AI (FCSAI-2025). View fee structure and scan QR code to complete registration."
                />
                <meta property="og:title" content="FCSAI-2025 Registration" />
                <meta
                    property="og:description"
                    content="Register for the FCSAI-2025 International Conference. Explore categories, fees, and deadlines."
                />
                <meta
                    property="og:image"
                    content="https://iet-confrence.vercel.app/banner.jpg"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://iet-confrence.vercel.app/registration" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="FCSAI-2025 Registration" />
                <meta
                    name="twitter:description"
                    content="Register now for the FCSAI-2025 Conference. Early bird discounts available!"
                />
                <meta
                    name="twitter:image"
                    content="https://iet-confrence.vercel.app/banner.jpg"
                />
            </Helmet>

            <div className="bg-glass p-5">
                <h1 className="mb-4">Registration Fee Structure</h1>

                <section className="mb-4">
                    <div className="table-responsive">
                        <div style={{borderRadius: '1rem',overflow: 'hidden'}}>
                            <table className="table table-glass text-center align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th>Sr. No</th>
                                        <th>Category</th>
                                        <th>Early Bird</th>
                                        <th>Late Registration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>UG Students</td>
                                        <td>₹500</td>
                                        <td>₹1000</td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>PG Students &amp; Research Scholars</td>
                                        <td>₹1000</td>
                                        <td>₹1500</td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>Faculty / Industrial Person</td>
                                        <td>₹2000</td>
                                        <td>₹2500</td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>International</td>
                                        <td>$50</td>
                                        <td>$60</td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>Person with Registered Participant</td>
                                        <td>₹500</td>
                                        <td>₹500</td>
                                    </tr>
                                    <tr>
                                        <td>6.</td>
                                        <td>Publication Charges<br /><small>(Max 8 Pages)</small></td>
                                        <td colSpan="2">₹1000</td>
                                    </tr>
                                    <tr>
                                        <td>7.</td>
                                        <td>Extra per Page Charge</td>
                                        <td>₹100 / page</td>
                                        <td>₹100 / page</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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


            </div>
        </main>
    );
};

export default RegistrationScreen;
