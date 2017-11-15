import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

class SingleDeckView extends Component {
  state = {
    timing: new Animated.Value(0)
  }

  componentDidMount() {
    const { timing } = this.state;
    Animated.timing(
      timing, {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }

  render() {
    console.log(this.props);
    const { timing } = this.state;
    const { navigate } = this.props.navigation;
    const { title } = this.props.navigation.state.params;
    const questions = this.props.decks[title].questions;
    return (
      <Animated.View style={{opacity: timing}} >
        <Text>{title}</Text>
        <Text>Cards: {questions.length}</Text>
        <TouchableOpacity onPress={() => navigate('NewQuestionView', {title, questions})} ><Text>Add Question</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('QuizView', { title, questions })} ><Text>Start Quiz</Text></TouchableOpacity>
      </Animated.View>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(SingleDeckView)