import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import QuizCard from './QuizCard';

export default class ActiveQuiz extends Component {
  render () {
    const { title, questions, onCorrect, onIncorrect, toggleAnswer, showAnswer, index } = this.props;
    console.log(this.props)
    return (
      <View>
        <Text>Quiz is active</Text>
        <View>
          <Text>{questions.length - index} questions remain.</Text>
          <QuizCard question={questions[index].questions} answer={questions[index].answer} toggle={toggleAnswer} showAnswer={showAnswer} />
          <TouchableOpacity onPress={onCorrect}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onIncorrect}>
            <Text>onIncorect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}