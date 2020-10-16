import React from 'react';
import slack from '../../images/logos/slack.png';
import airbnb from '../../images/logos/airbnb.png';
import google from '../../images/logos/google.png';
import netflix from '../../images/logos/netflix.png';
import uber from '../../images/logos/uber.png';
import './LogoSection.css';
const LogoSection = () => {
    return (
        <div>
            <div className = "transform"></div>
            <div className = "row pl-5 pr-2">
            <div className = "col">
                <img src ={slack} className = "img-fluid w-75 mt-4"/>
            </div>
            <div className = "col">
                <img src ={google}  className = "img-fluid w-75 mt-4"/>
            </div>
            <div className = "col">
                <img src ={uber}  className = "img-fluid w-75"/>
            </div>
            <div className = "col">
                <img src ={netflix} className = "img-fluid w-75"/>
            </div>
            <div className = "col">
                <img src ={airbnb} className = "img-fluid w-75 mt-4"/>
            </div>
        </div>
        </div>
    );
};

export default LogoSection;