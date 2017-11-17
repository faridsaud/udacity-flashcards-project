import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from "./components/Home";
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import thunk from "redux-thunk";
import {setLocalNotification} from "./utils/notification";

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default class App extends React.Component {
    componentDidMount(){
        console.log("Component mount");
        setLocalNotification();
    }
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Home/>
                </View>
            </Provider>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
