import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import { addCard } from '../actions/deck-actions'
import { apiAddCard } from '../utils/api';

class NewQuestionView extends Component {
  state = {
    txtQuestion: '',
    txtAnswer: '',
  }

  saveCard = () => {
    const {txtQuestion, txtAnswer} = this.state;
    const {title, questions} = this.props.navigation.state.params;

    if (txtQuestion === '') {
      Alert.alert('Blank Question', 'Please type in the question field')
      return;
    }

    if (txtAnswer === '') {
      Alert.alert('Blank Answer', 'Please type in the answer field')
      return;
    }

    const values = {title, questions, txtQuestion, txtAnswer}

    this.props.addCard(values)
    apiAddCard({
      card: { questions: txtQuestion, answer: txtAnswer},
      deckName: title
    })

    Alert.alert('Question Card Added', "You've added a card to you're deck." + " Continue entering another card, or hit the back button");

    this.setState({
      txtQuestion: '',
      txtAnswer: '',})
      return;
  }

  render() {
    const { txtQuestion, txtAnswer} = this.state;
    return (
      <View style={style.container} >
        <Text style={style.header} >New Question</Text>
        <KeyboardAvoidingView>
          <Text style={{marginTop: 14}} >Question:</Text>
          <TextInput style= {style.input} value={txtQuestion} onChangeText={txtQuestion => this.setState({txtQuestion})} placeholder={'Enter Question'} />
          <Text style={{marginTop: 14}} >Answer:</Text>
          <TextInput style= {style.input} value={txtAnswer} onChangeText={txtAnswer => this.setState({txtAnswer})} placeholder={'Enter Answer to Question'} />
          <TouchableOpacity style={style.button} onPress={() => this.saveCard()}>
            <Text>Submitt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => this.props.navigation.goBack(null)}>
            <Text>Back</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

function mapStateToProps({decks}) {
  return {
    decks: decks
  }
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    paddingTop: 10,
  },
  input: {
    width: 250,
    paddingTop: 10,
    fontSize: 18,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    margin: 50,
    borderRadius: 5,
    backgroundColor: '#95a5a6',
    alignItems: 'center'
  }
})
export default connect(mapStateToProps, { addCard })(NewQuestionView)