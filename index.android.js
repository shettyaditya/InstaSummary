/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Button,
         FormLabel,
         SearchBar,
         FormInput} from 'react-native-elements';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput
} from 'react-native';

export default class InstaSummary extends Component {
  render() {

    return (

      <View style={styles.container}>
      <Image style={styles.searchimage} source={require('./textsearch.png')} resizeMode="contain"/>

<FormLabel>Enter URL or keywords here...</FormLabel>
<FormInput/>

        <Button
        style={{backgroundColor: 'FF0000'}}
        raised
        icon={{name: 'fire', type: 'font-awesome'}}
        title='Show me!'
        backgroundColor='#699510'/>
        <Text style={styles.instructions}>

        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  searchimage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 290,
    height: 100,
    borderWidth: 0,
    borderColor: '#00ff00'
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

AppRegistry.registerComponent('InstaSummary', () => InstaSummary);
