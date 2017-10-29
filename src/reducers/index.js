import { combineReducers } from 'redux';
import Decks from './deck-reducers';

const rootReducer = combineReducers({
  decks: Decks
})

export default rootReducer;