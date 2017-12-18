import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';
export default class Main extends React.Component {
    VIDEO(){
        Actions.video();
    }
    
    render() {
            

        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center',backgroundColor: '#DDDDDD',padding: 40,  borderRadius:12, backgroundColor: 'white'}}>
                <TouchableOpacity onPress={this.VIDEO} >
                   <Text style={{fontSize:55}}>Video </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
  }
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
   }
});