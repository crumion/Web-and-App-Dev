import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import HomeyModule from "../Auth/Home";

const MainHome = () => {
  const [flag, setFlag] = useState(false);

  var checkAuth = sessionStorage.getItem("isAuth");
  var checkBool = checkAuth;
  checkBool = JSON.parse(checkBool);
  useEffect(() => {
    if (checkBool) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [checkBool, checkAuth]);

  return (
    <div>
      <ProtectedRoute
        exact
        path="/user/Michael/Wicks"
        flag={checkAuth}
        component={HomeyModule}
      />
    </div>
  );
};

export default MainHome;
