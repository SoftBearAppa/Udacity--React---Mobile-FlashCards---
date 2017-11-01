import _ from 'lodash';
import { AsyncStorage } from 'react-native';

const FLASHCARD_KEY = 'FLASHCARD_KEY';

export function apiGetDecks() {
  return AsyncStorage.getItem(`${FLASHCARD_KEY}:test`);
}

export function apiSaveTitle(deck) {
  return AsyncStorage.mergeItem(`${FLASHCARD_KEY}:test`, JSON.stringify({
    [deck.title]: deck,
  }));
}