import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';

import Swiper from 'react-native-deck-swiper';

import Card from './Card';

import { sendSwipeData } from '../handlers/firebase';

export default class CoinDetailView extends React.Component {
    constructor() {
        super();
        this.state = {

        };

        this.onSwipedLeft = this.onSwipedLeft.bind(this);
        this.onSwipedRight = this.onSwipedRight.bind(this);
        this.onTapCard = this.onTapCard.bind(this);
    }

    componentDidMount() {
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

    cardData = [{ id: '1', name: 'Verge', ticker: 'XVG', price: 0.89},
                { id: '2', name: 'Verge', ticker: 'XVG', price: 0.89},
                { id: '3', name: 'Verge', ticker: 'XVG', price: 0.89},
                { id: '4', name: 'Verge', ticker: 'XVG', price: 0.89},
                { id: '5', name: 'Verge', ticker: 'XVG', price: 0.89},]

    render() {
        return (
            <Swiper
                cards={this.cardData}
                renderCard={(card) => {
                    return (
                        <Card card={card}/>
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
        )
    }
}