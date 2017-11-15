import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class QuizComplete extends Component {
  render() {
    const { correctQuestions, resetQuiz, navigation } = this.props;
    return(
      <View>
        <Text>Quiz is Completee</Text>
        <Text>You got {correctQuestions} correct!</Text>
        <TouchableOpacity onPress={ () => {
          resetQuiz();
          navigation.goBack('QuizView');
        }}>
          <Text>Reset Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.goBack(null);
        }}>
          <Text>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}