import React from 'react';
import { Text, View , ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styleSheet.js';

export default class Accel extends React.Component {

  

render() {
  return (
    <View>
      <Text>this is a placeholder for the pitch</Text>
      <TouchableOpacity
         style={styles.button}
         onPress={this.props.goToResults}>
          <Text style={{color:'white'}}> results </Text>
        </TouchableOpacity>
    </View>
  )
}
}