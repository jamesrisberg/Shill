import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';

import firebase from 'react-native-firebase';
import Base from './Base';

export default class Card extends Base {
    constructor(props) {
        super(props);
        this.autoBind('handlePress');
        this.state = {
            selected: false
        };
    }

    componentDidMount() {
    // firebase things?
    }
    handlePress() {
        // console.log('card was clicked');
        // console.log(this.props);
        // this.setState({
        //     selected: !this.state.selected
        // });
    }
    render() {
        

        const {
            imgUrl,
            market_cap_usd,
            name,
            symbol,
            price_btc,
            price_usd,
        } = this.props;

        

        return (
            <TouchableWithoutFeedback 
                onPress={() => this.handlePress()}
            >
                <View
                    style={[styles.card]}
                >
                    <View>
                        <Image 
                            source={{uri: imgUrl}}
                            style={styles.image}
                        />
                    </View>
                    
                    <Text style={styles.ticker}>{symbol}</Text>
                    <Text style={styles.title}>{name}</Text>
                    <View style={styles.divider}/>
                    <View style={styles.coinDataContainer}>

                        <View style={styles.rowContainer}>
                            <View style={styles.secondStatsContainer}>
                                
                                <Text style={styles.secondStatsTitle} >Market Cap</Text>
                                <Text  style={styles.secondStats} >$ {market_cap_usd}</Text>s
                            </View>
                            <View style={styles.secondStatsContainer}>
                                
                                <Text style={styles.secondStatsTitle}>Prince in BTC</Text>
                                <Text style={styles.secondStats}>{ price_btc }</Text>
                            </View>
                        </View>

                        <View style={styles.coinDataContainer}>
                            <Text style={styles.secondStatsTitle}>Price</Text>
                            <Text style={styles.price}>{'$' +price_usd}</Text>
                        </View>
                        
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    coinDataContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    secondStatsContainer: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
       
    },
    rowContainer:  {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: 'rgb(49, 53, 66)',
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: {
            height: 4
        }
    },
    imageContainer: {
        width: 128,
        height: 128,
    },
    image: {
        width: 128,
        height: 128,
        //marginTop: 15,
        marginBottom: 45,
        // borderRadius: 50,
        // borderColor: 'white',
        // shadowColor: 'rgb(49, 53, 66)',
        // shadowOpacity: 0.5,
        // shadowRadius: 6,
        // shadowOffset: {
        //     height: 4
        // },
        // borderWidth: 3,
    },
    title: {
        fontSize: 35,
        color: '#10254E',
        textAlign: 'center',
        //fontWeight: 'bold',
        
    },
    ticker: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#DCE5EA',
        marginBottom: 5,
    },
    divider: {
        width: '70%',
        //backgroundColor: 'black',
        height: 3,
        borderRadius: 8,
        marginBottom: 20,
        marginTop: 10,
    },
    price: {
        color: '#10254E',
        fontSize: 30,
    },
    secondStatsTitle: {
        fontSize: 15,
        color: '#DCE5EA',
        marginBottom: 6,
    },
    secondStats: {
        color: '#10254E',
        fontSize: 20,
        alignSelf: 'center',
    }

});