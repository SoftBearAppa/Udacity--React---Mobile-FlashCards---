import _ from 'lodash';
import { AsyncStorage } from 'react-native';

const FLASHCARD_KEY = 'FLASHCARD_KEY';

export function apiGetDecks() {
  return AsyncStorage.getItem(`${FLASHCARD_KEY}:test`)
}

export function apiSaveTest(data) {
  return AsyncStorage.setItem(`${FLASHCARD_KEY}:test`, data)
}