
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

class Blink extends Component {

  constructor(props){
    super(props);
    this.state = {showText: true};
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText};
      });
    }, 600);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={this.props.style}>{display}</Text>
    );
  }
}

class GameboyButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity className="GameboyButton" style={this.props.style} onPress={this.props.onPress}>
        <Text style={styles.btnText}>{this.props.btnText}</Text>
      </TouchableOpacity>
    );
  }
}

export default class Gameboy extends Component {

  state = {text: "Press Start..."};

  pressStart = (event) => {
    this.setState({text: "YOU WON!!!"});
  };

  pressBack = (event) => {
    this.setState({text: "Press Start..."});
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/GBBG.png')} style={styles.backgroundImage}>
          <View style={styles.backgroundView}>
            <Text style={styles.title}>THE EASIEST GAME</Text>
            <Blink style={styles.instructions} text={this.state.text} />
          </View>
          <View style={styles.btnPad}>
            <GameboyButton style={styles.btn} btnText="BACK" onPress={this.pressBack}/>
            <GameboyButton style={styles.btn} btnText="START" onPress={this.pressStart}/>
          </View>
        </Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  backgroundView: {
    flex: 1,
    marginTop: '35%',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#202a1c',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  instructions: {
    fontSize: 16,
    paddingTop: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#202a1c',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  btnPad: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    bottom: '15%',
  },
  btn: {
    width: '20%',
    height: '15%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#606c78',
    backgroundColor: '#606c78',
  },
  btnText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    padding: 2,
  }


});

AppRegistry.registerComponent('Gameboy', () => Gameboy);
