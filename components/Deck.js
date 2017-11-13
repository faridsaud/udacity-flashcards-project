import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DeckDetail from "./DeckDetail";




class Deck extends Component {
    render() {
        const { navigate } = this.props.navigation;
        console.log("Navigate object", navigate)
        return (
            <TouchableOpacity onPress={() => navigate('DeckDetail', { title: this.props.title, questions:this.props.questions})}>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text>{this.props.questions.length} cards</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Deck

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
