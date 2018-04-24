import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';

export default class Card extends React.Component {
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
      <View style={styles.card}>
        <Text>{this.props.card.name}</Text>
        <Text>{this.props.card.ticker}</Text>
        <Text>{'$' + this.props.card.price}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
});