import React from "react";
import { Link } from "react-router-dom";
import "./ServiceSectionCard.css";
const ServiceSectionCard = ({ service }: any) => {
  return (
    <div className="col-md-3 pl-5 pr-5 pt-5 pb-5 mb-3 service-section-card mr-2">
      <Link to={`dashboard/${service.serviceTitle}`} className="link">
        <div className="d-flex justify-content-center mb-1">
          <img src={`data:image/png;base64,${service.image.img}`} className="img-fluid w-25" />
        </div>
        <div className="d-flex justify-content-center">
          <p className="text-center servive-name">{service.serviceTitle}</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="text-center service-description">{service.serviceDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceSectionCard;
