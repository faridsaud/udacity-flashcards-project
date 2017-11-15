import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import DeckDetail from "./DeckDetail";
import {addDeck, createDeck} from "../actions/Deck";
import {connect} from "react-redux";


class NewDeck extends Component {

    state = {
        title: ""
    };

    static navigationOptions = {
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

    onSubmit = () => {
        const {navigate} = this.props.navigation;
        this.props.addDeck({title:this.state.title}).then(()=>{
            navigate('Decks', {})
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                        What's the title of your new deck?
                    </Text>
                    <TextInput style={styles.textInput} value={this.state.title} onChangeText={this.onTextInputChange}
                               placeholder="Enter the title of your new Deck"/>
                </View>
                <View>
                    <TouchableOpacity style={styles.submitBtn} onPress={this.onSubmit}>
                        <Text style={styles.submitTxt}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}



const mapDispatchToProps = dispatch => ({
    addDeck: ({title}) => dispatch(createDeck({title}))
});

export default connect(
    null,
    mapDispatchToProps
)(NewDeck)


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
        fontWeight: 'bold',
        textAlign:'center'
    },
    textInput: {
        minWidth: '100%',
        padding: 10,
        margin: 5
    },
    submitBtn: {
        padding: 10,
        margin: 5,
        backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        minWidth: '80%'
    },
    submitTxt: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign:'center'
    }
});
