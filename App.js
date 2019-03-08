import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import styles from './styleSheet.js'
import Accelerometer from './components/Accelerometer'
import Home from './components/Home'
import GetReady from './components/GetReady'
import Play from './components/Play'
import Results from './components/Results'
import Pitch from './components/Pitch'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      user: '',
      score: null,
      screen: 'Home'
    }
    this.goGetReady = this.goGetReady.bind(this);
    this.goPlay = this.goPlay.bind(this);
    this.goPitch = this.goPitch.bind(this);
    this.goResults = this.goResults.bind(this);
    this.goHome = this.goHome.bind(this);

    this.setUser = this.setUser.bind(this);
    this.setScore = this.setScore.bind(this);

  }

  setUser(data) {
    this.setState({user:data})
  }
  setScore(data) {
    this.setState({score:data})
  }
  
  setScreen() {
    switch (this.state.screen) {
      case 'Home' : return (< Home goGetReady={this.goGetReady} setUser={this.setUser}/>);
      case 'GetReady' : return ( < GetReady user={this.state.user} goPlay={this.goPlay}/>);
      case 'Play' : return ( < Play goPitch={this.goPitch}/>);
      case 'Pitch' : return ( < Pitch goResults={this.goResults} setScore={this.setScore}/>);
      case 'Results' : return ( < Results score={this.state.score} goGetReady={this.goGetReady} goHome={this.goHome}/>);

      default: return ( < Home />);
    }
  }

  goGetReady () {
    this.setState({screen:'GetReady'})
  }
  goPlay () {
    this.setState({screen:'Play'})
  }
  goResults () {
    this.setState({screen:'Results'})
  }
  goHome () {
    this.setState({screen:'Home'})
  }
  goPitch () {
    this.setState({screen:'Pitch'})
  }

  render() {
    return (
      <View style={styles.container}>
        {this.setScreen()}
      </View>
    );
  }
}



