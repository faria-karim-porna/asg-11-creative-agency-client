import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import SideNav from "../SideNav/SideNav";
import "./ServiceList.css";
import { UserType } from "../../core/types/usersType";
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
    <>
      <p className="pageName">
        Service List <span className="username">{name}</span>
      </p>
      <div className="mainArea">
        <div className="row main-card pl-4">
          {personalService.map((service: UserType) => (
            <ServiceCard
              name={service.name}
              email={service.email}
              serviceName={service.serviceName}
              projectDetails={service.projectDetails}
              image={service.image}
              price={service.price}
              status={service.status}
            ></ServiceCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceList;
