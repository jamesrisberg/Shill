import React from 'react';
import { 
    StyleSheet, 
    View, 
} from 'react-native';


export default class SelectedCoinView extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.Swiper}>
                
            </View >
        )
    }
}

const styles = StyleSheet.create({
    Swiper: {
        flex: 1,
    },
});