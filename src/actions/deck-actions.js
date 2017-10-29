import { FETCH_DECKS, SAVE_TEST, TEST } from './types';

import { apiGetDecks, apiSaveTest } from '../utils/api';

export function appStartFetchDecks() {
  return dispatch => {
    apiGetDecks().then((decks) => {
      dispatch({
        type: FETCH_DECKS,
        payload: decks

      })
    })
  }
}

export function appSaveTest(data) {
  return dispatch => {
    apiSaveTest(data).then((newData) => {
      dispatch({
        type: SAVE_TEST,
        payload: data,
      })
    })
  }
}