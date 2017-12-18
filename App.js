import React from 'react';
import { StyleSheet, Dimensions, View, TouchableHighlight } from 'react-native';

import Action from 'react-native-router-flux';
import Route from './Route';
export default class App extends React.Component {

    render() {
            

        return (
            <View style={styles.container}>
                <Route />
            </View>
        )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});