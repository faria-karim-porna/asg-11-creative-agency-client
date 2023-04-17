import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import Login, { LoginInterface } from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { LoginProvider } from "./Components/ContextHook/LoginContextProvider";
import { DashboardView } from "./Components/DashboardView/DashboardView";

export function App(props: any): JSX.Element {
  return (
    <LoginProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/:serviceTitle">
            <DashboardView />
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </LoginProvider>
  );
}

export default App;
