import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import MainHome from "./Main/MainHome";
import AddGood from "./Main/MainGood";
import BadBoy from "./Main/BadPage";
import Scores from "./Main/Scores";
import BetComp from "./Main/NewBet.js";
import { Feed } from "./Main/Feed.js";
import BetSearch from "../Services/BetSearch.js";

// Components
const Components = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" exact component={AuthModule} />
        <Route path="/register" component={AuthRegister} />
        <Route path="/login" component={AuthLogin} />
        <Route path="/home" component={MainHome} />
        <Route path="/BadBoy" component={BadBoy} />
        <Route path="/user/:firstname/:lastname" component={AddGood} />
        <Route path="/scores" component={Scores} />
        <Route path="/addBets" component={BetComp} />
        <Route path="/betsearch" component={BetSearch} />
        <Route path="/feed" component={Feed} />
        {/* <Route path="/login" component={AuthLogin} />
        <Route path="/main" component={MainModule} /> */}
        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
};

export default Components;
