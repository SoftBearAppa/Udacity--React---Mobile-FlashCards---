import { ADD_CARD, FETCH_DECKS, SAVE_TEST } from '../actions/types';

export default (state={}, action) => {
  const { payload, type, decks } = action;

  switch (type) {

    case ADD_CARD:
      const { title, questions, txtQuestion, txtAnswer} = payload;
      const newCard = { questions: txtQuestion, answer: txtAnswer};
      let newQuestions = questions
      newQuestions[newQuestions.length] = newCard;

      return {
        ...state,
        [title]: { ...state[title], questions: newQuestions}
      }

    case FETCH_DECKS:
      const decks = JSON.parse(payload);
      return {...state, ...decks};

    case SAVE_TEST:
      return {...state, ...payload};

    default:
      return state;
  }
}