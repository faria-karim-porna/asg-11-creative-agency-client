import React from "react";
import OrderForm from "../OrderForm/OrderForm";
import SideNav from "../SideNav/SideNav";
import "./Order.css";
const Order = () => {
  const name = localStorage.getItem("name");
  return (
    <>
      <p className="pageName">
        Order<span className="username">{name}</span>
      </p>
      <div className="mainArea">
        <OrderForm />
      </div>
    </>
  );
};

export default Order;
