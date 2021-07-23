import { Link } from "react-router-dom";

// Navigation bar for each page
const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <Link to="/profile">Profile</Link>
        <Link to="/scores">Scores</Link>
        <Link to="/addBets">Add Custom Bet</Link>
        <Link to="/feed">Bet Feed</Link>
        <Link to="/betsearch">Bet Search</Link>
      </div>
    </div>
  );
};

export default Navigation;
