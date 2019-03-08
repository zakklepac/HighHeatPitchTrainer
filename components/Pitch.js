import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo';
import Results from './Results'

//PROPS goToResults={this.goResults} setScore={this.setScore}
export default class Pitch extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        x: [],
        y: [],
        z: [],
        score: null
      }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this._toggle();
    setTimeout(() => { 
      this._unsubscribe()
      }, 3000)
    
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription && this.state.x.length > 10) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  }

  _custom = () => {
    Accelerometer.setUpdateInterval(500);
  }

  _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      this.setState({ 
        x: [...this.state.x, round(accelerometerData.x),],
        y: [...this.state.x, round(accelerometerData.y)],
        z: [...this.state.x, round(accelerometerData.z)] })
      })
    }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
    let max = Math.max(...this.state.y)
    this.setState({ score: max})
  }

  handleSubmit () {
    let myScore = this.state.score
    this.props.setScore(myScore);
    this.props.goResults();
  }

  render() {

    if (!this.state.score) {
      return (
        <View style={styles.sensor}>
          {/* <Text>x: {this.state.x}}</Text> */}
          <Text>y: {this.state.y}}</Text>
          {/* <Text>z: {this.state.z}}</Text> */}
          {/* <Text>score: {this.state.score}}</Text> */}

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this._toggle} style={styles.button}>
              <Text>Toggle</Text>
            </TouchableOpacity>
      
            <TouchableOpacity onPress={this._custom} style={styles.button}>
              <Text>Custom</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } 
   
    else if (this.state.score) {
      return (
        <View>
          {this.handleSubmit()}
        </View>
      )
    }
    
  }
  
}





function round(n) {
  if (!n) {
    return 0;
  }

  return Math.abs(Math.floor(n * 100))
}








const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
});