import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');

  const usernameChange = (e) => setUsername(e.target.value);

  const canAdvance = Boolean(username);

  return (
    <>
      <header>
        <h1>JVP Trivia Game</h1>
      </header>
      <h2>Enter your username</h2>
      <input type="text" onChange={usernameChange} name="username" value={username} id="username" />
      <Link to="/game">
        <button type="button" disabled={!canAdvance}>
          Play!
        </button>
      </Link>
      <Link to="/settings">
        <button type="button">Settings</button>
      </Link>
    </>
  );
};

export default LoginPage;
