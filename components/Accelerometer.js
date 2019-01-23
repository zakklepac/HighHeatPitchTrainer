import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo';

export default class AccelerometerSensor extends React.Component {
    constructor (props){
        super(props);
        this.state={
            accelerometerData: {},
            start: 0,
            finish: 0,
        }
    }

    componentDidMount(){
        this.readAccelerometer();
    }

    componentWillUnmount(){
        setTimeout(Accelerometer.removeAllListeners(), 1000);
    }
    
    //read accelerometer
    readAccelerometer(){
        this.subscription = Accelerometer.addListener(accelerometerData => {
                this.setState({ accelerometerData });
                this.getStart()
                this.getFinish()
          })
          
    }

    //"diagnose speed"
    getStart(){
        let { x, y, z } = this.state.accelerometerData;
        let data = y
        
        if (data <= 0) {
            let start = Date.now()
            this.setState({ start: start })
        }
    }

    getFinish(){
        let { x, y, z } = this.state.accelerometerData;
        let data = y
        
        if (data > 0) {
            let finish = Date.now()
            this.setState({ finish: finish })
        }

    }

    toggle(){
        if (start !== 0 && finish !== 0)
        return true
    }

    throwPitch = () =>{
        Accelerometer.setUpdateInterval(8)
    }

  render() {
    let { y } = this.state.accelerometerData;
    let start = this.state.start;
    let finish = this.state.finish;

    function round(n) {
        if (!n) {
          return 0;
        }
      
        return Math.floor(n * 100) / 100;
      }
      
      function getScore(a, b){
          if (!a && !b){
              return 0
          }
      
          return (a - b) 
      }

    return (
      <View style={styles.sensor}>
        <Text>HIGH HEAT PITCHING</Text>
        <Text>windup: {round(y)} pitch score: { getScore(finish, start) }</Text>
      </View>
    );
  }
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