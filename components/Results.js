import React from 'react';
import { Text, View , ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styleSheet.js';
let party = 'http://www.swantonschool.org/wp-content/uploads/2016/03/celebration.jpg'

// pass score to this comp as prop

export default class Results extends React.Component {
  render() {
    let background = {uri: party};
    return (
      <ImageBackground 
        source={background} 
        style={{width: '100%', height: '100%'}}>

        <View style={styles.container}>

          <Text style={[styles.header, styles.whiteText]}>Great Pitch!</Text>
          <Text style={[styles.whiteText, styles.p]}>You Pitched</Text>
          <Text style={[styles.header, styles.whiteText]}>{this.props.score}</Text>

          <TouchableOpacity
          style={styles.buttonWhite}
          onPress={this.props.goGetReady}>
            <Text > Play Again </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.buttonWhite}
          onPress={this.props.goHome}>
            <Text > SignOut </Text>
          </TouchableOpacity>

        </View>

      </ImageBackground>
    );
    
  }
}