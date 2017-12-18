

import React, { Component } from 'react';
import {
 Platform,
 StyleSheet,
 Text,
 View,
} from 'react-native';
import Video from 'react-native-video';

export default class VideoView extends Component<{}> {
 render() {
   return (
     <View style={styles.container}>
           <Video
           repeat
           resizeMode='cover'
           source={require('./Video/Proba.mp4')}
           style={styles.backgroundVideo}
         />
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
 backgroundVideo: {
   position: 'absolute',
   top: 0,
   left: 0,
   bottom: 0,
   right: 0,
 },
});