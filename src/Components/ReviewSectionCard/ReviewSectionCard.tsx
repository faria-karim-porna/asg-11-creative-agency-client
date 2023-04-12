import React from "react";
import "./ReviewSectionCard.css";
import { ReviewType } from "../../core/types/reviewsType";
const ReviewSectionCard = (props: ReviewType) => {
  const { name, designation, description, image } = props;
  return (
    <div className="col-md-3 pl-5 pr-5 pt-5 pb-5 review-card mr-2">
      <div className="row">
        <div className="col-md-3">
          <img src={image} className="img-fluid review-image" />
        </div>
        <div className="col-md-9">
          <p className="reviewer-name">{name}</p>
          <p className="designation">{designation}</p>
        </div>
        <div className="col-md-12">
          <p className="review">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSectionCard;
