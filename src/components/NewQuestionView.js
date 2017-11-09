import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

class NewQuestionView extends Component {
  state = {
    question: '',
    answer: '',
  }

  render() {
    const { question, answer} = this.state;
    return (
      <View>
        <Text>New Question</Text>
        <KeyboardAvoidingView>
          <Text>Question:</Text>
          <TextInput value={question} onChangeText={question => this.setState({question})} placeholder={'Enter Question'} />
          <Text>Answer:</Text>
          <TextInput value={answer} onChangeText={answer => this.setState({answer})} placeholder={'Enter Answer to Question'} />
          <TouchableOpacity onPress={() => console.log(this.state)}>
            <Text>Submitt</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default connect()(NewQuestionView)