import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import SortableGrid from 'react-native-sortable-grid';
import { connect } from 'react-redux';
import  changeCase from 'change-case';

import Base from './Base';

import { colors, defaults, fonts, mixins, variables } from '../styles';


const TextCon = ((props) => {
    return (
        <View style={styles.tile}>
            <Text style={styles.tileTitle}>
                {props.title}
            </Text>
            {props.children}
        </View>
    );
});

class SelectedCoinDD extends Base {
    constructor() {
        super()
        this.autoBind('renderTiles');
    }
    renderTiles() {
        let dataTiles = [];
        let keyIndex = 0;
        for (var key in this.props.selectedCoin) {
            if (this.props.selectedCoin[key] == null) {
                continue
            } else if (key == 'imgUrl' ) {
                dataTiles.push(
                    <TextCon 
                        key={keyIndex}
                        title={'Logo'}
                    >
                        <Image 
                            source={{uri: this.props.selectedCoin[key]}}
                            style={styles.tileImage}
                        />
                    </TextCon>
                )
            } else if (
                key == 'percent_change_1h' || 
                key == 'percent_change_7d' || 
                key == 'percent_change_24h'
            ) {
                var direction = this.props.selectedCoin[key].indexOf('-') != -1 ? 'negative' : 'postive';
               
                dataTiles.push(
                    <TextCon 
                        key={keyIndex}
                        title={changeCase.titleCase(key)}
                    >
                        <Text style={[styles.tileData, styles[direction]]}>{this.props.selectedCoin[key]}</Text>
                    </TextCon>
                )
            }  else {
                dataTiles.push(
                    <TextCon 
                        key={keyIndex}
                        title={changeCase.titleCase(key)}
                    >
                        <Text style={styles.tileData}>{this.props.selectedCoin[key]}</Text>
                    </TextCon>
                )
            }
            keyIndex++
            

        }
        console.log(dataTiles);
        return dataTiles
    }

 
  render() {


    return (
        <View style={styles.root}>
          <SortableGrid
            blockTransitionDuration={400}
            activeBlockCenteringDuration={200}
            itemsPerRow={2}
            dragActivationTreshold       = { 200 }
            onDragRelease                = { (itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder) }
            onDragStart                  = { ()          => console.log("Some block is being dragged now!") }
          >
        {
          this.renderTiles()
        }
      </SortableGrid>
      </View>
    )
  }

}


function mapStateToProps({coin}) {
    return {
        ...coin
    };
}

function mapDispatchToProps(dispatch) {
    return {
       
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCoinDD);

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '60%'
    },
    tile: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue,
    },
    tileImage: {
        marginBottom: 8,
        width: 50,
        height: 50,
    },
    tileTitle: {
        marginTop: 15,
        color: colors.skyBlue,
        fontSize: 15,
    },
    tileData: {
        color: colors.white,
        fontSize: 20,
    },
    postive: {
        color: colors.green,
    },
    negative: {
        color: colors.pink
    },

    block: {
       
    }
});