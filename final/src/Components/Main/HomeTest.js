import React from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import { Feed } from "Feed.js";

// You must make sure to check this protected route even when manually typing in url
// or you can easily bypass the auth
const HomeyModule = () => {
  const { firstname, lastname } = useParams();
  return (
    <div>
      <h1>
        {" "}
        User: {firstname} {lastname}{" "}
      </h1>
      <Feed />
      <p>AUTHENTICATED: THIS IS HOMEY MODULE</p>
      <button>
        <Link to="/main">Go back.</Link>
      </button>
    </div>
  );
};

export default withRouter(HomeyModule);
