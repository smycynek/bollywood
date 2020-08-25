/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import CasualQuiz from 'react-casual-quiz/lib';
import * as serviceWorker from './serviceWorker';

import { name, questions, results } from './quizData';

ReactDOM.render(
  <React.StrictMode>
    <CasualQuiz
      name={name}
      results={results}
      questions={questions}
      showSource
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
