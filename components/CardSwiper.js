import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';

import firebase from 'react-native-firebase';
import Swiper from 'react-native-deck-swiper';

import Card from './Card';

export default class CoinDetailView extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
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

    cardData = [{ name: 'Verge', ticker: 'XVG', price: 0.89},
                { name: 'Verge', ticker: 'XVG', price: 0.89},
                { name: 'Verge', ticker: 'XVG', price: 0.89},
                { name: 'Verge', ticker: 'XVG', price: 0.89},
                { name: 'Verge', ticker: 'XVG', price: 0.89},]

    render() {
        return (
            <Swiper
                cards={this.cardData}
                renderCard={(card) => {
                    return (
                        <Card card={card}/>
                    )
                }}
                onSwiped={(cardIndex) => {console.log(cardIndex)}}
                onSwipedAll={() => {console.log('onSwipedAll')}}
                cardIndex={0}
                backgroundColor={'#4FD0E9'}
                stackSize= {3}
                verticalSwipe={false}>
            </Swiper>
        )
    }
}