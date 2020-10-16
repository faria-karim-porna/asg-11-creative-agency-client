import React from 'react';
import DataTableComponent from '../DataTableComponent/DataTableComponent';
import SideNav from '../SideNav/SideNav';
import './AdminDataList.css';
const AdminDataList = () => {
    const name = localStorage.getItem("name");
    return (
        <body>
        <SideNav></SideNav>
        <p className = "tablepageName">Service List<span className = "username">{name}</span></p>
        <div className = "mainTableArea">
        <div className = "table-design justify-content-center">
                <DataTableComponent></DataTableComponent>
                </div>
        </div>
    </body>
    );
};

export default AdminDataList;