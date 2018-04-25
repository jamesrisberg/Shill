import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';

import firebase from 'react-native-firebase';

import CardSwiper from './CardSwiper';


export default class SwipeInterface extends React.Component {
  constructor() {
    super();
    this.state = {
        
    };
  }

  componentDidMount() {
    
    // firebase things?
  }

  onLike() {

  }

  onDislike() {

  }

  render() {
    return (
        <View style={styles.Swiper}>
            <CardSwiper />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    Swiper: {
        flex: 1,
        
    },
  });