
import {ADD_CARD} from '../utils/constants'


export default function card(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADD_CARD :
            newState[action.deckId].questions.push({
                question:action.question,
                answer:action.answer,
                isCorrect:action.isCorrect
            });
            return newState;
        default:
            return state
    }
}