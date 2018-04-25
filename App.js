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
    


  }

    render() {
        return (
            <View style={styles.container}>
                <SwipeInterface/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f7fa',
  },
 
});
