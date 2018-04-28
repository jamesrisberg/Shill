import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';

import Swiper from 'react-native-deck-swiper';

import Card from './Card';
import Base from './Base';

import { sendSwipeData } from '../handlers/firebase';
import { fetchCoinData } from '../CoinMarketCapHandler';

export default class CoinDetailView extends Base {
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


    constructor(props) {
        super(props);
        this.autoBind('onSwipedLeft', 'onSwipedRight', 'onTapCard', 'clickedLeft');
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
        //sendSwipeData(this.state.coinData[cardIndex].id, 'left');
    }

    onSwipedRight(cardIndex) {
        console.log('Swiped Right');
        //sendSwipeData(this.state.coinData[cardIndex].id, 'right');
    }

    onTapCard(cardIndex) {
        console.log('Tapped');
    }
    clickedLeft(){
        //this.swiper.swipeLeft
    }
    // swipeLeft = () => {
    //     this.swiper.swipeLeft()
    // };
    render() {
        
        return (
            <View
                style={styles.Swiper}
            >
                {
                    this.state.coinData.length > 1 ?
                        <View style={styles.main}>
                            <Swiper
                                cards={this.state.coinData}
                                ref={swiper => {
                                    this.swiper = swiper
                                }}
                                renderCard={(card) => {
                                    return (
                                        <Card {...card}/>
                                    )
                                }}
                                backgroundColor={'#DCE5EA'}
                                onSwipedLeft={this.onSwipedLeft}
                                onSwipedRight={this.onSwipedRight}
                                onTapCard={this.onTapCard}
                                cardIndex={0}
                                stackSize= {3}
                                verticalSwipe={false}
                                
                            >
                                
                                
                            </Swiper>
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity 
                                    style={styles.buttonContainer}
                                    onPress={this.clickedLeft}
                                >
                                    <Image 
                                        source={require("../assets/Red_Candles.png")}
                                        style={styles.images}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Image 
                                        source={ require("../assets/Green_Candles.png")}
                                        style={styles.images}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
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
    main: {
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    buttonsContainer: {
        marginTop: 25,
        width: '90%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom:  10,
    },
    buttonContainer: {
        width: 90,
        height: 90,
        borderRadius: 50,
        backgroundColor: '#ffffff',
        shadowColor: 'rgb(49, 53, 66)',
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: {
            height: 4
        },
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    images: {
        height: 60,
        width: 60,

    }
  });