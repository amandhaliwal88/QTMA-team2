import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RatingCompact from '../../components/rating';

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
        return(
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', padding: 10, alignSelf: 'center'}}>McDonald's</Text> 

                {tempRatings.map((item, index) => {
                    return(
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{item.name}</Text>
                            <RatingCompact rating={item.rating} />
                        </View>
                    )
                })}
            </View>
        )
    }
}

export default RatingsScreen