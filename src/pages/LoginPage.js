import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { usernameRegister } from '../game/gameSlice';
import lightbulb from '../images/light-bulb.svg';

const LoginPage = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const usernameChange = (e) => setUsername(e.target.value);

  const canAdvance = Boolean(username);

  const startGame = () => {
    dispatch(usernameRegister({ username }));
  };

  return (
    <div className="game-container">
      <header className="logo-container">
        <img src={lightbulb} className="lightbulb-image" />
        <h1 className="game-logo">JVP Trivia</h1>
      </header>
      <div className="login-settings-container">
        <div className="login-settings-module">
          <h2>Choose your username</h2>
          <input
            type="text"
            onChange={usernameChange}
            name="username"
            value={username}
            id="username"
            className="login-input"
          />
        </div>
        <div className="login-settings-module">
          <Link to="/game">
            <button
              type="button"
              disabled={!canAdvance}
              onClick={startGame}
              className="login-button">
              Play!
            </button>
          </Link>
          <Link to="/settings">
            <button type="button" className="login-button">
              Settings
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="login-button">
              Ranking
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
