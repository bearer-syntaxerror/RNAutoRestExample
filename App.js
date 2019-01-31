/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class ComponentA extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => Actions.sceneB()}>Scene A!</Text>
      </View>
    );
  }
}

class ComponentB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Scene B!</Text>
      </View>
    );
  }
}

export default class App extends Component {
  backAndroidHandler() {
    console.log("backAndroidHandler fired")
    return false
  }

  render() {
    return (
      <Router backAndroidHandler={this.backAndroidHandler}>
        <Stack key="root">
          <Scene key="sceneA" component={ComponentA} title="Scene A" inital/>
          <Scene key="sceneB" component={ComponentB} title="Scene B"/>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
