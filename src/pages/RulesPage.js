import React from 'react';
import { Header } from '../modules/Header';
import { Link } from 'react-router-dom';

const RulesPage = () => {
  return (
    <div className="game-container">
      <Header />
      <h1>Rules:</h1>
      <ul>
        <li>
          You have 30 seconds to answer the questions, once the timer runs out you won&apos;t score
          any points
        </li>
        <li>The score multiplier ranges from 1 to 3, according to the difficulty selected</li>
      </ul>
      <Link to="/game">
        <button type="button" className="login-button">
          Got it!
        </button>
      </Link>
    </div>
  );
};

export default RulesPage;
