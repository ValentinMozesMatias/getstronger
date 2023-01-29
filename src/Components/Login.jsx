import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
  
    const handleLogin = (event) => {
      event.preventDefault();
      // validate form fields
      // call login API
      // if successful, redirect to home page
      history.push('../Home');
    };
  
    return (
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button type="submit">Login</button>
        </form>
        <br />
        <div>
          Don't have an account? <Link to="/create-account">Create one</Link>
        </div>
        <br />
        <div>
          <Link to="/">Go back to home page</Link>
        </div>
      </div>
    );
  }
  