import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

class SingleDeckView extends Component {
  render() {
    console.log(this.props);
    const { navigate } = this.props.navigation;
    const { title } = this.props.navigation.state.params;
    const questions = this.props.decks[title].questions;
    return (
      <View>
        <Text>{title}</Text>
        <Text>Cards: {questions.length}</Text>
        <TouchableOpacity onPress={() => navigate('NewQuestionView', {title, questions})} ><Text>Add Question</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('QuizView', { title, questions })} ><Text>Start Quiz</Text></TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(SingleDeckView)