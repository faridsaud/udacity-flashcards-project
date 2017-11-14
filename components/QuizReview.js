import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DeckDetail from "./DeckDetail";
import { NavigationActions } from 'react-navigation'


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

    onHomePress = () =>{
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Decks'})
            ]
        })
        this.props.navigation.dispatch(resetAction)
    };

    render() {
        const {params} = this.props.navigation.state;
        const score = this.evaluateScore(params.questions);
        return (
            <View>
                <View>
                    <Text>
                        Total questions: {score.totalQuestions}
                    </Text>
                    <Text>
                        Total correct questions: {score.correctQuestions}
                    </Text>
                    <Text>
                        Total incorrect questions: {score.incorrectQuestions}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.onHomePress}>
                        <Text>
                            Home
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
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});
