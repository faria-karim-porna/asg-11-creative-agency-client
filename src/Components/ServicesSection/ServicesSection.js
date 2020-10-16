import React, { useEffect, useState } from 'react';
import ServiceSectionCard from '../ServiceSectionCard/ServiceSectionCard';
import './ServicesSection.css';
const ServicesSection = () => {
    const[services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://boiling-eyrie-70521.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, [services])
    return (
        <div className = "mr-auto ml-auto section-bg pt-5">
            <h1 className = "section-name">Provide awesome <span className = "special-section-name">services</span></h1>
            <div className = "row d-flex justify-content-around">
            {
               services.map(service =><ServiceSectionCard service = {service}></ServiceSectionCard>)
            } 
            </div>
        </div>
    );
};

export default ServicesSection;