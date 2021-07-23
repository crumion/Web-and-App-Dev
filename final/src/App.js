import "./styles.css";

import React from "react";
import Components from "./Components/Components.js";
import Parse from "parse/dist/parse.min.js";
import * as Env from "./environment.js";

// Parse intialization
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// The main App, calls components and starts the web app
const App = () => {
  return <Components />;
};

export default App;
