import React, { FocusEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cloud from "../../images/icons/cloud-upload-outline 1.png";
import "./OrderForm.css";
type paramType = {
  serviceTitle: string;
};
const OrderForm = () => {
  const { serviceTitle } = useParams<paramType>();
  localStorage.setItem("link", serviceTitle);

  const email = localStorage.getItem("email");
  const [order, setOrder] = useState({ name: "", price: "", status: "Pending" });
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(
      "https://asg-11-creative-agency-server.vercel.app/oneService?serviceTitle=" +
        (serviceTitle ?? localStorage.getItem("link"))
    )
      .then((res) => res.json())
      .then((data) => {
        setDescription(data.service[0].serviceDescription);
      });
  }, []);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e: any) => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    if (email) {
      formData.append("email", email);
    }
    formData.append("name", order.name);
    formData.append("serviceName", serviceTitle);
    formData.append("projectDetails", description);
    formData.append("price", order.price);
    formData.append("status", order.status);
    console.log(formData.get("name"));

    fetch("https://asg-11-creative-agency-server.vercel.app/addOrder", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="row">
      <div className="col-md-9">
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
            <input type="email" value={email ?? ""} name="email" className="w-100 pl-4" disabled></input>
          </div>
          <div className="col-md-12">
            <input type="text" value={serviceTitle} name="serviceName" className="w-100 pl-4" disabled></input>
          </div>
          <div className="col-md-12">
            <textarea className="textArea w-100 pl-4" name="projectDetails" value={description} disabled></textarea>
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
            <button className="w-100 dark-button-class" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
        {message ? (
          <div className="d-flex justify-content-center">
            <div className="text-success font-weight-bold mt-2">{message}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default OrderForm;
