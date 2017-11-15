import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class QuizCard extends Component {
  render() {
    const { question, answer, toggle, showAnswer } = this.props;
    return (
      <View>
        {showAnswer ? (
          <View>
            <Text>{answer}</Text>
            <TouchableOpacity onPress={toggle}>
              <Text>Question</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text>{question}</Text>
              <TouchableOpacity onPress={toggle}>
                <Text>Answer</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}