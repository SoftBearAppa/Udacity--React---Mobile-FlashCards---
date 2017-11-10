import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

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

    const values = {title, questions, txtQuestion, txtAnswer}

    this.props.addCard(values)
    apiAddCard({
      card: { questions: txtQuestion, answer: txtAnswer},
      deckName: title
    })

    
    
  }

  render() {
    const { txtQuestion, txtAnswer} = this.state;
    return (
      <View>
        <Text>New Question</Text>
        <KeyboardAvoidingView>
          <Text>Question:</Text>
          <TextInput value={txtQuestion} onChangeText={txtQuestion => this.setState({txtQuestion})} placeholder={'Enter Question'} />
          <Text>Answer:</Text>
          <TextInput value={txtAnswer} onChangeText={txtAnswer => this.setState({txtAnswer})} placeholder={'Enter Answer to Question'} />
          <TouchableOpacity onPress={() => this.saveCard()}>
            <Text>Submitt</Text>
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

export default connect(mapStateToProps, { addCard })(NewQuestionView)