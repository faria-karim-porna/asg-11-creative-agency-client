import React from "react";
import "./ReviewSectionCard.css";
const ReviewSectionCard = ({ review }) => {
  return (
    <div className="col-md-3 pl-5 pr-5 pt-5 pb-5 review-card mr-2">
      <div className="row">
        <div className="col-md-3">
          <img src={review.image} className="img-fluid review-image" />
        </div>
        <div className="col-md-9">
          <p className="reviewer-name">{review.name}</p>
          <p className="designation">{review.designation}</p>
        </div>
        <div className="col-md-12">
          <p className="review">{review.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSectionCard;
