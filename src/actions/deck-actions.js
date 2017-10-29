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
      console.log(newData);
      console.log(data);
      dispatch({
        type: SAVE_TEST,
        payload: data,
      })
    })
  }
}

export function testing() {
  return (dispatch) => {
    apiGetDecks().then((data) => {
      dispatch({
        type: TEST,
        payload: data
      })
    })
  }
}