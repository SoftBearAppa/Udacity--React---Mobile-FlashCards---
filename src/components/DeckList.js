import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appStartFetchDecks, appSaveTest } from '../actions/deck-actions';

class Test extends Component {
  componentDidMount() {
    this.props.appStartFetchDecks();
  }

  render() {
    return (
      <View>
        <Text>Decks</Text>
      </View>
    )
  }
}

function mapStateToProps({ ...state }) {
  return state
}

function mapDipatchToProps(dispatch) {
  return bindActionCreators({
    appStartFetchDecks,
    appSaveTest
  },dispatch)
}
export default connect(mapStateToProps, mapDipatchToProps)(Test)