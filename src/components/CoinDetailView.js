import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';

export default class CoinDetailView extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  componentDidMount() {
    // firebase things?
  }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text>{this.props.ticker}</Text>
        <Text>{'$' + this.props.price}</Text>
      </View>
    )
  }
}