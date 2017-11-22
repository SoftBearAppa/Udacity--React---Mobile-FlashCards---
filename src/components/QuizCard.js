import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class QuizCard extends Component {
  render() {
    const { question, answer, toggle, showAnswer } = this.props;
    return (
      <View>
        {showAnswer ? (
          <View style={{ alignItems: 'center' }} > 
            <Text style={{ margin: 10, fontSize: 25}} >{answer}</Text>
            <TouchableOpacity style={{ padding: 5, margin: 10, borderWidth: 1, borderRadius: 5, backgroundColor: '#95a5a6' }} onPress={toggle}>
              <Text>Question</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ alignItems: 'center' }} >
            <Text style={{ margin: 10, fontSize: 25}} >{question}</Text>
              <TouchableOpacity style={{ padding: 5, margin: 10, borderWidth: 1, borderRadius: 5, backgroundColor: '#95a5a6' }} onPress={toggle}>
                <Text>Answer</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}