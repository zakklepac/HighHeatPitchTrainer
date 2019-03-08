import React from 'react';
import { Text, View , ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styleSheet.js';
import Pitch from './Pitch'


// PROPS - goPitch={this.goPitch}
export default class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true,
      count: 3
    }

    this.timer = setInterval(() => {
      if (this.state.count === 1) {
        clearInterval(this.timer)
      }
      this.setState(previousState => (
        {count: previousState.count -=1}
      ))
      }, 1000);
    
  }

  render() {
    if (this.state.count === 0) {
      {this.props.goPitch()}
    }
    return (
      <Text style={styles.header}>{this.state.count}</Text>
    );
  }
  
}
