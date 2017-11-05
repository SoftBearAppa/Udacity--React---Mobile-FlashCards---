import { FETCH_DECKS, SAVE_TEST } from '../actions/types';

export default (state={}, action) => {
  const { payload, type, decks } = action;

  switch (type) {

    case FETCH_DECKS:
      const decks = JSON.parse(payload);
      return {...state, ...decks};

    case SAVE_TEST:
      return {...state};

    default:
      return state;
  }
}