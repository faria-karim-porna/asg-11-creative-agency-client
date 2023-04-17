import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
import logo from "../../images/logos/logo.png";
import order from "../../images/icons/order.png";
import serviceList from "../../images/icons/serviceList.png";
import review from "../../images/icons/review.png";
import plus from "../../images/icons/plus.png";
import makeAdmin from "../../images/icons/makeAdmin.png";
import { useAppDispatch, useAppSelector } from "../../core/redux/reduxStore";
import { UIAction } from "../../core/redux/slices/UISlice";
import { EnumView } from "../../core/enums/EnumView";
import { shallowEqual } from "react-redux";
const SideNav = () => {
  let serviceTitle = localStorage.getItem("link");
  const store = useAppSelector(
    (state) => ({
      isAdmin: state.UI.isAdmin,
      hasResponse: state.UI.hasResponse,
    }),
    shallowEqual
  );
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const email = localStorage.getItem("email");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("isAdmin")) {
      dispatch(UIAction.setIsAdmin(localStorage.getItem("isAdmin") == "true" ? true : false));
      dispatch(UIAction.setHasResponse(true));
    }
  }, []);
  return (
    <div className="sidenav">
      <Link to="/">
        <a href="#about">
          <img src={logo} className="sideNav-logo" />
        </a>
      </Link>
      {store.isAdmin ? (
        <div>
          <div onClick={() => dispatch(UIAction.setPageView(EnumView.ViewService))}>
            <div className="sideNav-tab">
              <img src={serviceList} className="sideNav-icons" />
              <span className="sideNav-text">Service list</span>
            </div>
          </div>
          <div onClick={() => dispatch(UIAction.setPageView(EnumView.AddService))}>
            <div className="sideNav-tab">
              <img src={plus} className="sideNav-icons" />
              <span className="sideNav-text">Add Service</span>
            </div>
          </div>
          <div onClick={() => dispatch(UIAction.setPageView(EnumView.AddAdmin))}>
            <div className="sideNav-tab">
              <img src={makeAdmin} className="sideNav-icons" />
              <span className="sideNav-text">Make Admin</span>
            </div>
          </div>
        </div>
      ) : store.hasResponse ? (
        <div>
          <div onClick={() => dispatch(UIAction.setPageView(EnumView.AddOrder))}>
            <div className="sideNav-tab">
              <img src={order} className="sideNav-icons" />
              <span className="sideNav-text">Order</span>
            </div>
          </div>
          <div onClick={() => dispatch(UIAction.setPageView(EnumView.PersonalService))}>
            <div className="sideNav-tab">
              <img src={serviceList} className="sideNav-icons" />
              <span className="sideNav-text">Service List</span>
            </div>
          </div>
          <div onClick={() => dispatch(UIAction.setPageView(EnumView.AddReview))}>
            <div className="sideNav-tab">
              <img src={review} className="sideNav-icons" />
              <span className="sideNav-text">Review</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SideNav;
