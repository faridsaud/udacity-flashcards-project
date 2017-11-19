import {NavigationActions} from 'react-navigation';
import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


class QuizReview extends Component {
    evaluateScore = (questions) => {
        let correctQuestions = questions.filter(question => {
            if ((question.isCorrect && question.optionSelected === 'correct') || (!question.isCorrect && question.optionSelected === 'incorrect'))
                return true
        });
        return {
            totalQuestions: questions.length,
            correctQuestions: correctQuestions.length,
            incorrectQuestions: (questions.length - correctQuestions.length)
        }
    };

    onBackToDecksPress = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Decks'})
            ]
        });
        this.props.navigation.dispatch(resetAction)
    };

    onBackToDeckPress = () => {
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;
        navigate('DeckDetail', {questions: params.questions, title: params.deck});

    };

    onRestartPress = () => {
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;
        navigate('Quiz', {questions: params.questions, deck: params.deck});
    };

    render() {
        const {params} = this.props.navigation.state;
        const score = this.evaluateScore(params.questions);
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>
                        Total questions: {score.totalQuestions}
                    </Text>
                    <Text style={styles.text}>
                        Total correct questions: {score.correctQuestions}
                    </Text>
                    <Text style={styles.text}>
                        Total incorrect questions: {score.incorrectQuestions}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.restartBtn} onPress={this.onRestartPress}>
                        <Text style={styles.restartTxt}>
                            Restart Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.homeBtn} onPress={this.onBackToDeckPress}>
                        <Text style={styles.homeTxt}>
                            Back to Deck
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.homeBtn} onPress={this.onBackToDecksPress}>
                        <Text style={styles.homeTxt}>
                            Back to Decks
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default QuizReview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    restartBtn: {
        padding: 10,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        minWidth: '80%'

    },
    restartTxt: {
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    homeBtn: {
        padding: 10,
        margin: 5,
        backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        minWidth: '80%'

    },
    homeTxt: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }
});
