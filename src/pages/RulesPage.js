import React from 'react';
import { Header } from '../modules/Header';
import { Link } from 'react-router-dom';

const RulesPage = () => {
  return (
    <div className="game-container">
      <Header />
      <div className="rules-container">
        <h1>Rules:</h1>
        <ul>
          <li>
            <h2>
              You have 30 seconds to answer the questions. Once the timer runs out you won&apos;t
              score any points
            </h2>
          </li>
          <li>
            <h2>The score multiplier ranges from 1 to 3, according to the difficulty selected</h2>
          </li>
        </ul>
      </div>
      <div className="rules-button-container">
        <Link to="/game">
          <button type="button" className="login-button">
            Got it!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RulesPage;
