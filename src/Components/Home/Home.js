import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LogoSection from '../LogoSection/LogoSection';
import ReviewSection from '../ReviewSection/ReviewSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import Slider from '../Slider/Slider';
import './Home.css';
const Home = () => {
    return (
        <div className = "home">
            <Header></Header>
            <LogoSection></LogoSection>
            <ServicesSection></ServicesSection>
            <Slider></Slider>
            <ReviewSection></ReviewSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;