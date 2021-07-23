import Parse from "parse/dist/parse.min.js";
import React from "react";
import Navigation from "./Navigation";

const BetSearch = () => {
  async function read() {
    var inputVal1 = document.getElementById("ReadName").value;
    const Bet = Parse.Object.extend("Bets");
    const query = new Parse.Query(Bet);
    query.equalTo("objectId", inputVal1);
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const postedBy = object.get("postedBy");
        const winningTeam = object.get("winningTeam");
        const losingTeam = object.get("losingTeam");
        const oppoBet = object.get("oppoBet");

        document.getElementById("PpostedBy").innerHTML = "@" + postedBy;
        document.getElementById("PwinningTeam").innerHTML =
          "Winning Team: " + winningTeam;
        document.getElementById("PlosingTeam").innerHTML =
          "Losing Team: " + losingTeam;
        document.getElementById("PoppoBet").innerHTML =
          "Opposing Bet: $" + oppoBet + " on " + winningTeam;

        alert("Success! Bet accepted. Game on!");
      }
    } catch (error) {
      console.error("Error while fetching Person", error);
    }
  }

  return (
    <div>
      <h1>Betty | Bet Search</h1>
      <Navigation />
      <br />
      <div className="ReadNameBox">
        <h3>Enter the ID </h3>
        <input
          className="form-control"
          type="text"
          placeholder="Bet ID"
          id="ReadName"
        />
      </div>
      <br />
      <button className="btn-third" onClick={read}>
        Search by Name
      </button>
      <div className="Fields">
        <p id="PpostedBy"></p>
        <p id="PwinningTeam"></p>
        <p id="PlosingTeam"></p>
        <p id="PoppoBet"></p>
      </div>
    </div>
  );
};
export default BetSearch;
