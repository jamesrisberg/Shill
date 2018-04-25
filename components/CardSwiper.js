import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';

import firebase from 'react-native-firebase';
import Swiper from 'react-native-deck-swiper';

import Card from './Card';
import Base from './Base';
import { fetchCoinData } from '../CoinMarketCapHandler';

export default class CoinDetailView extends Base {
    constructor(props) {
        super(props);
        this.autoBind('onSwipeLeft');
        this.state = {
            coinData: []
        };
    }

    componentDidMount() {
        fetchCoinData.call(this);
        //let data = fetchCoinData();

        // firebase things?
    }

    onSwipeLeft(cardIndex) {
        console.log('Swiped Left');
    }

    onSwipeRight(cardIndex) {
        console.log('Swiped Right');
    }

    onTapCard(cardIndex) {
        console.log('Tapped');
    }

    

    render() {
        console.log('CoinDetailView state.coinData');
        console.log(this.state.coinData);
        return (
            <View
                style={styles.Swiper}
            >
                {
                    this.state.coinData.length > 1 ?
                        <Swiper
                            cards={this.state.coinData}
                            renderCard={(card) => {
                                return (
                                    <Card {...card}/>
                                )
                            }}
                            onSwiped={(cardIndex) => {console.log(cardIndex)}}
                            onSwipedAll={() => {console.log('onSwipedAll')}}
                            onSwipedLeft={this.onSwipedLeft}
                            cardIndex={0}
                            backgroundColor={'#4FD0E9'}
                            stackSize= {3}
                            verticalSwipe={false}>
                        </Swiper>
                    :
                        <View>
                            <Text>Loading</Text>
                        </View>
                }
            </View>

           
        )
    }
}

const styles = StyleSheet.create({
    Swiper: {
       
    },
  });