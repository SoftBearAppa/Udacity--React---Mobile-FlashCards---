import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appStartFetchDecks, appSaveTitle } from '../actions/deck-actions'

import { apiSaveTitle } from '../utils/api'

class DeckList extends Component {
  componentDidMount() {
    this.props.appStartFetchDecks();
  };

  state = {
    deckTitle: '',
  };

  saveDeckTitle = () => {
    const { deckTitle } = this.state;
    const entry = this.state;
    console.log(this.props)
    const { decks } = this.props;

    console.log(decks);
    console.log(decks[entry.deckTitle]);

    if (decks[entry.deckTitle]) {
      Alert.alert('Deck already Exists','Please type a different deck title')
      return;
    } else {
      if (!entry.deckTitle) {
        Alert.alert('Please enter a deck title');
        return;
      } else {
        const newDeck = { [entry.deckTitle]: { title: entry.deckTitle, questions: [] } }

        apiSaveTitle(newDeck);
        this.props.appSaveTitle(newDeck);

        this.setState({
          deckTitle: '',
        })

        this.props.navigation.navigate('SingleDeckView', {
          title: entry.deckTitle
        })
      }
    }
  }

  render() {
    const { deckTitle } = this.state;
    return (
      <View style={style.container}>
        <Text style={style.header} >Enter a Deck Title for a New Deck</Text>
        <KeyboardAvoidingView style={style.container} >
          <TextInput style={style.input}
          value={deckTitle} 
          onChangeText={deckTitle => this.setState({ deckTitle })} placeholder={'Enter Deck Title'} 
          returnKeyType={'done'} 
          keyboardType={'email-address'} 
          autoFocus={true} 
          keyboardAppearance='light'/>
          <TouchableOpacity style={style.submit} onPress={this.saveDeckTitle}>
            <Text>Submitt</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks,
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
    paddingTop: 22,
    fontSize: 18,
  },
  submit: {
    borderWidth: 1,
    padding: 10,
    margin: 50,
    borderRadius: 5,
    backgroundColor: '#95a5a6'
  }
})

export default connect(mapStateToProps, { appStartFetchDecks, appSaveTitle })(DeckList)