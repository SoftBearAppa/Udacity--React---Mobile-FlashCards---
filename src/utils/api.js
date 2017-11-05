import _ from 'lodash';
import { AsyncStorage } from 'react-native';

const FLASHCARD_KEY = 'FLASHCARD_KEY:newTest';

export function apiGetDecks() {
  return AsyncStorage.getItem(FLASHCARD_KEY).catch((e) => console.log(e));
}

export function apiSaveTitle(deckName) {
  const obj = JSON.stringify(deckName);
  return AsyncStorage.mergeItem(FLASHCARD_KEY, obj);
}