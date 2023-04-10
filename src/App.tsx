import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Review from "./Components/Review/Review";
import ServiceList from "./Components/ServiceList/ServiceList";
import Home from "./Components/Home/Home";
import AddService from "./Components/AddService/AddService";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import Login, { LoginInterface } from "./Components/Login/Login";
import MainDashboard from "./Components/MainDashboard/MainDashboard";
import Order from "./Components/Order/Order";
import AdminDataList from "./Components/AdminDataList/AdminDataList";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { UserContext } from "./Components/ContextHook/UserContextProvider";

export function App(props: any): JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  return (
    // <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/:serviceTitle">
            <MainDashboard></MainDashboard>
          </PrivateRoute>
          <Route path="/customer/order">
            <Order></Order>
          </Route>
          <Route path="/customer/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/customer/review">
            <Review></Review>
          </Route>
          <Route path="/admin/serviceList">
            <AdminDataList></AdminDataList>
          </Route>
          <Route path="/admin/addService">
            <AddService></AddService>
          </Route>
          <Route path="/admin/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    // </UserContext.Provider>
  );
}

export default App;
