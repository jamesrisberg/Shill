import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text
} from 'react-native';
import { connect } from 'react-redux';

import Base from './Base';
import Graph from './Graph';
import SelectedCoinDD from './SelectedCoinDD';

import { fetchCoinGraphData } from '../reducers/coin';
import { colors, defaults, fonts, mixins, variables } from '../styles';

class SelectedCoinView extends Base {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchCoinGraphData(this.props.selectedCoin.id)
    }

    render() {
        console.log('SelectedCoinView')
        console.log(this.props);
        return (
            <View style={styles.root}>
                
                <Text>SelectedCoinView</Text>
                <SelectedCoinDD />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: colors.darkBlue
    },
});


function mapStateToProps({coin}) {
    return {
        ...coin
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleSelectedCoin: (coin) => dispatch(toggleSelectedCoin(coin)),
        fetchCoinGraphData: (name) => dispatch(fetchCoinGraphData(name)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedCoinView);