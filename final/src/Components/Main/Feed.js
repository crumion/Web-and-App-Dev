import Parse from "parse/dist/parse.min.js";
import Navigation from "../../Services/Navigation.js";
export const Feed = () => {
  // State variables

  // asynchronous read function, queries to pull in every entry in the product class and display all of them at once. TODO in future version: make this the home page, make it display without having to hit the Read button
  async function read() {
    document.getElementById("All").innerHTML = "";
    const query = new Parse.Query("Bets");
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const postedBy = object.get("postedBy");
        const winningTeam = object.get("winningTeam").toUpperCase();
        const losingTeam = object.get("losingTeam").toUpperCase();
        const oppoBet = object.get("oppoBet");
        const objectId = object.id;
        console.log(postedBy);
        document.getElementById("All").innerHTML +=
          "<p> @" +
          postedBy +
          "</p><p> has " +
          winningTeam +
          " winning" +
          " vs " +
          losingTeam +
          "</p><p> Bet Amount: $" +
          oppoBet +
          "</p><p> Bet Reference Number: " +
          objectId +
          "</p><br/>";
      }
    } catch (error) {
      console.error("Error while fetching Bet - ", error);
    }
  }

  return (
    <div>
      <h1>Betty | Bet Feed </h1>
      <Navigation />
      <br />
      <button className="btn-third" onClick={read}>
        Display Feed
      </button>
      <div className="Fields">
        <p id="All"></p>
      </div>
    </div>
  );
};
