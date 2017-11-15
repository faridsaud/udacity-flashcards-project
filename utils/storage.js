import {AsyncStorage} from 'react-native'
import {DECKS} from "./constants";

export function createCard({deckId, question, answer, isCorrect}) {
    return AsyncStorage.getItem(DECKS).then(decks => {
        decks[deckId].questions.push({
            question,
            answer,
            isCorrect
        });
        return AsyncStorage.mergeItem(DECKS, JSON.stringify(decks));
    })
}

export function createDeck({title}) {
    let decks = {};
    decks[title] = {questions: [], title};
    return AsyncStorage.mergeItem(DECKS, JSON.stringify(decks))
}

export function getDecks() {
    return AsyncStorage.getItem(DECKS);
}

export function getDeck({title}) {
    return AsyncStorage.getItem(DECKS).then(decks => {
        return Promise.resolve(decks[title]);
    })
}


export function loadDefaultData() {
    const deckList = {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces',
                    isCorrect: true
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event',
                    isCorrect: true
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared - The combination of a function and the lexical environment within which that function was declared.',
                    isCorrect: true
                },
                {
                    question: 'What is javascript',
                    answer: 'Low level programming language.',
                    isCorrect: false
                }
            ]
        }
    };
    return AsyncStorage.setItem(DECKS, JSON.stringify(deckList));
};
