import React from "react";
import { Link } from "react-router-dom";

const index = (props) => {
  return (
    <header className="mb-5 pb-5">
      <nav className="navbar navbar-expand-lg navbar-light px-4">
        <div className="container py-3 border-bottom">
          <Link
            className="navbar-brand text-center text-uppercase mp-0 d-flex align-items-center"
            to="#"
          >
            <i className="fab fa-audible text-primary fa-2x me-3 fw-medium"></i>
            my dream travel blog
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav text-uppercase ms-auto">
              <li className="nav-item px-0 px-lg-4">
                <Link
                  className="nav-link text-center fw-medium"
                  aria-current="page"
                  to="#"
                >
                  work
                </Link>
              </li>
              <li className="nav-item px-0 px-lg-4">
                <Link className="nav-link text-center fw-medium" to="#">
                  about
                </Link>
              </li>
              <li className="nav-item px-0 px-lg-4">
                <Link
                  className="nav-link text-center fw-medium text-primary"
                  to="#"
                >
                  blog
                </Link>
              </li>
              <li className="nav-item px-0 px-lg-4">
                <Link className="nav-link text-center fw-medium" to="#">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default index;
