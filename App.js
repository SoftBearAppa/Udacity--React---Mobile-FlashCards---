import { Constants } from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './src/reducers/index';

import DeckList from './src/components/DeckList';
import AddDeck from './src/components/AddDeck';

function FlashCardStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList
  },
  AddDeck: {
    screen: AddDeck
  }
})

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashCardStatusBar backgroundColor={'rgb(250,146,54)'} barStyle={'dark-content'}/>
          <Tabs />
        </View>
      </Provider>
    );
  }
}