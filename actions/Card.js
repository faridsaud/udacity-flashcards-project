import {ADD_CARD} from '../utils/constants'


export function addCard({question, answer, deckId, isCorrect}){
    return {
        type:ADD_CARD,
        question,
        answer,
        deckId,
        isCorrect
    }
}