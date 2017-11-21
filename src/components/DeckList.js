import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Alert, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appStartFetchDecks, appSaveTest, testing } from '../actions/deck-actions';

import DeckListDetails from './DeckListDetails';

class DeckList extends Component {
  componentDidMount() {
    this.props.appStartFetchDecks();
  };

  renderDeckList = ({item}) => {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container} >
        <TouchableOpacity onPress={() => navigate('SingleDeckView', item)}>
          <DeckListDetails title={item.title} questions={item.questions} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { decks } = this.props;
    const formattedDeck = Object.values(decks).sort((a, b) => a.title > b.title);
    
    return (
      <View style={style.container} >
        <Text style={style.header} >Deck List</Text>
        <FlatList data={formattedDeck} renderItem={this.renderDeckList} keyExtractor={(item, index) => item.title}/>
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

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    paddingTop: 10,
    fontSize: 20,
  },
})

export default connect(mapStateToProps, mapDipatchToProps)(DeckList)