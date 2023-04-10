import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logos/logo.png";
const Navigation = () => {
  const history = useHistory();
  const email = localStorage.getItem("email");
  const signOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src={logo} className="img-fluid w-25" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-auto">
          <li className="nav-item active">
            <a className="nav-link mr-5" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="#">
              Our Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="#">
              Our Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="#">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="#">
              {!email ? (
                <Link to="/login" className="link">
                  <button className="btn btn-dark">Login</button>
                </Link>
              ) : (
                <button className="btn btn-dark" onClick={signOut}>
                  Log out
                </button>
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
