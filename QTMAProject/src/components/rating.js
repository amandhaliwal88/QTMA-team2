import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Star from 'react-native-vector-icons/Fontisto';

class RatingCompact extends Component {
    render() {
        return(
            <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 5, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#d4a265', borderRadius: 15}}>
                <Star name='star' size={30}/>
                <Text style={{fontSize: 30}}> {this.props.rating}/5</Text>
            </View>
        )
    }
}

class RatingDetailed extends Component {
    render() {
        return(
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 10}}>

            </View>
        )
    }
}

export default RatingCompact