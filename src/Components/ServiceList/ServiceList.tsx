import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import SideNav from "../SideNav/SideNav";
import "./ServiceList.css";
const ServiceList = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const [personalService, setPersonalService] = useState([]);

  useEffect(() => {
    fetch("https://asg-11-creative-agency-server-production.up.railway.app/personalService?email=" + email)
      .then((res) => res.json())
      .then((data) => {
        setPersonalService(data.personal);
      });
  }, []);
  return (
    <body>
      <SideNav></SideNav>
      <p className="pageName">
        Service List <span className="username">{name}</span>
      </p>
      <div className="mainArea">
        <div className="row main-card pl-4">
          {personalService.map((service) => (
            <ServiceCard service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </body>
  );
};

export default ServiceList;
