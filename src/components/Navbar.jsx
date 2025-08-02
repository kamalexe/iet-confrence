import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-glass bg-gradient shadow-sm py-3 sticky-top"
      style={{ zIndex: 2000 }}
    >
      <div className="container">
        {/* Brand Logo */}
        <NavLink className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="Logo" height="40" />
          IET Conference
        </NavLink>

        {/* Toggler for mobile view */}
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

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left side links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <NavLink exact="true" className="nav-link fw-semibold" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/schedule">
                Schedule
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/speakers">
                Speakers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/venue">
                Venue
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right side social icons */}
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
