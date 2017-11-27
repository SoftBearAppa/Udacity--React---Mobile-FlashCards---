import React, { Component } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import { clearLocalNotifications, setLocalNotifications} from '../utils/api'

export default class QuizComplete extends Component {
  componentDidMount() {
    clearLocalNotifications()
  }
  render() {
    const { correctQuestions, resetQuiz, navigation, questionLength } = this.props;
    return(
      <View style={style.container} >
        <Text style={style.header} >Quiz is Complete!</Text>
        <Text style={style.score} >You got {correctQuestions} correct out of {questionLength}.</Text>
        <TouchableOpacity style={style.button} onPress={ () => {
          resetQuiz();
          navigation.goBack('QuizView');
        }}>
          <Text>Reset Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => {
          navigation.goBack(null);
        }}>
          <Text>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    margin: 10,
    fontSize: 30
  },
  score: {
    margin: 8,
    fontSize: 25
  },
  button: {
    borderWidth: 1,
    padding: 5,
    margin: 15,
    borderRadius: 5,
    backgroundColor: '#95a5a6',
  }
})