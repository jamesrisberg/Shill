import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import SortableGrid from 'react-native-sortable-grid'

export default class SelectedCoinDD extends Component {

  constructor() {
    super()
    this.alphabets = ['A','B','C','D','E','F',
                      'G','H','I','J','K','L',
                     ]
  }

  getColor() {
    let r = this.randomRGB()
    let g = this.randomRGB()
    let b = this.randomRGB()
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
  randomRGB = () => 160 + Math.random()*85

  render() {
    console.log('testing')
    return (
        <View style={styles.root}>
      <SortableGrid
        blockTransitionDuration      = { 400 }
        activeBlockCenteringDuration = { 200 }
        itemsPerRow                  = { 4 }
        dragActivationTreshold       = { 200 }
        onDragRelease                = { (itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder) }
        onDragStart                  = { ()          => console.log("Some block is being dragged now!") }
      >
        {
          this.alphabets.map( (letter, index) =>
            <View key={index} style={[styles.block, { backgroundColor: this.getColor() }]}>
              <Text style={{color: 'white', fontSize: 50}}>{letter}</Text>
            </View>
          )
        }
      </SortableGrid>
      </View>
    )
  }

}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '60%'
    },
  block: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});