import React from "react";
import { Link, useParams, withRouter } from "react-router-dom";

//This is the page you see when you are not logged in and you try to access something that you shouldn't
const BadBoy = () => {
  const { firstname, lastname } = useParams();
  return (
    <div>
      <h1>
        {" "}
        User: {firstname} {lastname}{" "}
      </h1>
      <p>Kicked, you don't belong here</p>
      <button>
        <Link to="/main">Go back.</Link>
      </button>
    </div>
  );
};

export default withRouter(BadBoy);
