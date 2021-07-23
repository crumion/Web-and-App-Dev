import React from "react";
import Parse from "parse/dist/parse.min.js";
import Navigation from "../../Services/Navigation.js";
import { Redirect, withRouter } from "react-router-dom";

const BetComp = () => {
  // State variables

  var flag = window.sessionStorage.getItem("isAuth");

  var decision;
  if (flag === "true") {
    decision = 1;
  } else {
    decision = 0;
  }
  //very similar function to the add function found in Profile.js, Personcomponent.js, as we needed several similar setters.
  async function addBet() {
    try {
      // create a new Parse Object instance
      var inputVal1 = document.getElementById("newPostedBy").value;
      document.getElementById("p1").innerHTML = "Username: " + inputVal1;
      var inputVal2 = document.getElementById("newWinningTeam").value;
      document.getElementById("p2").innerHTML = "Winning Team: " + inputVal2;
      var inputVal3 = document.getElementById("newLosingTeam").value;
      document.getElementById("p3").innerHTML = "Losing Team: " + inputVal3;
      var inputVal4 = document.getElementById("newOppoBet").value;
      document.getElementById("p4").innerHTML = "Bet Amount: $" + inputVal4;
      const Bets = new Parse.Object("Bets");
      // define the attributes you want for your Object
      Bets.set("postedBy", inputVal1);
      Bets.set("winningTeam", inputVal2);
      Bets.set("losingTeam", inputVal3);
      Bets.set("oppoBet", inputVal4);
      // save it on Back4App Data Store
      await Bets.save();
      alert("Bet saved!");
    } catch (error) {
      console.log("Error saving new bet: ", error);
    }
  }
  //TODO in later version - add confirmation button before submitting to B4A. Not a deliverable for F6.
  //returns functional output to the user through the use of .innerHTML
  return (
    <div>
      {decision ? <Redirect to={"/addBets"} /> : <Redirect to={"/BadBoy"} />}

      <h1>Betty | Add New Bet</h1>
      <Navigation />
      <h3>Enter Custom Bet</h3>
      <p>Feeling lucky?</p>

      <div className="PostedByBox">
        <input
          className="form-control"
          type="text"
          placeholder="Posted by..."
          id="newPostedBy"
        />
      </div>
      <br />
      <div className="WinningTeamBox">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Winning Team..."
          id="newWinningTeam"
        />
        <br />
      </div>
      <br />
      <div className="LosingTeamBox">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Losing Team..."
          id="newLosingTeam"
        />
      </div>
      <br />
      <div className="OppoBetBox">
        <input
          className="form-control"
          type="text"
          placeholder="Enter wager..."
          id="newOppoBet"
        />
      </div>
      <br />
      <button onClick={addBet}>Add Custom Bet</button>
      <hr></hr>
      <p id="p1"></p>
      <p id="p2"></p>
      <p id="p3"></p>
      <p id="p4"></p>
    </div>
  );
};
export default withRouter(BetComp);
