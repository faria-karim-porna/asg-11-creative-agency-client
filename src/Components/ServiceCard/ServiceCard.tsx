import React, { useEffect, useState } from "react";
import "./ServiceCard.css";
import { UserType } from "../../core/types/usersType";
const ServiceCard = (props: UserType) => {
  const { name, email, serviceName, projectDetails, image, price, status } = props;
  const [serviceInfo, setServiceInfo] = useState([]);

  const statusStyle = (cStatus: string) => {
    let colors, background, borders;
    if (cStatus == "Pending") {
      colors = "#FF4545";
      background = "#FFE3E3";
      borders = "1px solid #FF4545";
    }
    if (cStatus == "On going") {
      colors = "#FFBD3E";
      background = "#fff4de";
      borders = "1px solid #FFBD3E";
    }
    if (cStatus == "Done") {
      colors = "green";
      background = "#C6FFE0";
      borders = "1px solid green";
    }
    const statusDesign = {
      color: colors,
      border: borders,
      padding: "3px",
      borderRadius: "5px",
      backgroundColor: background,
    };

    return statusDesign;
  };

  return (
    <div className="col-md-5 service-card">
      <div className="row">
        <div className="col-md-8">
          {image ? <img src={serviceInfo && `data:image/png;base64,${image.img}`} className="img-fluid w-25" /> : null}
        </div>
        <div className="col-md-4">
          <p className="status-style text-center" style={statusStyle(status)}>
            {status}
          </p>
        </div>
        <div className="col-md-12">
          <p className="title">{serviceName}</p>
        </div>
        <div className="col-md-12">
          <p className="course-description">{projectDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
