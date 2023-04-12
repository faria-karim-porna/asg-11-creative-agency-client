import React, { useEffect, useState } from "react";
import ReviewSectionCard from "../ReviewSectionCard/ReviewSectionCard";
import "./ReviewSection.css";
import { ReviewType } from "../../core/types/reviewsType";
const ReviewSection = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  useEffect(() => {
    fetch("https://asg-11-creative-agency-server-production.up.railway.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.allReviews);
      });
  }, []);
  return (
    <div className="mr-auto ml-auto section-bg pt-5 review-section-bg">
      <h1 className="section-name">
        Clients <span className="special-section-name">Feedback</span>
      </h1>
      <div className="row d-flex justify-content-around">
        {reviews.map((review) => (
          <ReviewSectionCard
            name={review.name}
            designation={review.designation}
            description={review.description}
            image={review.image}
          ></ReviewSectionCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
