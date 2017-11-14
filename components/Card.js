import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DeckDetail from "./DeckDetail";
import FlipCard from "react-native-flip-card";


class Card extends Component {
    state = {
        deck:null,
        questions: null,
        index: 0,
        isFlipped:false
    };

    componentDidMount(){
        const { params } = this.props.navigation.state;
        console.log('params',params);
        console.log('state', this.state);
        console.log('params.index',params.index);
        let currentIndex = params.index?(params.index):this.state.index;
        console.log('currentIndex',currentIndex);
        this.setState((prevState)=>({
            ...prevState,
            questions:params.questions,
            index:currentIndex,
            deck:params.deck
        }));
    };

    onFlipPress = () =>{
        this.setState(state=>(
            {
                ...state,
                isFlipped:!this.state.isFlipped
            }
        ))
    };

    onCorrectPress = () =>{
        let questions = this.state.questions;
        questions[this.state.index].optionSelected = 'correct';
        const { navigate } = this.props.navigation;
        if((this.state.index+1)<questions.length){
            navigate('Quiz', {questions:this.state.questions, deck:this.state.deck, index:(this.state.index+1)});
        }else{
            navigate('QuizReview', {questions:this.state.questions, deck:this.state.deck, index:(this.state.index+1)});
            //persist result with redux
        }


    };

    onIncorrectPress = () =>{
        let questions = this.state.questions;
        questions[this.state.index].optionSelected = 'incorrect';
        const { navigate } = this.props.navigation;
        if((this.state.index+1)<questions.length){
            navigate('Quiz', {questions:this.state.questions, deck:this.state.deck, index:(this.state.index+1)});
        }else{
            navigate('QuizReview', {questions:this.state.questions, deck:this.state.deck, index:(this.state.index+1)});
            //persist result with redux
        }
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
                    <TouchableOpacity style = {styles.correctBtn} onPress={this.onCorrectPress}>
                        <Text style = {styles.correctTxt} >
                            Correct
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.incorrectBtn} onPress={this.onIncorrectPress}>
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
