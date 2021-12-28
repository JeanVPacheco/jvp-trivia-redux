import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addPoints, selectCurrentDifficulty } from './gameSlice';
import shuffleArray from '../services/shuffle';
import { useIsMount } from '../services/isMount';

const SingleQuestion = ({ question, disable }) => {
  const correctAnswer = question.correct_answer;
  const incorrectAnswers = question.incorrect_answers;
  const everyAnswer = [correctAnswer, ...incorrectAnswers];

  const dispatch = useDispatch();
  const difficulty = useSelector(selectCurrentDifficulty);
  const isMount = useIsMount();

  const [disableB, setDisableB] = disable;

  useEffect(() => {
    isMount ? null : setDisableB((prev) => !prev);
  }, []);

  const checkAnswer = (a) => {
    if (a === correctAnswer) {
      let sumPoints = 1;
      switch (difficulty) {
        case 'easy':
          sumPoints = 1;
          break;
        case 'medium':
          sumPoints = sumPoints * 2;
          break;
        case 'hard':
          sumPoints = sumPoints * 3;
          break;
        default:
          break;
      }
      console.log(sumPoints);
      dispatch(addPoints({ sumPoints }));
    }
    setDisableB((prev) => !prev);
  };

  const answerOptions = shuffleArray(everyAnswer).map((a) => (
    <button type="button" key={a} disabled={!disableB} onClick={() => checkAnswer(a)}>
      {window.atob(a)}
    </button>
  ));

  return (
    <div>
      <h1>{window.atob(question.question)}</h1>
      <h2>Category: {window.atob(question.category)}</h2>
      {answerOptions}
    </div>
  );
};

SingleQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  disable: PropTypes.array.isRequired
};

export default SingleQuestion;
