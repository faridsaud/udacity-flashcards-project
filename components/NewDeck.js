import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import DeckDetail from "./DeckDetail";


class NewDeck extends Component {

    state = {
        title: ""
    };

    static navigationOptions = {
        title: 'Decks',
        header: null
    };

    onTextInputChange = (text) => {
        this.setState(state => {
            return {
                ...state,
                title: text
            }
        })
    };

    onSubmit = () =>{
        const { navigate } = this.props.navigation;
        navigate('Decks', {})
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                <Text style={styles.title}>
                    What's the title of your new deck?
                </Text>
                <TextInput style={styles.textInput} value={this.state.title} onChangeText={this.onTextInputChange}/>
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

export default NewDeck

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
        borderColor: '#000'
    },
    submitTxt:{
        fontWeight: 'bold',
        color:'#fff'
    }
});
