import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cloud from "../../images/icons/cloud-upload-outline 1.png";
import "./OrderForm.css";
const OrderForm = () => {
  // let { serviceTitle } = useParams();
  // localStorage.setItem("link", serviceTitle);
  // if (!serviceTitle) {
  //   let serviceTitle = localStorage.getItem("link");
  // }
  const email = localStorage.getItem("email");
  const [order, setOrder] = useState({});
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    // fetch("https://asg-11-creative-agency-server-production.up.railway.app/oneService?serviceTitle=" + serviceTitle)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setDescription(data.service[0].serviceDescription);
    //   });
  }, []);
  const handleBlur = (e: any) => {
    const newOrder = { ...order };
    // newOrder[e.target.name] = e.target.value;
    setOrder(newOrder);
  };

  const handleFileChange = (e: any) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e: any) => {
    const formData = new FormData();
    // formData.append("file", file);
    // formData.append("name", order.name);
    // formData.append("email", email);
    // formData.append("serviceName", serviceTitle);
    // formData.append("projectDetails", description);
    // formData.append("price", order.price);
    formData.append("status", "Pending");
    console.log(formData);

    fetch("https://asg-11-creative-agency-server-production.up.railway.app/addOrder", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventdefault();
  };

  return (
    <div className="row">
      <div className="col-md-9">
        <form onSubmit={handleSubmit}>
          <div className="row form-class">
            <div className="col-md-12">
              <input
                type="text"
                placeholder="Your name / company's name"
                name="name"
                className="w-100 pl-4"
                onBlur={handleBlur}
                required
              ></input>
            </div>
            <div className="col-md-12">
              <input type="email" value={email ?? ""} name="email" className="w-100 pl-4"></input>
            </div>
            <div className="col-md-12">
              {/* <input type="text" value={serviceTitle} name="serviceName" className="w-100 pl-4"></input> */}
            </div>
            <div className="col-md-12">
              <textarea className="textArea w-100 pl-4" name="projectDetails" value={description}></textarea>
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Price" name="price" className="w-100 pl-4" onBlur={handleBlur} required></input>
            </div>
            <div className="col-md-6 upload-button-class">
              <input type="file" id="actual-btn" onChange={handleFileChange} hidden />
              <label htmlFor="actual-btn" className="d-flex justify-content-center">
                <img src={cloud} /> Upload image
              </label>
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

export default OrderForm;
