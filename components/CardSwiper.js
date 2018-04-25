import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';

import Swiper from 'react-native-deck-swiper';

import Card from './Card';
import Base from './Base';

import { sendSwipeData } from '../handlers/firebase';
import { fetchCoinData } from '../CoinMarketCapHandler';

export default class CoinDetailView extends Base {
    constructor(props) {
        super(props);
        this.autoBind('onSwipedLeft', 'onSwipedRight', 'onTapCard');
        this.state = {
            coinData: []
        };
    }

    componentDidMount() {
        fetchCoinData.call(this);
        //let data = fetchCoinData();

        // firebase things?

    }

    onSwipedLeft(cardIndex) {
        console.log('Swiped Left');
        sendSwipeData(this.cardData[cardIndex].id, 'left');
    }

    onSwipedRight(cardIndex) {
        console.log('Swiped Right');
        sendSwipeData(this.cardData[cardIndex].id, 'right');
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
                            onSwipedLeft={this.onSwipedLeft}
                            onSwipedRight={this.onSwipedRight}
                            onTapCard={this.onTapCard}
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