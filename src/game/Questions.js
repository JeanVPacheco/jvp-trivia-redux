import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchQuestions, selectEveryQuestion } from './gameSlice';
import SingleQuestions from './SingleQuestions';

export const Questions = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectEveryQuestion);

  const questionsStatus = useSelector((state) => state.game.status);
  const error = useSelector((state) => state.game.error);

  useEffect(() => {
    if (questionsStatus === 'idle') {
      dispatch(fetchQuestions());
    }
  }, [questionsStatus, dispatch]);

  let pageContent;

  if (questionsStatus === 'loading') {
    pageContent = <p>Carregando...</p>;
  } else if (questionsStatus === 'succeeded') {
    pageContent = questions.map((question) => (
      <SingleQuestions question={question} key={question.correct_answer} />
    ));
  } else if (questionsStatus === 'failed') {
    pageContent = <p>{error}</p>;
  }

  return (
    <>
      <h1>Jogo:</h1>
      {pageContent}
    </>
  );
};
