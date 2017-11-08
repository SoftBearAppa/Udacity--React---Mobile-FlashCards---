import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

class NewQuestionView extends Component {
  state = {
    question: '',
    answer: '',
  }

  render() {
    return (
      <View>
        <Text>New Question</Text>
      </View>
    )
  }
}

export default connect()(NewQuestionView)