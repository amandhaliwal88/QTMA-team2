import React from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {View,Text} from "react-native";



export default class Pricing extends React.Component {

    render(){
        let price =<View></View>;
        if (this.props.price == "$"){
            price = 
            <View style={{flex:1, flexDirection:'row'}}>
                <FontAwesome style={{padding:2, color:'#000000'}}name='usd' size={20}/>
                <FontAwesome style={{padding:2, color:'#D0D0D0'}}name='usd' size={20}/>
                <FontAwesome style={{padding:2, color:'#D0D0D0'}} name='usd' size={20}/>
            </View>

        }

        if(this.props.price == "$$"){
            price =
            <View style={{flex:1, flexDirection:'row'}}>
                <FontAwesome style={{padding:2, color:'#000000'}}name='usd' size={20}/>
                <FontAwesome style={{padding:2, color:'#000000'}}name='usd' size={20}/>
                <FontAwesome style={{padding:2, color:'#D0D0D0'}} name='usd' size={20}/>
            </View>
        }

        if(this.props.price == "$$$"){
            price =
            <View style={{flex:1, flexDirection:'row'}}>
                <FontAwesome style={{padding:2, color:'#000000'}}name='usd' size={20}/>
                <FontAwesome style={{padding:2, color:'#000000'}}name='usd' size={20}/>
                <FontAwesome style={{padding:2, color:'#000000'}} name='usd' size={20}/>
            </View>
        }
 
        return(
            <View>
            {price}
            </View>
        )
    }
}