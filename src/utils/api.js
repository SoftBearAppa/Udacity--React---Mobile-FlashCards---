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

export function apiAddCard({ card, deckName }) {
  return AsyncStorage.getItem(FLASHCARD_KEY, (e, result) => {
    let decks = JSON.parse(result);
    let newCard = decks[deckName].questions;
    newCard[newCard.length] = card;
    const value = JSON.stringify({
      [deckName]: { title: deckName, questions: newCard }
    });

    AsyncStorage.mergeItem(FLASHCARD_KEY, value);
  })
}