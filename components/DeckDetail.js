import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {clearLocalNotification, setLocalNotification} from "../utils/notification";
import {connect} from "react-redux";


class DeckDetail extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: `${navigation.state.params.title}`
        }
    };

    state = {
        deck: {
            questions: []
        }
    };


    onAddCardPress = () => {
        const {navigate} = this.props.navigation;
        navigate('NewCard', {deck: this.state.deck.title})
    };

    onStartQuizPress = () => {
        clearLocalNotification()
            .then(setLocalNotification);
        const {navigate} = this.props.navigation;
        navigate('Quiz', {questions: this.state.deck.questions, deck: this.state.deck.title});
    };

    componentDidMount(){
        this.setState({
            deck:this.props.deck
        })
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            deck: nextProps.deck
        });
    }

    render() {
        let deck = this.state.deck;
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text>{deck.questions.length} cards</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.addCardBtn} onPress={this.onAddCardPress}>
                        <Text style={styles.addCardTxt}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                    {
                        deck.questions.length > 0 &&
                        <TouchableOpacity style={styles.startQuizBtn} onPress={this.onStartQuizPress}>
                            <Text style={styles.startQuizTxt}>
                                Start Quiz
                            </Text>
                        </TouchableOpacity>
                    }


                </View>
            </View>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        deck:  state[props.navigation.state.params.title]
    }
};


export default connect(
    mapStateToProps,
    null
)(DeckDetail)


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
