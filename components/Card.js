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
      <View style={styles.topRow}>
          <Image source={this.props.card.image} />
          <Text>{this.props.card.name} ({this.props.card.ticker})</Text>
      </View>
        <Text>{'$' + this.props.card.price}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ff0000',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  
});