import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


class DeckDetail extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: `${navigation.state.params.title}`
        }
    };


    onAddCardPress = () => {
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;
        navigate('NewCard', {deck: params.title})
    };

    onStartQuizPress = () => {
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;
        navigate('Quiz', {questions: params.questions, deck: params.title});
    };


    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{params.title}</Text>
                    <Text>{params.questions.length} cards</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.addCardBtn} onPress={this.onAddCardPress}>
                        <Text style={styles.addCardTxt}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startQuizBtn} onPress={this.onStartQuizPress}>
                        <Text style={styles.startQuizTxt}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>

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
        borderTopWidth: 40,
        borderBottomWidth: 40,
        minWidth: '100%'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 24
    },
    addCardBtn: {
        padding: 10,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        minWidth: '80%'

    },
    addCardTxt: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    startQuizBtn: {
        padding: 10,
        margin: 5,
        backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        minWidth: '80%'
    },
    startQuizTxt: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'

    }
});
