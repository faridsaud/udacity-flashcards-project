import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Deck from "./Deck";



class DeckList extends Component {
    static navigationOptions = {
        title: 'Decks',
        header: null
    };
    getDeckList = () =>{
        const deckList = {
            React: {
                title: 'React',
                questions: [
                    {
                        question: 'What is React?',
                        answer: 'A library for managing user interfaces',
                        isCorrect:true
                    },
                    {
                        question: 'Where do you make Ajax requests in React?',
                        answer: 'The componentDidMount lifecycle event',
                        isCorrect:true
                    }
                ]
            },
            JavaScript: {
                title: 'JavaScript',
                questions: [
                    {
                        question: 'What is a closure?',
                        answer: 'The combination of a function and the lexical environment within which that function was declared - The combination of a function and the lexical environment within which that function was declared.',
                        isCorrect:true
                    },
                    {
                        question: 'What is javascript',
                        answer: 'Low level programming language.',
                        isCorrect:false
                    }
                ]
            }
        };
        return Object.values(deckList);
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: "#CED0CE",
                }}
            />
        );
    };

    renderItem = ({item}) =>{
        return <Deck title={item.title} questions={item.questions} id={item.title} navigation={this.props.navigation}/>
    };
    render() {
        const data = this.getDeckList();
        return (
            <View style={styles.container}>
                <FlatList style={styles.list} data={data} renderItem={this.renderItem} keyExtractor={(item, index) => index} ItemSeparatorComponent={this.renderSeparator}/>
            </View>
        )
    }
}

export default DeckList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list:{
        flex: 1
    }
});
