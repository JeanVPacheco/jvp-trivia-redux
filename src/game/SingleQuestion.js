import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addPoints, selectCurrentDifficulty } from './gameSlice';
import shuffleArray from '../services/shuffle';
import { useIsMount } from '../services/isMount';
import { useTimer } from 'react-timer-hook';

const SingleQuestion = ({ question, disable }) => {
  const correctAnswer = question.correct_answer;
  const incorrectAnswers = question.incorrect_answers;
  const everyAnswer = [correctAnswer, ...incorrectAnswers];

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 30);

  const dispatch = useDispatch();
  const difficulty = useSelector(selectCurrentDifficulty);
  const isMount = useIsMount();
  const { seconds, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => checkAnswer('wrongAnswer')
  });
  const refAnswers = useRef(shuffleArray(everyAnswer));

  const [disableB, setDisableB] = disable;

  useEffect(() => {
    isMount ? null : setDisableB((prev) => !prev);
  }, []);

  const checkAnswer = (a) => {
    if (a === correctAnswer) {
      let sumPoints = 1;
      switch (difficulty) {
        case 'easy':
          sumPoints = 1 * seconds;
          break;
        case 'medium':
          sumPoints = sumPoints * 2 * seconds;
          break;
        case 'hard':
          sumPoints = sumPoints * 3 * seconds;
          break;
        default:
          break;
      }
      console.log(sumPoints);
      console.log(typeof seconds);
      dispatch(addPoints({ sumPoints }));
    }
    pause();
    setDisableB((prev) => !prev);
  };

  const answerOptions = refAnswers.current.map((a) => (
    <button type="button" key={a} disabled={!disableB} onClick={() => checkAnswer(a)}>
      {window.atob(a)}
    </button>
  ));

  return (
    <div>
      <h1>{window.atob(question.question)}</h1>
      <h2>Category: {window.atob(question.category)}</h2>
      {answerOptions}
      <h2>Timer: {seconds}</h2>
    </div>
  );
};

SingleQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  disable: PropTypes.array.isRequired
};

export default SingleQuestion;
