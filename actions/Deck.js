import {ADD_DECK, GET_DECK} from '../utils/constants'


export function addDeck({title}){
    return {
        type:ADD_DECK,
        title
    }
}

export function getDeck(id){
    return {
        type:GET_DECK,
        id
    }
}

