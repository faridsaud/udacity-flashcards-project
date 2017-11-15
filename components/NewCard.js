import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput, CheckBox, Alert} from 'react-native';
import DeckDetail from "./DeckDetail";
import {connect} from "react-redux";
import {createCard} from "../actions/Card";


class NewCard extends Component {

    state = {
        question: "",
        answer:"",
        deck:"",
        isCorrect:false
    };

    componentDidMount = () =>{
        const { params } = this.props.navigation.state;
        this.setState({
            deck:params.deck
        })
    };

    onCheckBoxValueChange = () =>{
        this.setState(state=>({
            ...state,
            isCorrect:!state.isCorrect
        }))
    }

    onQuestionTextChange = (text) => {
        this.setState(state => {
            return {
                ...state,
                question: text
            }
        })
    };
    onAnswerTextChange = (text) => {
        this.setState(state => {
            return {
                ...state,
                answer: text
            }
        })
    };
    onSubmit = () =>{
        if(this.state.question==='' || this.state.answer===''){
            Alert.alert(
                'Empty Field',
                "The question or answer can't be empty",
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }else{
            const { navigate } = this.props.navigation;
            this.props.addCard({question:this.state.question, answer:this.state.answer, deckId:this.state.deck, isCorrect:this.state.isCorrect}).then(()=>{
                navigate('Decks', {})
            })
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <TextInput style={styles.textInput} value={this.state.question} onChangeText={this.onQuestionTextChange} placeholder="Enter the question of your new Card"/>
                    <TextInput style={styles.textInput} value={this.state.answer} onChangeText={this.onAnswerTextChange} numberOfLines={4} multiline={true} placeholder="Enter the answer of your new Card"/>
                    <Text>Is correct?</Text>
                    <CheckBox value={this.state.isCorrect} onChange={this.onCheckBoxValueChange}/>
                </View>
                <View>
                    <TouchableOpacity style = {styles.submitBtn} onPress={this.onSubmit}>
                        <Text style = {styles.submitTxt} >
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}



const mapDispatchToProps = dispatch => ({
    addCard: ({question, answer, deckId, isCorrect}) => dispatch(createCard({question, answer, deckId, isCorrect}))
});

export default connect(
    null,
    mapDispatchToProps
)(NewCard);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderTopWidth: 40,
        borderBottomWidth: 40,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    textInput: {
        minWidth: '100%',
        padding: 10,
        margin: 5
    },
    submitBtn:{
        padding: 10,
        margin:5,
        backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        minWidth: '80%'
    },
    submitTxt:{
        fontWeight: 'bold',
        color:'#fff',
        textAlign:'center'
    }
});
