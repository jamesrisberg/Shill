import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import firebase from 'react-native-firebase';
import Base from './Base';

import { colors, defaults, fonts, mixins, variables } from '../styles';
import { toggleSelectedCoin } from '../reducers/coin';

class Card extends Base {
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
        this.props.toggleSelectedCoin(this.props);
        Actions.coinDetail();
        
    }
    render() {
        
        console.log(this.props)
        const {
            imgUrl,
            market_cap_usd,
            name,
            symbol,
            price_btc,
            price_usd,
            percent_change_24h,
        } = this.props;

        let priceChangeDay = 'postive'
        if (percent_change_24h != null) {
            priceChangeDay = percent_change_24h.indexOf('-') != -1 ? 'negative' : 'postive';
        }
       

        return (
           
            <View
                style={[styles.card]}
            >
                <View
                    style={styles.imageContainer}
                >
                    <Image 
                        source={{uri: imgUrl}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.ticker}>{symbol}</Text>
                </View>

               
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
                <View style={styles.rowContainer}>
                    {
                        percent_change_24h !== null && 
                        <View style={styles.secondStatsContainer}>
                        
                            <Text style={styles.secondStatsTitle}>Price Chnge in 24h</Text>
                            <Text style={[styles.secondStats, styles[priceChangeDay]]}>{percent_change_24h}</Text>
                        </View>
                    }
                    
                    <View style={styles.secondStatsContainer}>
                        <Text style={styles.secondStatsTitle}>Price</Text>
                        <Text style={styles.secondStats}>{'$' +price_usd}</Text>
                    </View>
                </View>
                    
                <TouchableWithoutFeedback 
                    onPress={() => this.handlePress()}
                >
                    <View style={styles.cta}>
                        <Image 
                                source={{uri: 'https://s3.us-east-2.amazonaws.com/setcoins.com/images/seekIcon.png'}}
                                style={styles.seekImage}
                            />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    seekImage: {
        width: 40,
        height: 40,
    },
    nameContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
    },
    cta: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: colors.pink,
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: {
            height: 9,
            width: 9
        },
        marginBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondStatsContainer: {
        width: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    rowContainer:  {
        width: '65%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    card: {
        height: variables.SCREEN_HEIGHT * .86,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#102957',
        borderRadius: 8,
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOpacity: 0.5,
        shadowRadius: 20,
        shadowOffset: {
            height: 9,
            width: 7
        }
    },
    imageContainer: {
        marginTop: 15,
        width: 160,
        height: 160,
        backgroundColor: colors.white,
        borderRadius: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: {
            height: 9,
            width: 9
        }
    },
    image: {
        width: 130,
        height: 130,
    },
    title: {
        fontSize: 35,
        color: '#10254E',
        textAlign: 'center',
        color: colors.white,
    },
    postive: {
        color: colors.green,
    },
    negative: {
        color: colors.pink
    },
    ticker: {
        fontSize: 30,
        color: colors.white,
    },
    secondStatsTitle: {
        fontSize: 11,
        color: colors.skyBlue,
        marginBottom: 6,
    },
    secondStats: {
        color: colors.white,
        fontSize: 17,
        alignSelf: 'center',
    }

});


function mapStateToProps({coin}) {
    return {
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleSelectedCoin: (coin) => dispatch(toggleSelectedCoin(coin)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);