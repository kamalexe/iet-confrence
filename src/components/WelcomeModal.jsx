import React, { useEffect } from "react";
import brochureImage from "../assets/ICFCSAI-2025 Brochure.jpg";

export default function WelcomeModal() {
    useEffect(() => {
        const lastSeenTime = localStorage.getItem("welcomeLastSeen");
        const now = Date.now();
        // const oneHour = 60 * 60 * 1000; // milliseconds
        const oneHour =  1000; // milliseconds

      
        if (!lastSeenTime || now - parseInt(lastSeenTime, 10) > oneHour) {
          const modalEl = document.getElementById("welcomeModal");
          const modal = new window.bootstrap.Modal(modalEl);
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
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0">
            <img
              src={brochureImage}
              alt="Welcome"
              className="img-fluid"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
