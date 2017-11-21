import React, { Componet } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function DeckListDeails({ title, questions }) {
  return (
    <View style={{alignItems: 'center', paddingTop: 10}} >
      <Text style={style.text} >{title}</Text>
      <Text style={style.text} >Cards: {questions.length}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  text: {
    fontSize: 15
  }
})