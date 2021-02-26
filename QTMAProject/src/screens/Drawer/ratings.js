import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RatingCompact, { RatingDetailed } from '../../components/rating';

const tempRatings = [
    {
        name: 'Uber Eats',
        rating: 5
    },
    {
        name: 'DoorDash',
        rating: 4
    },
    {
        name: 'SkipTheDishes',
        rating: 4
    },
    {
        name: 'Facedrive Foods',
        rating: 3
    }
]

class RatingsScreen extends Component {
    render() {

        let eagleRating = 0;
        for (let x of tempRatings) {
            eagleRating += x.rating;
        }
        eagleRating /= tempRatings.length;
        eagleRating = Math.round(eagleRating);

        return(
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={styles.restaurantText}>McDonald's</Text> 
                <Text style={styles.ratingText}>Eagle Rating</Text>
                <RatingDetailed rating={eagleRating} detailedRatings={tempRatings} />
                <Text style={styles.ratingText}>Click on the stars for more detailed information</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    restaurantText: {
        fontSize: 35,
        fontWeight: 'bold',
        padding: 10
    },
    ratingText: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        alignSelf: 'center'
    }
})

export default RatingsScreen