import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';
import { fetchCoinData } from './CoinMarketCapHandler';

import SwipeInterface from './components/SwipeInterface';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      coinData: []
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
    console.log('testing if mounted')
    fetchCoinData.call(this);


  }

    render() {
        return (
            <View>
                <SwipeInterface/>
            </View>
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
  logo: {
    height: 80,
    marginBottom: 16,
    marginTop: 32,
    width: 80,
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
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
