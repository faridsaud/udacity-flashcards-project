import {ADD_CARD} from '../utils/constants'
import * as StorageUtil from "../utils/storage";


export function addCard({question, answer, deckId, isCorrect}) {
    return {
        type: ADD_CARD,
        question,
        answer,
        deckId,
        isCorrect
    }
}

export const createCard = ({question, answer, deckId, isCorrect}) => dispatch => (
    StorageUtil.createCard({question, answer, deckId, isCorrect}).then(() => {
        dispatch(addCard({question, answer, deckId, isCorrect}))
    })
);