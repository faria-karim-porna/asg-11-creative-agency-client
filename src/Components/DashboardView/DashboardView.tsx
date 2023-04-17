import React from "react";
import SideNav from "../SideNav/SideNav";
import { useAppSelector } from "../../core/redux/reduxStore";
import { shallowEqual } from "react-redux";
import { EnumView } from "../../core/enums/EnumView";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ServiceList from "../ServiceList/ServiceList";
import AddService from "../AddService/AddService";
import MainDashboard from "../MainDashboard/MainDashboard";
import AdminDataList from "../AdminDataList/AdminDataList";
import Order from "../Order/Order";
import Review from "../Review/Review";

export const DashboardView = () => {
  const store = useAppSelector(
    (state) => ({
      view: state.UI.view,
      isAdmin: state.UI.isAdmin,
      hasResponse: state.UI.hasResponse,
    }),
    shallowEqual
  );
  const DefaultView = store.isAdmin ? <AdminDataList /> : store.hasResponse ? <Order /> : null;
  return (
    <>
      <SideNav />
      {store.view === EnumView.ViewService ? (
        <AdminDataList />
      ) : store.view === EnumView.AddService ? (
        <AddService />
      ) : store.view === EnumView.AddAdmin ? (
        <MakeAdmin />
      ) : store.view === EnumView.AddOrder ? (
        <Order />
      ) : store.view === EnumView.PersonalService ? (
        <ServiceList />
      ) : store.view === EnumView.AddReview ? (
        <Review />
      ) : (
        DefaultView
      )}
    </>
  );
};
