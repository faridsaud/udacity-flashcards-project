import React, {Component} from 'react'
import {FlatList, StyleSheet, View} from 'react-native';
import Deck from "./Deck";
import {connect} from "react-redux";
import {getDecks} from "../actions/Deck";


class DeckList extends Component {
    static navigationOptions = {
        title: 'Decks',
        header: null
    };

    state = {
        decks: {}
    };
    getDeckList = () => {
        return Object.values(this.state.decks);
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

    componentDidMount = () => {
        this.props.getDecks();
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            decks: nextProps.decks
        });
    }

    renderItem = ({item}) => {
        return <Deck title={item.title} questions={item.questions} id={item.title} navigation={this.props.navigation}/>
    };

    render() {
        const data = this.getDeckList();
        return (
            <View style={styles.container}>
                <FlatList style={styles.list} data={data} renderItem={this.renderItem}
                          keyExtractor={(item, index) => index} ItemSeparatorComponent={this.renderSeparator}/>
            </View>
        )
    }
}

const mapStateToProps = (state, props) => ({
    decks: state
});

const mapDispatchToProps = dispatch => ({
    getDecks: () => dispatch(getDecks())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckList)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1
    }
});
