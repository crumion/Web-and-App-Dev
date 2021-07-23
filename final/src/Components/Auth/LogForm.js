import React from "react";
import { Link } from "react-router-dom";

const LogForm = ({ user, onChange, onSubmit }) => {
  return (
    <div>
      <h1> Betty | Login</h1>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
          <br/>
          <br/>
          <h5>Dont have an account?</h5>
          <button className = "btn-secondary">
            <Link to="/register">Link to Register</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogForm;
