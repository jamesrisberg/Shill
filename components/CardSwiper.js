import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';

import Swiper from 'react-native-deck-swiper';

import Card from './Card';

import { sendSwipeData } from '../handlers/firebase';
import { fetchCoinData } from '../CoinMarketCapHandler';

// Coin Data object
// {
// 24h_volume_usd: "3757.53"
// available_supply: "18938105.0"
// id: "insanecoin-insn"
// imgUrl: "https://s2.coinmarketcap.com/static/img/coins/128x128/260.png"
// last_updated: "1524642856"
// market_cap_usd: "951060.0"
// max_supply: "30000000.0"
// name: "InsaneCoin"
// percent_change_1h: "-0.13"
// percent_change_7d: "17.61" 
// percent_change_24h: "22.94"
// price_btc: "0.00000532"
// price_usd: "0.0502194"
// rank: "852"
// symbol: "INSN"
// total_supply: "19188105.0"
// }

export default class CoinDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coinData: []
        };

        this.onSwipedLeft = this.onSwipedLeft.bind(this);
        this.onSwipedRight = this.onSwipedRight.bind(this);
        this.onTapCard = this.onTapCard.bind(this);
    }

    componentDidMount() {
        fetchCoinData.call(this);
        //let data = fetchCoinData();

        // firebase things?

    }

    onSwipedLeft(cardIndex) {
        console.log('Swiped Left');
        sendSwipeData(this.state.coinData[cardIndex].id, 'left');
    }

    onSwipedRight(cardIndex) {
        console.log('Swiped Right');
        sendSwipeData(this.state.coinData[cardIndex].id, 'right');
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