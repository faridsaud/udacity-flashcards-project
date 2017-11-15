
import {ADD_DECK, ADD_DECKS} from '../utils/constants'


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
            return action.decks;
        default:
            return state
    }
}