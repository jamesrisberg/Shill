import React from 'react';
import { 
    StyleSheet, 
    View, 
} from 'react-native';

import CardSwiper from './CardSwiper';

export default class SwipeInterface extends React.Component {
    constructor() {
        super();
        this.state = {
        
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            < View style={styles.Swiper} >
                < CardSwiper />
            </ View >
        )
    }
}

const styles = StyleSheet.create({
    Swiper: {
        flex: 1,
    },
});