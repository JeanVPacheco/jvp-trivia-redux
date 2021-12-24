import React from 'react';
import PropTypes from 'prop-types';

const SingleQuestions = ({ question }) => {
  return (
    <div>
      <h1>{question.question}</h1>
      <p>Questao</p>
    </div>
  );
};

SingleQuestions.propTypes = {
  question: PropTypes.object.isRequired
};

export default SingleQuestions;
