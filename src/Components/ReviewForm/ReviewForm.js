import React, { useState } from "react";
import "./ReviewForm.css";
const ReviewForm = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const img = localStorage.getItem("photo");
  const handleBlur = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
    if (e.target.name == "designation") {
      setDesignation(e.target.value);
    }
    if (e.target.name == "description") {
      setDescription(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    const newReview = {
      name: name,
      image: img,
      designation: designation,
      description: description,
    };
    fetch("https://asg-11-creative-agency-server-production.up.railway.app/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    }).then((res) => res.json());
    e.preventdefault();
  };
  return (
    <div className="row">
      <div className="col-md-9">
        <form onSubmit={handleSubmit}>
          <div className="row form-class">
            <div className="col-md-12">
              <input type="text" placeholder="Your name" name="name" className="w-100" onBlur={handleBlur} required></input>
            </div>
            <div className="col-md-12">
              <input
                type="text"
                placeholder="Company's name Designation"
                name="designation"
                className="w-100"
                onBlur={handleBlur}
                required
              ></input>
            </div>
            <div className="col-md-12">
              <textarea className="textArea w-100" name="description" placeholder="Description" onBlur={handleBlur} required></textarea>
            </div>
            <div className="col-md-4">
              <button className="w-100 dark-button-class" type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
