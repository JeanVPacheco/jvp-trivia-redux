import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header } from '../modules/Header';
import {
  fetchQuestions,
  resetGame,
  selectCurrentPlayer,
  selectCurrentScore,
  selectEveryQuestion
} from './gameSlice';
import { addToRanking } from './rankingSlice';
import SingleQuestion from './SingleQuestion';

export const Questions = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectEveryQuestion);

  const questionsStatus = useSelector((state) => state.game.status);
  const error = useSelector((state) => state.game.error);
  const username = useSelector(selectCurrentPlayer);
  const score = useSelector(selectCurrentScore);

  const [currentQ, setCurrentQ] = useState(0);
  const [disableB, setDisableB] = useState(true);

  useEffect(() => {
    if (questionsStatus === 'idle') {
      dispatch(resetGame());
      dispatch(fetchQuestions());
    }
  }, [questionsStatus, dispatch]);

  let pageContent;

  const setNextQuestion = () => {
    setCurrentQ((prevQ) => prevQ + 1);
    setDisableB((prev) => !prev);
  };

  const finishGame = () => {
    dispatch(addToRanking({ username, score }));
    dispatch(resetGame());
  };

  if (questionsStatus === 'loading') {
    pageContent = <p>Carregando...</p>;
  } else if (questionsStatus === 'succeeded') {
    pageContent = questions.map((question, i) => (
      <SingleQuestion question={question} key={i} disable={[disableB, setDisableB]} />
    ));
  } else if (questionsStatus === 'failed') {
    pageContent = <p>{error}</p>;
  }

  const nextQButton = (
    <button type="button" disabled={disableB} onClick={setNextQuestion} className="question-next">
      Next Question
    </button>
  );

  const finishGameButton = (
    <Link to="/ranking" className="finish-game">
      <button type="button" disabled={disableB} className="question-finish" onClick={finishGame}>
        Finish Game
      </button>
    </Link>
  );

  return (
    <div className="game-container">
      <Header />
      {questionsStatus === 'succeeded' ? pageContent[currentQ] : pageContent}
      <div className="game-bottom-buttons">
        {currentQ === questions.length - 1 ? finishGameButton : nextQButton}
      </div>
    </div>
  );
};
