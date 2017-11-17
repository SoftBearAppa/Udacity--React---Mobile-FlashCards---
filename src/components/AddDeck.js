import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
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

    const newDeck = { [entry.deckTitle]: {title: entry.deckTitle, questions:[]}}

    apiSaveTitle(newDeck);
    this.props.appSaveTitle(newDeck);

    this.setState({
      deckTitle: '',
    })

    this.props.navigation.navigate('SingleDeckView', {
      title: entry.deckTitle
    })
  }

  render() {
    const { deckTitle } = this.state;
    return (
      <View>
        <Text>Enter a Deck Title for a New Deck</Text>
        <KeyboardAvoidingView>
          <TextInput 
          value={deckTitle} 
          onChangeText={deckTitle => this.setState({ deckTitle })} placeholder={'Enter Deck Title'} 
          returnKeyType={'done'} 
          keyboardType={'email-address'} 
          autoFocus={true} 
          keyboardAppearance='light'/>
          <TouchableOpacity onPress={this.saveDeckTitle}>
            <Text>Submitt</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    state,
  }
}

export default connect(mapStateToProps, { appStartFetchDecks, appSaveTitle })(DeckList)