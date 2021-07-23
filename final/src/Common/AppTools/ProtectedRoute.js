import React from "react";
import { Redirect, useHistory } from "react-router-dom";

const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  const history = useHistory();

  // Usered to route users (auth)

  flag = JSON.parse(flag);

  flag = window.sessionStorage.getItem("isAuth");

  if (flag === "false") {
    var decision = 0;
  } else {
    var decision = 1;
  }

  //Check the
  return (
    <div>
      {decision ? (
        <Redirect to={rest.path} />
      ) : (
        <div>
          <Redirect to={"/BadBoy"} />
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;
