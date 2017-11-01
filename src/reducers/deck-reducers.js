import { FETCH_DECKS, SAVE_TEST } from '../actions/types';

export default (state={}, action) => {
  const { payload, type, decks } = action;

  switch (type) {

    case FETCH_DECKS:
      console.log(payload)
      return {payload};

    case SAVE_TEST:
      return console.log(payload)
      ;

    default:
      return state;
  }
}