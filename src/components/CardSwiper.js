import React from 'react';
import { 
    StyleSheet, 
    Image, 
    Text, 
    View, 
    TouchableOpacity,
    Animated
} from 'react-native';

import Swiper from 'react-native-deck-swiper';
import { connect } from 'react-redux';

import Card from './Card';
import Base from './Base';

import { sendSwipeData } from '../handlers/firebase';
import { fetchCoins } from '../reducers/coin';

import { colors, defaults, fonts, mixins, variables } from '../styles';

const arr = [];

for (var i = 0; i < 500; i++) {
  arr.push(i)
}

class CardSwiper extends Base {


    constructor(props) {
        super(props);
        this.autoBind('onSwipedLeft', 'onSwipedRight', 'onTapCard', 'clickedLeft', 'clickedRight', 'animate');
        this.animatedValue = [];
        arr.forEach((value) => {
            this.animatedValue[value] = new Animated.Value(0)
        })
    }
    animate () {
        const animations = arr.map((item) => {
            return Animated.timing(
                this.animatedValue[item],
                {
                  toValue: 1,
                  duration: 10
                }
            )
        })
        Animated.sequence(animations).start()
    }
    componentDidMount() {
        //fetchCoinData.call(this);
        this.props.fetchCoins();
        this.animate()
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
        this.swiper.swipeLeft()
    }

    clickedRight(){
        this.swiper.swipeRight()
    }

    render() {
        
        const animations = arr.map((a, i) => {
            return <Animated.View key={i} style={{opacity: this.animatedValue[a], height: 50, width: 50, backgroundColor: i % 2 == 0 ? colors.blue : colors.white, marginLeft: 3, marginRight: 3, marginTop: 3, borderRadius: 100, }} />
        })


        return (
            <View
                style={styles.main}
            >
                {
                    this.props.coins.length > 1 ?
                        <View style={styles.main}>
                            <View style={styles.swipperContainer}>
                                <Swiper
                                    cards={this.props.coins}
                                    ref={swiper => {
                                        this.swiper = swiper
                                    }}
                                    renderCard={(card) => {
                                        return  ( <Card {...card} /> ); 
                                    }}
                                    backgroundColor={colors.darkBlue}
                                    onSwipedLeft={this.onSwipedLeft}
                                    onSwipedRight={this.onSwipedRight}
                                    onTapCard={this.onTapCard}
                                    cardIndex={0}
                                    stackSize= {3}
                                    verticalSwipe={false}
                                    
                                />
                            </View>
                            {
                                // <View style={styles.buttonsContainer}>
                                //     <TouchableOpacity 
                                //         style={styles.buttonContainer}
                                //         onPress={this.clickedLeft}
                                //     >
                                //         <Image 
                                //             source={require("../assets/Red_Candles.png")}
                                //             style={styles.images}
                                //         />
                                //     </TouchableOpacity>

                                //     <TouchableOpacity 
                                //         style={styles.buttonContainer}
                                //         onPress={this.clickedRight}
                                //     >
                                //         <Image 
                                //             source={ require("../assets/Green_Candles.png")}
                                //             style={styles.images}
                                //         />
                                //     </TouchableOpacity>
                                // </View>
                            }
                            
                        </View>
                    :
                        <View style={styles.loading} >
                            {animations}
                        </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        height: variables.SCREEN_HEIGHT,
        flexDirection: 'column',
        backgroundColor: colors.darkBlue,
    },
    loading: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: variables.SCREEN_HEIGHT * .2,
    },
    swipperContainer: {
        width: variables.SCREEN_WIDTH,
        height: variables.SCREEN_HEIGHT * .9,
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: 90,
        height: 90,

        borderRadius: 50,
        
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


function mapStateToProps({coin}) {
    return {
        ...coin
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCoins: () => dispatch(fetchCoins()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CardSwiper);