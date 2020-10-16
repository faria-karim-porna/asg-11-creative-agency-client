import React, { useEffect, useState } from 'react';
import ReviewSectionCard from '../ReviewSectionCard/ReviewSectionCard';
import './ReviewSection.css';
const ReviewSection = () => {
    const[reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://boiling-eyrie-70521.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    }, [reviews])
    return (
        <div className = "mr-auto ml-auto section-bg pt-5 review-section-bg">
            <h1 className = "section-name">Clients <span className = "special-section-name">Feedback</span></h1>
            <div className = "row d-flex justify-content-around">
            {
               reviews.map(review =><ReviewSectionCard review = {review}></ReviewSectionCard>)
            } 
            </div>
        </div>
    );
};

export default ReviewSection;