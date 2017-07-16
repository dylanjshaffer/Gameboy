/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class AwesomeProject extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/GBBG.png')} style={styles.backgroundImage}>
          <View style={styles.backgroundView}>
            <Text style={styles.title}>THE EASIEST GAME</Text>
            <Text style={styles.instructions}>Press start...</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.start}>START</Text>
          </TouchableOpacity>
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
  button: {
    width: '20%',
    marginLeft: '40%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#606c78',
    backgroundColor: '#606c78',
    bottom: '10%',
  },
  start: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    backgroundColor: '#606c78',
    padding: 2,
  }


});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
