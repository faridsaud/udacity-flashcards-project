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
            <View style = {styles.container}>
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
                    <TouchableOpacity style={styles.homeBtn} onPress={this.onHomePress}>
                        <Text style={styles.homeTxt}>
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
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    text:{
        fontSize:14,
        fontWeight:'bold'
    },
    homeBtn:{
        padding: 10,
        margin:5,
        backgroundColor: '#0a0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        minWidth: '80%'

    },
    homeTxt:{
        fontWeight: 'bold',
        color:'#fff',
        textAlign:'center'
    }
});
