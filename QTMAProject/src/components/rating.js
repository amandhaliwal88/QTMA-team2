import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Star from 'react-native-vector-icons/Fontisto';

class RatingCompact extends Component {
    render() {
        return(
            <View style={{display: 'flex', flexDirection: 'row', width: 120, height: 55, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#d4a265', borderRadius: 15}}>
                <Star name='star' size={35}/>
                <Text style={{fontSize: 30}}>{this.props.rating}/5</Text>
            </View>
        )
    }
}

export default RatingCompact