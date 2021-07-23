import Parse from "parse/dist/parse.min.js";

// This page is used to LogOut users

export const LogOutUser = () => {
  var status = Parse.User.current();

  // Checks for status, the object for current user
  if (!status) {
    console.log("You are already logged out");
    console.log("isAuth is: " + sessionStorage.getItem("isAuth"));
  } else {
    console.log("You have just been logged out.");
    window.sessionStorage.setItem("isAuth", "false");
    Parse.User.logOut(status);
  }
  // Notification for successful log out

  alert("You've been logged out! Please click Return to Authorization Page.");
};
