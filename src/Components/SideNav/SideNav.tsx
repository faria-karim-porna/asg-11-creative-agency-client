import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
import logo from "../../images/logos/logo.png";
import order from "../../images/icons/order.png";
import serviceList from "../../images/icons/serviceList.png";
import review from "../../images/icons/review.png";
import plus from "../../images/icons/plus.png";
import makeAdmin from "../../images/icons/makeAdmin.png";
const SideNav = () => {
  let serviceTitle = localStorage.getItem("link");
  const [isAdmin, setIsAdmin] = useState(false);
  const email = localStorage.getItem("email");

  useEffect(() => {
    fetch("https://asg-11-creative-agency-server-production.up.railway.app/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  return (
    <div className="sidenav">
      <Link to="/">
        <a href="#about">
          <img src={logo} className="sideNav-logo" />
        </a>
      </Link>
      {isAdmin ? (
        <div>
          <Link to="/admin/serviceList">
            <a href="#order">
              <img src={serviceList} className="sideNav-icons" />
              <span className="sideNav-text">Service list</span>
            </a>
          </Link>
          <Link to="/admin/addService">
            <a href="#serviceList">
              <img src={plus} className="sideNav-icons" />
              <span className="sideNav-text">Add Service</span>
            </a>
          </Link>
          <Link to="/admin/makeAdmin">
            <a href="#serviceList">
              <img src={makeAdmin} className="sideNav-icons" />
              <span className="sideNav-text">Make Admin</span>
            </a>
          </Link>
        </div>
      ) : (
        <div>
          <Link to={`/dashboard/${serviceTitle}`}>
            <a href="#order">
              <img src={order} className="sideNav-icons" />
              <span className="sideNav-text">Order</span>
            </a>
          </Link>
          <Link to="/customer/serviceList">
            <a href="#serviceList">
              <img src={serviceList} className="sideNav-icons" />
              <span className="sideNav-text">Service List</span>
            </a>
          </Link>
          <Link to="/customer/review">
            <a href="#serviceList">
              <img src={review} className="sideNav-icons" />
              <span className="sideNav-text">Review</span>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideNav;
