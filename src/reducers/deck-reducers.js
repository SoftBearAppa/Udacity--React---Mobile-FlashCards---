import { FETCH_DECKS, SAVE_TEST, TEST } from '../actions/types';

export default (state={}, action) => {
  const { payload, type } = action;

  switch (type) {

    case FETCH_DECKS:
      console.log('fetched decks' + payload);
      return payload;

    case SAVE_TEST:
      console.log(payload);
      return payload;

    case TEST:
      console.log(payload);
      return payload;

    default:
      return state;
  }
}