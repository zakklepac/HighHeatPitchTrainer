import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo';

export default class AccelerometerSensor extends React.Component {
    constructor (props){
        super(props);
        this.state={
            accelerometerData: {},
            score: null
        }
    }

    componentDidMount(){
        this.readAccelerometer();
        this.getScore();
    }

    componentWillUnmount(){
        this.toggle()
    }

    //read accelerometer
    readAccelerometer(){
            Accelerometer.addListener(accelerometerData => {
                this.setState({ accelerometerData });
          })
    }

    //"diagnose speed"
    getScore(accelerometerData){
        let data = accelerometerData.y
        let start = Date.now()
        let finish = Date.now()
        let score
        
        if (data === 0) {
            start;
            if (data > 0) {
                    finish;
                    score = (finish - start) * -1
                    this.setState({ score: score })
            }
        }
    }

    toggle(){
        if (score !== null)
        return true
    }

    throwPitch = () =>{
        Accelerometer.setUpdateInterval(15)
    }

}