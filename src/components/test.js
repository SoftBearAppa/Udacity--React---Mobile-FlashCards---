import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appStartFetchDecks, appSaveTest, testing } from '../actions/deck-actions';

class Test extends Component {
  componentDidMount() {

  }

  test = () => {
    let data = '5test more data';
    this.props.appSaveTest(data);
  };

  read = () => {
    let info = this.props.testing();
    console.log(typeof this.props.testing());
    console.log(info)
    return Alert.alert(this.props.testing());
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>test 1</Text>
        <TouchableOpacity onPress={this.test}>
            <Text>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.read}>
          <Text>Read</Text>
        </TouchableOpacity>
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
    appSaveTest,
    testing,
  },dispatch)
}
export default connect(mapStateToProps, mapDipatchToProps)(Test)