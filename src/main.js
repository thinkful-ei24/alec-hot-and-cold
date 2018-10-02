import React from 'react';

// import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import TopNav from './topNav';
import InfoSection from './info-section';
import GuessForm from './guess-form';
import Feedback from './feedback';


export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restartGame(){
    this.setState({
      guesses: [],
      feedback: 'Make your guess',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess){
    guess = parseInt(guess, 10);
    if(NaN(guess)){
      this.setState({ feedback: 'Please enter a valid number'});
      return;
    }
   const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
    feedback = 'You\'re Ice Cold...';
  } else if (difference >= 30) {
    feedback = 'You\'re Cold...';
  } else if (difference >= 10) {
    feedback = 'You\'re Warm.';
  } else if (difference >= 1) {
    feedback = 'You\'re Hot!';
  } else {
    feedback = 'You got it!';
  }
  this.setState({
    feedback,
    guesses: [...this.state.guesses, guess]
  });
}


render(){
  const feedback = this.state.feedback;
  const guesses = this.state.guesses;
  const guessCount = this.state.guesses.length;
  return (
    <div>
      <StatusSection guesses={guesses}/>
      <TopNav onRestartGame={() => this.restartGame()}  />
      <InfoSection/>
      <GuessForm/>
      <Feedback feedback={feedback} guessCount={guessCount} onMakeGuess={guess => this.makeGuess(guess)}/>
    </div>
  );
 }
} // end of class
