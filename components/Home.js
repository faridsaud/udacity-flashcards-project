import {StackNavigator, TabNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import DeckList from './DeckList'
import Deck from "./Deck";
import DeckDetail from "./DeckDetail";
import NewDeck from "./NewDeck";
import NewCard from "./NewCard";
import Card from "./Card";
import { Constants } from 'expo'
import QuizReview from "./QuizReview";

const Tabs = TabNavigator({
    Home: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
        },
    },
    NewDeck:{
        screen:NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck'
        },
    }
},{
    /*
    tabBarOptions:{
        style:{
            marginTop:Constants.statusBarHeight
        }
    }
    */
});

const Stack = StackNavigator({
    Decks: {
        screen: Tabs,
    },
    DeckDetail:{
        screen: DeckDetail,
    },
    NewCard:{
        screen: NewCard,

    },
    Quiz:{
        screen: Card,
    },
    QuizReview:{
        screen:QuizReview,
    }

},{
    cardStyle: {
        paddingTop: Constants.statusBarHeight
    }
});


class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Stack/>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
    },
});
