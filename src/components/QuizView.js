import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ActiveQuiz from './ActiveQuiz';
import QuizComplete from './QuizComplete';

class QuizView extends Component {
  state = {
    index: 0,
    correctQuestions: 0,
    showAnswer: false
  }

  onCorrect = () => {
    const { index, correctQuestions } = this.state;

    this.setState({ index: index + 1, correctQuestions: correctQuestions + 1, showAnswer: false});
  }

  onIncorrect = () => {
    const { index } = this.state;

    this.setState({ index: index + 1,
    showAnswer: false});
  }

  toggleAnswer = () => {
    const { showAnswer } = this.state;

    this.setState({ showAnswer: !showAnswer});
  }

  resetQuiz = () => {
    const { index, correctQuestions } = this.state;

    this.setState({ index: 0, correctQuestions: 0});
  }

  render() {
    const {index, correctQuestions, showAnswer} = this.state;
    const { title, questions } = this.props.navigation.state.params;
    return (
      <View>
        { index < questions.length ? (
          <ActiveQuiz title={title} questions={questions} onCorrect={this.onCorrect} onIncorrect={this.onIncorrect} toggleAnswer={this.toggleAnswer} showAnswer={showAnswer} index={this.state.index} />
        ) : (
            <QuizComplete correctQuestions={correctQuestions} resetQuiz={this.resetQuiz} navigation={this.props.navigation} />
        )}
      </View>
    )
  }
}

export default QuizView