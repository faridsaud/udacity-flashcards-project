import {ADD_DECK, ADD_DECKS} from '../utils/constants'
import * as StorageUtil from '../utils/storage'

export function addDeck({title}) {
    return {
        type: ADD_DECK,
        title
    }
}

export function addDecks(decks) {
    return {
        type: ADD_DECKS,
        decks
    }
}


export const getDecks = () => dispatch => (
    StorageUtil.getDecks().then(data => {
        dispatch(addDecks(data))
    })
);


export const createDeck = ({title}) => dispatch => (
    StorageUtil.createDeck({title}).then(() => {
        dispatch(addDeck({title}))
    })
);