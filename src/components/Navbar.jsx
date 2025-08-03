import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  const isCallForActive = ["/committees", "/program"].includes(location.pathname);
  const isCityActive = ["/venue", "/program"].includes(location.pathname); 

  return (
    <nav className="m-2 navbar navbar-expand-lg navbar-dark bg-glass bg-gradient shadow-sm py-3 sticky-top top-5" style={{top: "1rem", zIndex: 2000 }}>
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2" to="/">
          ICFCSAI 2025
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <NavLink exact="true" className="nav-link fw-semibold" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/speakers">
                Speakers
              </NavLink>
            </li>

            {/* Information Dropdown */}
            <li className={`nav-item dropdown ${isCallForActive ? "active" : ""}`}>
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#"
                id="callForDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Information
              </a>
              <ul className="dropdown-menu" aria-labelledby="callForDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/committees">
                    Committees
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/program">
                    Program
                  </NavLink>
                </li>
              </ul>
            </li>



            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/schedule">
                Schedule
              </NavLink>
            </li>

  {/* Information Dropdown */}
            <li className={`nav-item dropdown ${isCallForActive ? "active" : ""}`}>
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#"
                id="authorDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Author
              </a>
              <ul className="dropdown-menu" aria-labelledby="authorDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/call-for-papers">
                    Call for papers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/submission-instructions">
                  Submission Instructions
                  </NavLink>
                </li><li>
                  <NavLink className="dropdown-item" to="/publication-guidelines">
                  Publication Guidelines
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/registration">
                  Registration 
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* City Dropdown */}
            <li className={`nav-item dropdown ${isCityActive ? "active" : ""}`}>
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#"
                id="cityDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                City
              </a>
              <ul className="dropdown-menu" aria-labelledby="cityDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/venue">
                    Venue
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/travel">
                    Travel
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="navbar-nav d-flex flex-row gap-2">
            <li className="nav-item">
              <a className="nav-link text-white" href="https://www.youtube.com/@iet" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube fs-5"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="https://www.facebook.com/iet" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f fs-5"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="https://twitter.com/iet" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter fs-5"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="https://github.com/iet" target="_blank" rel="noreferrer">
                <i className="fab fa-github fs-5"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
