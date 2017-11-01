import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appStartFetchDecks, appSaveTest, testing } from '../actions/deck-actions';

class DeckList extends Component {
  componentDidMount() {
    this.props.appStartFetchDecks();
  };

  render() {
    console.log(this.props)
    return (
      <View>
        <Text>Deck List</Text>
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

function mapDipatchToProps(dispatch) {
  return bindActionCreators({
    appStartFetchDecks,
  },dispatch)
}
export default connect(mapStateToProps, mapDipatchToProps)(DeckList)