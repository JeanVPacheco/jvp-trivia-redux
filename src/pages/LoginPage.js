import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { usernameRegister } from '../game/gameSlice';

const LoginPage = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const usernameChange = (e) => setUsername(e.target.value);

  const canAdvance = Boolean(username);

  const startGame = () => {
    dispatch(usernameRegister({ username }));
  };

  return (
    <>
      <header>
        <h1>JVP Trivia Game</h1>
      </header>
      <h2>Enter your username</h2>
      <input type="text" onChange={usernameChange} name="username" value={username} id="username" />
      <Link to="/game">
        <button type="button" disabled={!canAdvance} onClick={startGame}>
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
