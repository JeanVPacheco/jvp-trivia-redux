import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchQuestions, resetGame, selectEveryQuestion } from './gameSlice';
import SingleQuestion from './SingleQuestion';

export const Questions = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectEveryQuestion);

  const questionsStatus = useSelector((state) => state.game.status);
  const error = useSelector((state) => state.game.error);

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

  if (questionsStatus === 'loading') {
    pageContent = <p>Carregando...</p>;
  } else if (questionsStatus === 'succeeded') {
    pageContent = questions.map((question, i) => (
      <SingleQuestion question={question} key={i} disable={[disableB, setDisableB]} />
    ));
  } else if (questionsStatus === 'failed') {
    pageContent = <p>{error}</p>;
  }

  return (
    <>
      <h1>Jogo:</h1>
      {questionsStatus === 'succeeded' ? pageContent[currentQ] : pageContent}
      <button type="button" disabled={disableB} onClick={setNextQuestion}>
        Next Question
      </button>
    </>
  );
};
