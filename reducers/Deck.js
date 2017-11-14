
import {ADD_DECK} from '../utils/constants'


export default function deck(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADD_DECK :
            newState[action.title] = {
                title:action.title,
                questions:[]
            };
            return newState;
        default:
            return state
    }
}