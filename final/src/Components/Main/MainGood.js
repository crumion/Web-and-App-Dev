import React from "react";
import { useParams, withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Navigation from "../../Services/Navigation.js";

//This is the dashboard page for when you are authenticated. Future versions will display a user's currently active bets here.
const AddGood = () => {
  const { firstname, lastname } = useParams();
  var flag = window.sessionStorage.getItem("isAuth");

  if (flag == null) {
    flag = "false";
  }

  var decision;
  if (flag === "false") {
    decision = 0;
  } else {
    decision = 1;
  }
  return (
    <div>
      {decision ? (
        <Redirect to={"/user/Michael/Wicks"} />
      ) : (
        <Redirect to={"/BadBoy"} />
      )}
      <h1>Dashboard: Home</h1>
      <Navigation />
    </div>
  );
};

export default withRouter(AddGood);
