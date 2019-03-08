import React from 'react';
import { Text, View , ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styleSheet.js';

let animatedPitch = 'https://media.giphy.com/media/26uf5cDsuoH8RMhd6/giphy.gif'
let lightTunnel = 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNTgwNDExNjUxNzMw/who-determined-the-speed-of-lights-featured-photo.jpg'
let baseball = 'https://www.clipartmax.com/png/middle/44-440873_baseball-ball-clip-art-baseball-clipart-transparent-background.png'

// on submit i want push user to App and then navigate to the next page
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit (e) {
    e.preventDefault;
    this.props.setUser(this.state.user);
    this.setState({user:''});
    this.props.goGetReady();
  }
  
  render() {
    let background = {uri: lightTunnel};
    let ballPic = {uri: baseball}
    return (
      <ImageBackground 
        source={background} 
        style={{width: '100%', height: '100%', opacity:30}}>

        <View style={styles.container}>
          <Text style={[styles.header, styles.whiteText]}>High Heat</Text>
          <Text style={[styles.whiteText, styles.p]}>Portable Pitch Trainer</Text>
          <Text style={[styles.whiteText, styles.p, styles.textTopMargin]}>Please sign in</Text>
          <TextInput
          style={[styles.p, styles.whiteText, {borderColor: 'gray'}]}
          placeholder="Your Name"
          onChangeText={(user) => this.setState({user})}/>

        <TouchableOpacity
         style={styles.buttonWhite}
         onPress={this.handleSubmit}>
          <Text style={{color:'black'}}> Submit </Text>
        </TouchableOpacity>

        </View>

      </ImageBackground>
    );
    
  }
}




