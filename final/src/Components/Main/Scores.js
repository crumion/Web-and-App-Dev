import React from "react";
import { Link, Redirect } from "react-router-dom";
import "nba-api-client";
import { useScores } from "react-sports-hooks";
import Navigation from "../../Services/Navigation.js";
import { LogOutUser } from "../../Services/LogOut.js";

const Scores = () => {
  const { scores } = useScores("mlb", { updateIntervalSeconds: 500 });

  function displayScores() {
    document.getElementById("ScoreBox").innerHTML = "";

    for (var i in scores) {
      console.log(scores[i]);

      var name = scores[i].shortName;
      var awayTeam = scores[i].teams.awayTeam.displayName;
      var homeTeam = scores[i].teams.homeTeam.displayName;
      var awayTeamScore = scores[i].teams.awayTeam.score;
      var homeTeamScore = scores[i].teams.homeTeam.score;
      console.log(
        awayTeam + " " + awayTeamScore + " vs " + homeTeam + " " + homeTeamScore
      );

      document.getElementById("ScoreBox").innerHTML +=
        "<p> Game: " +
        name +
        "</p> " +
        awayTeam +
        " - " +
        awayTeamScore +
        "<p> " +
        homeTeam +
        " - " +
        homeTeamScore +
        "</p><br/>";
    }
  }

  return (
    <div>
      <h1> Betty | Scores </h1>
      <Navigation />
      <br />
      <button className="btn-third" onClick={displayScores}>
        Display Scores
      </button>
      <p id="ScoreBox"></p>
      <br />
      <br />
      <br />
      <br />
      <button className="btn-third" onClick={LogOutUser}>
        Log Me Out{" "}
      </button>
      <br />
      <br />
      <button className="btn-secondary">
        <Link to="/auth">Return to Authorization Page</Link>
      </button>
    </div>
  );
};

export default Scores;
