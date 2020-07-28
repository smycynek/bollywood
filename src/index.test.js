/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import CasualQuiz from 'react-casual-quiz/lib';
import { title, questions, results } from './quizData';

test('Renders component', () => {
  const quiz = render(<CasualQuiz
    title={title}
    results={results}
    questions={questions}
    showSource
  />);
  const quizTitle = quiz.getByText(title);
  expect(quizTitle).toBeInTheDocument();
});
