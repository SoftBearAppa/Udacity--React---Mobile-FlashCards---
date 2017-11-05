import React, { Componet } from 'react';
import { View, Text} from 'react-native';

export default function DeckListDeails({ title, questions }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>Cards: {questions}</Text>
    </View>
  )
}