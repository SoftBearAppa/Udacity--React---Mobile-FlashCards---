import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

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
    const { navigation } = this.props;
    const { timing } = this.state;
    const { navigate } = this.props.navigation;
    const { title } = this.props.navigation.state.params;
    const questions = this.props.decks[title].questions;
    return (
      <Animated.View style={{opacity: timing, alignItems: 'center'}} >
        <Text style= {style.deckTitle} >{title}</Text>
        <Text style= {style.cards} >Cards: {questions.length}</Text>
        <TouchableOpacity style={style.button} onPress={() => navigate('NewQuestionView', {title, questions})} ><Text>Add Question</Text></TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => navigate('QuizView', { title, questions })} ><Text>Start Quiz</Text></TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => navigation.goBack(null)} ><Text>Back</Text></TouchableOpacity>
      </Animated.View>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

const style = StyleSheet.create({
  deckTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  cards: {
    marginTop: 8
  },
  button: {
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#95a5a6',
  }
})

export default connect(mapStateToProps)(SingleDeckView)