import React, { useEffect, useState } from "react";
import { createUser } from "./AuthService";
import RegForm from "./RegForm";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

// This page is used to register the users

var start = window.sessionStorage.getItem("isAuth");
console.log("AuthRe says isAuth is: " + sessionStorage.getItem("isAuth"));
if (start === "true") {
  var decision = 1;
} else {
  var decision = 0;
}

const AuthRegister = () => {
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
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
        }
        // TODO: redirect user to main app
        setAdd(false);
      });
    }
  }, [newUser, add]);

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
  };

  return (
    <div>
      {decision ? (
        <Redirect to={"/user/Michael/Wicks"} />
      ) : (
        <div>
          <RegForm
            user={newUser}
            onChange={onChangeHandler}
            onSubmit={onSubmitHandler}
          />
          <br />

          <button className="btn-secondary">
            <Link to="/login">Link to Login</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthRegister;
