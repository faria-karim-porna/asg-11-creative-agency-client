import React from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import SideNav from '../SideNav/SideNav';
import './Review.css';
const Review = () => {
    const name = localStorage.getItem("name");
    return (
        <body>
            <SideNav></SideNav>
            <p className = "pageName">Review<span className = "username">{name}</span></p>
            <div className = "mainArea">
                <ReviewForm></ReviewForm>
            </div>
        </body>
    );
};

export default Review;