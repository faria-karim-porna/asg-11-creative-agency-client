import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import SideNav from '../SideNav/SideNav';
import './Order.css';
const Order = () => {
    const name = localStorage.getItem("name");
    return (
        <body>
        <SideNav></SideNav>
        <p className = "pageName">Order<span className = "username">{name}</span></p>
        <div className = "mainArea">
            <OrderForm></OrderForm>
        </div>
    </body>
    );
};

export default Order;