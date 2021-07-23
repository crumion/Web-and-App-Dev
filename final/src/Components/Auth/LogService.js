import Parse from "parse/dist/parse.min.js";

// used in auth register component
export const checkUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("password", newUser.password);

  return user
    .logIn()
    .then((newLoginSuccess) => {
      sessionStorage.setItem("isAuth", user.authenticated());
      var flag = window.sessionStorage.getItem("isAuth");

      return newLoginSuccess;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
      sessionStorage.setItem("isAuth", user.authenticated());
      var flag = window.sessionStorage.getItem("isAuth");
    });
};
