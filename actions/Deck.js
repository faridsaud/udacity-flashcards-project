import {ADD_DECK} from '../utils/constants'


export function addDeck({title}){
    return {
        type:ADD_DECK,
        title
    }
}


