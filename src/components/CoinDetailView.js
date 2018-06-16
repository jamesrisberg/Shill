import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';
import Graph from './Graph';

export default class CoinDetailView extends React.Component {
    constructor() {
        super();
        this.state = {
      
        };
    }

    componentDidMount() {
        // firebase things?
    }

    render() {
        return (
            <View style={stles.root}>
                <Graph />
                <Text>{this.props.name}</Text>
                <Text>{this.props.ticker}</Text>
                <Text>{'$' + this.props.price}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
    root: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
   

});