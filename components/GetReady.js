import React from 'react';
import { Text, View , ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styleSheet.js';

export default class GetReady extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <Text>Hold your phone in your hand</Text>
        <Text>Wind up and get ready for the pitch</Text>
        <Text>When the timer says go, move your arm </Text>
        <Text>in a pitching motion</Text>
        <Text>Remember,</Text>
        <Text>DO NOT ACTUALLY THROW YOUR PHONE!</Text>

        <TouchableOpacity
         style={styles.button}
         onPress={this.props.goPlay}>
          <Text style={{color:'white'}}> Go! </Text>
        </TouchableOpacity>

      </View>
    )
  }
}


