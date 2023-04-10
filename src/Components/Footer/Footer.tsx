import React from "react";
import bgImage from "../../images/logos/Frame.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-bg">
      <main style={{ height: "500px" }} className="row d-flex align-items-center">
        <div className="col-md-5 offset-md-1 footer-text">
          <h1 style={{ color: "#3A4256" }} className="banner-title">
            Let us handle your <br />
            project, professionally.
          </h1>
          <p className="text-dark banner-subtitle">
            With well written codes, we build amazing apps for all <br />
            platforms, mobile and web apps in general.
          </p>
        </div>
        <div className="col-md-6 footer-form">
          <form>
            <input type="text" placeholder="Your email address" className="w-75" />
            <input type="text" placeholder="Your name / company’s name" className="w-75" />
            <textarea placeholder="Your message" className="w-75 message" />
          </form>
          <button className="btn btn-dark w-20">Send</button>
        </div>
        <p className="copyright-text">copyright Orange labs 2020</p>
      </main>
    </div>
  );
};

export default Footer;
