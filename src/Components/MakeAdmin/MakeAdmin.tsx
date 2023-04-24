import React, { FocusEvent, useState } from "react";
import SideNav from "../SideNav/SideNav";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const name = localStorage.getItem("name");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    const newAdmin = {
      email: email,
    };
    fetch("https://asg-11-creative-agency-server.vercel.app/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });
  };
  return (
    <>
      <p className="pageName">
        Make Admin<span className="username">{name}</span>
      </p>
      <div className="mainArea">
        <div className="makeAdim-form-design justify-content-center">
          <div className="row form-area makeAdmincard">
            <div className="col-md-12">
              <p className="form-label">Email</p>
            </div>
            <div className="col-md-6">
              <input type="email" placeholder="jon@gamil.com" name="email" className="input-makeAdmin" onBlur={handleBlur}></input>
            </div>
            <div className="col-md-6">
              <div className="email-submit-btn">
                {" "}
                <button className="btn btn-success" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
            {message ? (
              <div className="d-flex justify-content-center">
                <div className="text-success font-weight-bold">{message}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
