import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Star from 'react-native-vector-icons/FontAwesome';

class RatingCompact extends Component {
    render() {
        return(
            <View style={styles.ratingCards}>
                <Star name='star' size={30} />
                <Text style={styles.ratingCardsText}> {this.props.rating}/5</Text>
            </View>
        )
    }
}

export class RatingDetailed extends Component {
    render() {
        return(
            <View style={styles.ratingCardsDetailed}>
                {Array(this.props.rating).fill(<Star name='star' size={30}/>)}
                {Array(5 - this.props.rating).fill(<Star name='star-o' size={30}/>)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ratingCards: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#d4a265',
        borderRadius: 15
      },
      ratingCardsText: {
        fontSize: 30
      },
      ratingCardsDetailed: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }
})

export default RatingCompact