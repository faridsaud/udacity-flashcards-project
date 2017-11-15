import {ADD_CARD, ADD_DECK, ADD_DECKS} from '../utils/constants'


export default function reducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADD_DECK :
            newState[action.title] = {
                title: action.title,
                questions: []
            };
            return newState;
        case ADD_DECKS :
            return JSON.parse(action.decks);
        case ADD_CARD :
            newState[action.deckId].questions.push({
                question: action.question,
                answer: action.answer,
                isCorrect: action.isCorrect
            });
            return newState;
        default:
            return state
    }
}