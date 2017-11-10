import {ADD_CARD, GET_CARD, GET_ALL_CARDS} from '../utils/constants'


export function addCard({question, answer, deckId}){
    return {
        type:ADD_CARD,
        question,
        answer,
        deckId
    }
}

export function getCard(id){
    return {
        type:GET_CARD,
        id
    }
}

export function getAllCard(deckId){
    return {
        type:GET_ALL_CARDS,
        deckId
    }
}


