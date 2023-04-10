import React, { useState } from "react";
import SideNav from "../SideNav/SideNav";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const name = localStorage.getItem("name");
  const [email, setEmail] = useState("");
  const handleBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    const newAdmin = {
      email: email,
    };
    fetch("https://asg-11-creative-agency-server-production.up.railway.app/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAdmin),
    }).then((res) => res.json());
    e.preventdefault();
  };
  return (
    <body>
      <SideNav></SideNav>
      <p className="pageName">
        Make Admin<span className="username">{name}</span>
      </p>
      <div className="mainArea">
        <div className="makeAdim-form-design justify-content-center">
          <form onSubmit={handleSubmit}>
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
                  <button className="btn btn-success" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default MakeAdmin;
