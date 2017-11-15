import React, {Component} from 'react'
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
        finished: false
    };

    componentDidMount() {
        const {params} = this.props.navigation.state;
        this.setState((prevState) => ({
            ...prevState,
            questions: params.questions,
            deck: params.deck
        }));
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
        if (nextState.finished) {
            navigate('QuizReview', {questions: nextState.questions, deck: nextState.deck});
        }
    }

    onCorrectPress = () => {
        let questions = this.state.questions;
        questions[this.state.index].optionSelected = 'correct';
        this.setState((prevState) => {
            return {
                ...prevState,
                questions,
                index: ((prevState.index + 1) === questions.length) ? prevState.index : (prevState.index + 1),
                finished: ((prevState.index + 1) === questions.length)
            }
        });
    };

    onIncorrectPress = () => {
        let questions = this.state.questions;
        questions[this.state.index].optionSelected = 'incorrect';
        this.setState((prevState) => {
            return {
                ...prevState,
                questions,
                index: ((prevState.index + 1) === questions.length) ? prevState.index : (prevState.index + 1),
                finished: ((prevState.index + 1) === questions.length)
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <FlipCard style={styles.flipCard} perspective={1000} clickable={false} flip={this.state.isFlipped}>
                        {/* Face Side */}
                        <ScrollView>
                            <Text style={styles.question}>
                                {this.state.questions &&
                                this.state.questions[this.state.index].question
                                }
                            </Text>
                        </ScrollView>
                        {/* Back Side */}
                        <ScrollView>
                            <Text style={styles.answer}>
                                {this.state.questions &&
                                this.state.questions[this.state.index].answer
                                }
                            </Text>
                        </ScrollView>
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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    answer: {
        fontSize: 20,
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
    },
    questionNumberContainer: {
        flex: 0.1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }

});
