import React from 'react';
import carousel1 from '../../images/carousel-1.png';
import carousel2 from '../../images/carousel-2.png';
import carousel3 from '../../images/carousel-3.png';
import carousel4 from '../../images/carousel-4.png';
import carousel5 from '../../images/carousel-5.png';
import './Slider.css';
const Slider = () => {
    return (
        <div className = "dark-section-bg">
            <h1 className = "section-name"><span className = "slider-section-name">Here are some of </span><span className = "special-section-name">our works</span></h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" classn="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
        <div className="carousel-item active">
        <img className="mr-4 first-slide slides" src={carousel1} alt="First slide"/>
        <img className="slides mr-4" src={carousel2} alt="Second slide"/>
        <img className="slides" src={carousel3} alt="Third slide"/>
        </div>
        <div className="carousel-item">
        <img className="slides mr-4" src={carousel2} alt="First slide"/>
        <img className="slides mr-4" src={carousel3} alt="Second slide"/>
        <img className="slides mr-4" src={carousel4} alt="Third slide"/>
        <img className="slides mr-4" src={carousel5} alt="Third slide"/>
        </div>
        <div className="carousel-item">
        <img className="slides mr-4" src={carousel3} alt="First slide"/>
        <img className="slides mr-4" src={carousel4} alt="Second slide"/>
        <img className="slides mr-4" src={carousel5} alt="Third slide"/>
        <img className="slides mr-4" src={carousel1} alt="Third slide"/>
        </div>
        <div className="carousel-item">
        <img className="slides mr-4" src={carousel4} alt="First slide"/>
        <img className="slides mr-4" src={carousel5} alt="Second slide"/>
        <img className="slides mr-4" src={carousel1} alt="Third slide"/>
        <img className="slides mr-4" src={carousel2} alt="Third slide"/>
        </div>
        <div className="carousel-item">
        <img className="slides mr-4" src={carousel5} alt="First slide"/>
        <img className="slides mr-4" src={carousel1} alt="Second slide"/>
        <img className="slides mr-4" src={carousel2} alt="Third slide"/>
        <img className="slides mr-4" src={carousel3} alt="Third slide"/>
        </div>
  </div>
  
</div>
        </div>
    );
};

export default Slider;