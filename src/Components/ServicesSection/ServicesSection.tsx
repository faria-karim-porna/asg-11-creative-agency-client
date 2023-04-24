import React, { useEffect, useState } from "react";
import ServiceSectionCard from "../ServiceSectionCard/ServiceSectionCard";
import "./ServicesSection.css";
import { ServiceType } from "../../core/types/servicesType";
const ServicesSection = () => {
  const [services, setServices] = useState<ServiceType[]>([]);
  useEffect(() => {
    fetch("https://asg-11-creative-agency-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.allServices);
      });
  }, []);
  return (
    <div className="mr-auto ml-auto section-bg pt-5">
      <h1 className="section-name">
        Provide awesome <span className="special-section-name">services</span>
      </h1>
      <div className="row d-flex justify-content-around">
        {services.map((service) => (
          <ServiceSectionCard
            serviceTitle={service.serviceTitle}
            serviceDescription={service.serviceDescription}
            image={service.image}
          ></ServiceSectionCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
