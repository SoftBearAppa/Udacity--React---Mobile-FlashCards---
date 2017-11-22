import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import QuizCard from './QuizCard';

export default class ActiveQuiz extends Component {
  render () {
    const { title, questions, onCorrect, onIncorrect, toggleAnswer, showAnswer, index } = this.props;
    return (
        <View style={style.container} >
          <Text style={style.questions} >{questions.length - index} Questions Remain.</Text>
          <QuizCard question={questions[index].questions} answer={questions[index].answer} toggle={toggleAnswer} showAnswer={showAnswer} />
          <TouchableOpacity onPress={onCorrect}>
            <Text style={style.button} >Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onIncorrect}>
            <Text style={style.button} >onIncorect</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  questions: {
    paddingTop: 10,
    fontSize: 15
  },
  button: {
    borderWidth: 1,
    padding: 10,
    margin: 15,
    borderRadius: 5,
    backgroundColor: '#95a5a6',
    alignItems: 'center'
  }
})