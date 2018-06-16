import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text
} from 'react-native';
import { connect } from 'react-redux';

import Base from './Base';

class SelectedCoinView extends Base {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {

        console.log('SelectedCoinView');
        console.log(this.props);

        return (
            <View style={styles.Swiper}>
                <Text>SelectedCoinView</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Swiper: {
        flex: 1,
    },
});


function mapStateToProps({coin}) {
    return {
        selectedCoin: coin.selectedCoin
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleSelectedCoin: (coin) => dispatch(toggleSelectedCoin(coin)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedCoinView);