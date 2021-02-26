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
                <RatingDetailed rating={eagleRating} />
                {tempRatings.map((item, index) => {
                    return(
                        <View key={item.name} style={styles.restaurantRating}>
                            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{item.name}</Text>
                            <RatingCompact rating={item.rating} />
                        </View>
                    )
                })}
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
        fontSize: 30, fontWeight: 'bold', padding: 10, alignSelf: 'center'
    },
    restaurantRating: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    }
})

export default RatingsScreen