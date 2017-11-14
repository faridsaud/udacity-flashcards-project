import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DeckDetail from "./DeckDetail";
import FlipCard from "react-native-flip-card";


class Card extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Quiz'
        }
    };

    state = {
        deck: null,
        questions: null,
        index: 0,
        isFlipped: false,
        finished:false
    };

    componentDidMount() {
        const {params} = this.props.navigation.state;
        this.setState((prevState) => ({
            ...prevState,
            questions: params.questions,
            deck: params.deck
        }));
        console.log('state', this.state)
    };


    onFlipPress = () => {
        this.setState(state => (
            {
                ...state,
                isFlipped: !this.state.isFlipped
            }
        ))
    };

    componentWillUpdate(nextProps, nextState) {
        const {navigate} = nextProps.navigation;
        console.log("nextProps", nextProps);
        console.log("nextState", nextState);
        if (nextState.finished) {
            navigate('QuizReview', {questions: nextState.questions, deck: nextState.deck});
            //persist result with redux
        }
    }

    onCorrectPress = () => {
        let questions = this.state.questions;
        questions[this.state.index].optionSelected = 'correct';
        console.log("OnCorrectPress");
        this.setState((prevState) => {
            return {
                ...prevState,
                questions,
                index: ((prevState.index + 1) === questions.length) ? prevState.index : (prevState.index + 1),
                finished:((prevState.index + 1) === questions.length)
            }
        });
        console.log('state', this.state)
    };

    onIncorrectPress = () => {
        let questions = this.state.questions;
        questions[this.state.index].optionSelected = 'incorrect';
        console.log("OnIncorrectPress");
        this.setState((prevState) => {
            return {
                ...prevState,
                questions,
                index: ((prevState.index + 1) === questions.length) ? prevState.index : (prevState.index + 1),
                finished:((prevState.index + 1) === questions.length)
            }
        });
        console.log('state', this.state)
    };

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <FlipCard style={styles.flipCard} perspective={1000} clickable={false} flip={this.state.isFlipped}>
                        {/* Face Side */}
                        <View style={styles.container}>
                            <Text style={styles.question}>
                                {this.state.questions &&
                                this.state.questions[this.state.index].question
                                }
                            </Text>
                        </View>
                        {/* Back Side */}
                        <View style={styles.container}>
                            <Text style={styles.answer}>
                                {this.state.questions &&
                                this.state.questions[this.state.index].answer
                                }
                            </Text>
                        </View>
                    </FlipCard>
                    <TouchableOpacity onPress={this.onFlipPress}>
                        {
                            this.state.isFlipped ? (
                                <Text style={styles.flipTextBtn}>
                                    Question
                                </Text>
                            ) : (
                                <Text style={styles.flipTextBtn}>
                                    Answer
                                </Text>
                            )
                        }
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.correctBtn} onPress={this.onCorrectPress}>
                        <Text style={styles.correctTxt}>
                            Correct
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.incorrectBtn} onPress={this.onIncorrectPress}>
                        <Text style={styles.incorrectTxt}>
                            Incorrect
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: '#fff',
        borderTopWidth: 40,
        borderBottomWidth: 40,
        minWidth: '100%'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    flipCard: {
        flex: 0.4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: '#fff',
        borderTopWidth: 40,
        borderBottomWidth: 40,
        minWidth: '100%'
    },
    question: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    answer: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    flipTextBtn: {
        color: '#f00'
    },
    correctBtn: {
        padding: 10,
        margin: 5,
        backgroundColor: '#0a0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        minWidth: '80%'
    },
    correctTxt: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    incorrectBtn: {
        padding: 10,
        margin: 5,
        backgroundColor: '#f00',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        minWidth: '80%'

    },
    incorrectTxt: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }

});
