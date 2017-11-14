import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DeckDetail from "./DeckDetail";
import FlipCard from "react-native-flip-card";


class Card extends Component {
    state = {
        activeQuestion: {},
        questions: [],
        index: 0,
        isFlipped:false
    };

    onFlipPress = () =>{
        this.setState(state=>(
            {
                ...state,
                isFlipped:!this.state.isFlipped
            }
        ))
    };
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <FlipCard style={styles.flipCard} perspective={1000} clickable={false} flip={this.state.isFlipped}>
                        {/* Face Side */}
                        <View style={styles.container}>
                            <Text  style={styles.question}>
                                {params.activeQuestion.question}
                            </Text>
                        </View>
                        {/* Back Side */}
                        <View style={styles.container}>
                            <Text style={styles.answer}>
                                {params.activeQuestion.answer}
                            </Text>
                        </View>
                    </FlipCard>
                    <TouchableOpacity onPress={this.onFlipPress}>
                        {
                            this.state.isFlipped ? (
                                <Text  style={styles.flipTextBtn}>
                                    Question
                                </Text>
                            ):(
                                <Text  style={styles.flipTextBtn}>
                                    Answer
                                </Text>
                            )
                        }
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style = {styles.correctBtn} onPress={this.onAddCardPress}>
                        <Text style = {styles.correctTxt} >
                            Correct
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.incorrectBtn} onPress={this.onStartQuizPress}>
                        <Text  style = {styles.incorrectTxt}>
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
        fontWeight: 'bold'
    },
    answer: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'center'
    },
    flipTextBtn:{
        color:'#f00'
    },
    correctBtn:{
        padding: 10,
        margin:5,
        backgroundColor: '#0a0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    correctTxt:{
        fontWeight: 'bold',
        color:'#fff',
        textAlign:'center'
    },
    incorrectBtn:{
        padding: 10,
        margin:5,
        backgroundColor: '#f00',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    incorrectTxt:{
        fontWeight: 'bold',
        color:'#fff',
        textAlign:'center'

    }

});
