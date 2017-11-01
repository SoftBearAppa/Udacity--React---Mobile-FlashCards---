import { FETCH_DECKS, SAVE_TEST } from './types';

import { apiGetDecks, apiSaveTitle } from '../utils/api';

export function appStartFetchDecks() {
  return dispatch => {
    apiGetDecks().then((decks) => {
      console.log(decks);
      dispatch({
        type: FETCH_DECKS,
        payload: decks
      })
    })
    .catch((error) => console.log(error))
  }
}

export function appSaveTitle(title) {
  const deck = {title, questions: []};
  console.log(deck);
  return dispatch => {
    apiSaveTitle(deck).then((deck) => {
      dispatch({
        type: SAVE_TEST,
        payload: deck,
      })
    })
    .catch((error) => console.log(error + deck))
  }
}
