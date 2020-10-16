import React, { useEffect, useState } from 'react';
import './ServiceCard.css';
const ServiceCard = ({service}) => {
    
    const [serviceInfo, setServiceInfo] = useState([]);
    const serviceTitle = service.serviceName;
    useEffect(() => {
        fetch('https://boiling-eyrie-70521.herokuapp.com/serviceInfo?serviceTitle='+serviceTitle)
        .then(res => res.json())
        .then(data => setServiceInfo(data[0]))
    },[serviceInfo]);
    const image = serviceInfo.image;
    console.log(image);

    let status = service.status;
    let colors,background,borders;
    if (status == "Pending")
    {
        colors = "#FF4545";
        background = "#FFE3E3";
        borders = "1px solid #FF4545";
    }
    if (status == "On going")
    {
        colors = "#FFBD3E";
        background = "#fff4de";
        borders = "1px solid #FFBD3E";
    }
    if (status == "Done")
    {
        colors = "green";
        background = "#C6FFE0";
        borders = "1px solid green";
    }
    const statusStyle = {
        color: colors,
        border: borders,
        textAlign: "center",
        padding: "3px",
        borderRadius: "5px",
        backgroundColor: background,
    }

    return (

            <div className = "col-md-5 service-card">
                
                <div className = "row">
                    <div className = "col-md-8">
                        {image && <img  src = {serviceInfo && `data:image/png;base64,${serviceInfo.image.img}`} className = "img-fluid w-25"/>}
                    </div>
                    <div className = "col-md-4">
                        <p style ={statusStyle} className = "status-style">{service.status}</p>
                    </div>
                    <div className = "col-md-12">
                        <p className = "title">{service.serviceName}</p>
                    </div>
                    <div className = "col-md-12">
                        <p className = "course-description">{service.projectDetails}</p>
                    </div>
                </div>
            </div>
    );
};

export default ServiceCard;