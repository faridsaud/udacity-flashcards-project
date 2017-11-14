
import {ADD_DECK, GET_DECK} from '../utils/constants'


export default function category(state = {}, action) {
    switch (action.type) {
        case ADD_DECK :
            return {
                ...state,
                action['title']:{

                }
            };
        case GET_DECK :
            return {
                categories: [...action.categories],
                isFetch: true
            };
        default :
            return state
    }
}