import React from 'react';

export default function Feedback(props){
  const key = props.guessCount;
  let guessAgain;
  if(key !== 0){
    guessAgain = <span className="visuallyhidden">Guess again!</span>;
  }

  return (
    <h2
      key={key}
      id="feedback"
      aria-live="assertive"
      aria-atomic="true"
    >
    {props.feedback} {guessAgain}
    <p>"you have this many guesses " + {props.guessCount}</p>
    </h2>
  );
}
