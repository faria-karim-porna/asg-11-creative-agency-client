import React, { useState } from "react";
import { useContext } from "react";
// import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut } from "./loginManager";
import gmailLogo from "../../images/logos/googleColor.png";
import logo from "../../images/logos/logo.png";
import "./Login.css";
// import { UserContext } from "../ContextHook/UserContextProvider";

type LocationState = {
  from: {
    pathname: string;
  };
};
export interface LoginInterface {
  isSignedIn: boolean;
  name: string;
  email: string;
  password: string;
  photo: string;
  error?: string;
  success?: boolean;
}

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState<LoginInterface>({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  initializeLoginFramework();

  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state ? (location.state as LocationState) : { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };

  const handleResponse = (res: LoginInterface, redirect: boolean) => {
    setUser(res);
    // setLoggedInUser(res);
    localStorage.setItem("name", res.name);
    localStorage.setItem("email", res.email);
    localStorage.setItem("photo", res.photo);
    if (redirect) {
      history.replace(from);
    }
  };

  return (
    <div>
      <Link to="/home">
        <div className="w-100 d-flex justify-content-center mt-4">
          <img src={logo} className="logoHeader" />
        </div>
      </Link>
      <div className="login-form">
        <form>
          <p className="form-text login-headline">Login With</p>

          <div className="social-btn" onClick={googleSignIn}>
            <img src={gmailLogo} className="icons" />
            <span className="text">Continue with Google</span>
          </div>

          <div className="form-text">
            Don't have an account?{" "}
            <a href="#" onClick={googleSignIn}>
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
