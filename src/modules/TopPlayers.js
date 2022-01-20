import React from 'react';
import { useSelector } from 'react-redux';
import { selectTopPlayers } from '../game/rankingSlice';
import { Link } from 'react-router-dom';

const TopPlayers = () => {
  const playerCard = (player, i, length) => {
    const card = (
      <div className="ranking-card" key={i}>
        <h2>
          {i + 1}. {player.username}
        </h2>
        <h2>{player.score} points</h2>
        {i === length - 1 ? null : <hr />}
      </div>
    );
    return card;
  };

  const players = useSelector(selectTopPlayers);
  console.log(players);
  console.log(players.length);
  const content = players.map((p, i) => playerCard(p, i, players.length));
  return (
    // buscar informacao dos jogadores
    // fazer um componente pra cada jogador depois um map com info acima
    <div className="ranking-container">
      <h1>Top 5 Ranking</h1>
      {content}
      <Link to="/">
        <button type="button" className="login-button">
          Play again
        </button>
      </Link>
    </div>
    // retornar o top 5 ranking em ordem de pontos, depois alfabetica
  );
};

export default TopPlayers;
