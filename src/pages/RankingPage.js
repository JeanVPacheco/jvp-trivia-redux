import React from 'react';
import TopPlayers from '../modules/TopPlayers';
import { Header } from '../modules/Header';

const RankingPage = () => {
  return (
    <div className="game-container">
      <Header />
      <TopPlayers />
    </div>
  );
};

export default RankingPage;
