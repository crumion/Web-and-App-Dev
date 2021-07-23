import React, { useEffect, useState } from "react";
import { checkUser } from "./LogService";
import LogForm from "./LogForm";
import { Redirect, useHistory } from "react-router-dom";
import MainHome from "../Main/MainHome";

// This pageis used to login the users
var start = window.sessionStorage.getItem("isAuth");
console.log("AuthLogin says isAuth is: " + sessionStorage.getItem("isAuth"));
if (start === "true") {
  var decision = 1;
} else {
  var decision = 0;
}
console.log("therefore, decision is: " + decision);

const AuthLogin = () => {
  const history = useHistory();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && add) {
      checkUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(`${userCreated.get("firstName")}, you successfully logged in!`);
          history.push("/home");
        }
        // TODO: redirect user to main app
        setAdd(false);
        history.push("/home");
      });
    }
  }, [newUser, add, history]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
    //history.push("/home");
  };

  return (
    <div>
      {decision ? (
        <Redirect to={"/user/Michael/Wicks"} />
      ) : (
        <div>
          <LogForm
            user={newUser}
            onChange={onChangeHandler}
            onSubmit={onSubmitHandler}
          />
        </div>
      )}
    </div>
  );
};

export default AuthLogin;
