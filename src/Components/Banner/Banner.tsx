import React from "react";
import bgImage from "../../images/logos/Frame.png";
import "./Banner.css";
const Banner = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1 banner-text">
        <h1 style={{ color: "#3A4256" }} className="banner-title">
          Let’s Grow Your <br />
          Brand To The <br />
          Next Level
        </h1>
        <p className="text-dark banner-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat{" "}
        </p>
        <button className="btn btn-dark w-50">Hire us</button>
      </div>
      <div className="col-md-6 banner-image">
        <img src={bgImage} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default Banner;
