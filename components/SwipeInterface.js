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
            <CardSwiper/>
            <Button 
                title='Like'
                onPress={() => {}}
            >
                Like
            </Button>
            <Button 
                title='Dislike'
                onPress={() => {}}
            >
                Dislike
            </Button>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    Swiper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: '#ff0000',
    },
  });