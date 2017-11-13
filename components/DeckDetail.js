import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Deck from "./Deck";
import DeckList from "./DeckList";




class DeckDetail extends Component {
    static navigationOptions = ({ navigation })=>{
        return {
            title: `${navigation.state.params.title}`
        }
    };
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{params.title}</Text>
                <Text>{params.length} cards</Text>
                <View>
                </View>
            </View>
        )
    }
}

export default DeckDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderTopWidth:40,
        borderBottomWidth:40,
        minWidth:'100%'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    description:{
        fontSize:24
    }
});
