import React, { useEffect } from "react";
import brochureImage from "../assets/ICFCSAI-2025 Brochure.jpg";

export default function WelcomeModal() {
    useEffect(() => {
        const lastSeenTime = localStorage.getItem("welcomeLastSeen");
        const now = Date.now();
        const oneHour = 60 * 60 * 1000;
        // Todo: Use For Testion
        // const oneHour = 1000; // milliseconds


        if (!lastSeenTime || now - parseInt(lastSeenTime, 10) > oneHour) {
            const modalEl = document.getElementById("welcomeModal");
            const modal = new window.bootstrap.Modal(modalEl, {
                keyboard: true,
                backdrop: false
            });
            modal.show();
            localStorage.setItem("welcomeLastSeen", now.toString());
        }
    }, []);

    return (
        <div
            className="modal fade"
            id="welcomeModal"
            tabIndex="-1"
            aria-labelledby="welcomeModalLabel"
            aria-hidden="true"
            style={{ zIndex: 2000 }}
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content border-0 rounded-4 overflow-hidden shadow-lg bg-glass">
                    <div className="position-relative">
                        <img
                            src={brochureImage}
                            alt="Welcome"
                            className="img-fluid h-100"
                            style={{
                                objectFit: "cover",
                                userSelect: "none",
                            }}
                        />
                        <button
                            type="button"
                            className="position-absolute top-0 end-0 m-3 p-2 rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            style={{
                                opacity: 0.75,
                                backdropFilter: "blur(4px)",
                                transition: "all 0.2s ease-in-out",
                                backgroundColor: "red",
                                color: "white",
                                fontSize: "2.0rem",
                                fontWeight: "bold",
                                border: "none",
                                width: "40px",
                                height: "40px",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
                        >
                            &times;
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
}
