import React from "react";
import { Link, Redirect } from "react-router-dom";

// Checking to see if the user is already logged in or not
const AuthModule = () => {
  var start = window.sessionStorage.getItem("isAuth");

  if (start === "true") {
    var decision = 1;
  } else {
    var decision = 0;
  }

  return (
    <div>
      <h1>Betty | home</h1>
      {decision ? (
        <Redirect to={"/user/Michael/Wicks"} />
      ) : (
        <div className="navigation">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default AuthModule;
