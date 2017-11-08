import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';

class NewQuestionView extends Component {
  render() {
    return (
      <View>
        <Text>New Question</Text>
      </View>
    )
  }
}

export default connect()(NewQuestionView)