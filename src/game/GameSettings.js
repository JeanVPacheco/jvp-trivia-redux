import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeSettings, selectCurrentPlayer, selectGameSettings } from './gameSlice';

export const GameSettings = () => {
  const dispatch = useDispatch();
  const { difficulty, numberOfQ } = useSelector(selectGameSettings);

  const [gameDiff, setGameDiff] = useState(difficulty);
  const [gameNQ, setGameNQ] = useState(numberOfQ);

  const onDiffChange = (e) => setGameDiff(e.target.value);
  const onGameNQChange = (e) => setGameNQ(e.target.value);

  const canAdvance = Boolean(gameNQ) && Boolean(gameDiff);

  const difficulties = ['easy', 'medium', 'hard'];
  const qAmount = ['5', '7', '10'];

  const difficultyOptions = difficulties.map((d) => (
    <option key={d} value={d}>
      {d}
    </option>
  ));

  const qAmountOptions = qAmount.map((q) => (
    <option key={q} value={q}>
      {q}
    </option>
  ));

  const startGame = () => {
    dispatch(changeSettings({ gameDiff, gameNQ }));
  };

  const playAsButton = (
    <Link to="/game">
      <button type="button" disabled={!canAdvance} onClick={startGame}>
        {`Play as ${useSelector(selectCurrentPlayer)}`}
      </button>
    </Link>
  );

  return (
    <div>
      <h1>Settings</h1>
      <h2>Difficulty:</h2>
      <select id="diffSetting" value={gameDiff} onChange={onDiffChange}>
        <option value=""></option>
        {difficultyOptions}
      </select>
      <h2>Number of questions:</h2>
      <select id="qAmountSetting" value={gameNQ} onChange={onGameNQChange}>
        <option value=""></option>
        {qAmountOptions}
      </select>
      {useSelector(selectCurrentPlayer) ? playAsButton : null}
      <Link to="/">
        <button type="button" disabled={!canAdvance} onClick={startGame}>
          {useSelector(selectCurrentPlayer) ? 'Change player' : 'Back to homepage'}
        </button>
      </Link>
    </div>
  );
};

export default GameSettings;
