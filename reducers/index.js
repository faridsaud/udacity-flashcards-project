
import {ADD_CARD, ADD_DECK, ADD_DECKS} from '../utils/constants'


export default function reducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADD_DECK :
            newState[action.title] = {
                title:action.title,
                questions:[]
            };
            return newState;
        case ADD_DECKS :
            return JSON.parse(action.decks);
        case ADD_CARD :
            console.log("Reducer action", action);
            console.log("New state", newState);
            newState[action.deckId].questions.push({
                question:action.question,
                answer:action.answer,
                isCorrect:action.isCorrect
            });
            console.log("New state after", newState);
            return newState;
        default:
            return state
    }
}