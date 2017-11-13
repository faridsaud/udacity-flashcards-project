import {TabNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import DeckList from './DeckList'

const Tabs = TabNavigator({
    Decks: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks'
        },
    }
});

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Tabs/>
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
