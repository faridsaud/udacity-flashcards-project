import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native';


class Deck extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
                <Text>{this.props.questions.length} cards</Text>
            </View>
        )
    }
}

export default Deck

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
