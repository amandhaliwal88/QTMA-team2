import React from "react";
import {View, Image, TouchableOpacity, Linking} from 'react-native';

import UberEats_logo from '../assets/ubereats.png';
import SkipDishes_logo from '../assets/skipthedishes.png';
import FaceDrive_logo from '../assets/fd.png';
import DoorDash_logo from '../assets/doordash.png';
import {Grayscale} from 'react-native-color-matrix-image-filters';


export default class DeliveryAvailability extends React.Component {

    render(){
        let uberEats, doordash, skipthedishes, facedrive;

        if(this.props.uberEats){
            uberEats = 
            <TouchableOpacity onPress={() => {Linking.openURL("https://ubereats.com/ca")}}>
                <Image source={UberEats_logo} style={{width: this.props.size, height:this.props.size}} alt="uber logo"/>
            </TouchableOpacity>
        }

        else{
            uberEats = <Grayscale>
                        <Image source={UberEats_logo} style={{width: this.props.size, height:this.props.size, opacity:0.7}} alt="uber logo tinted"/>
                    </Grayscale>
        }

        if(this.props.doorDash){
            doordash = 
            <TouchableOpacity onPress={() => {Linking.openURL("https://www.doordash.com/en-CA")}}>
                <Image source={DoorDash_logo} style={{width: this.props.size, height:this.props.size}} alt="door dash logo"/>
            </TouchableOpacity>
        }

        else{
            doordash = <Grayscale>
                        <Image source={DoorDash_logo} style={{width: this.props.size, height:this.props.size, opacity:0.7}} alt="door dash logo tinted"/>
                    </Grayscale>
        }

        if(this.props.skipTheDishes){
            skipthedishes = 
            <TouchableOpacity onPress={() => {Linking.openURL("https://skipthedishes.com/")}}>
                <Image source={SkipDishes_logo} style={{width: this.props.size, height:this.props.size}} alt="skip the dishes logo"/>
            </TouchableOpacity>
        }

        else{
            skipthedishes = <Grayscale>
                        <Image source={SkipDishes_logo} style={{width: this.props.size, height:this.props.size, opacity:0.7}} alt="skip the dishes logo tinted"/>
                    </Grayscale>
        }

        if(this.props.faceDrive){
            facedrive = 
            <TouchableOpacity onPress={() => {Linking.openURL("https://orders.facedrive-foods.com/")}}>
                <Image source={FaceDrive_logo} style={{width: this.props.size, height:this.props.size}} alt="face drive logo"/>
            </TouchableOpacity>
        }

        else{
            facedrive = <Grayscale>
                        <Image source={FaceDrive_logo} style={{width: this.props.size, height:this.props.size, opacity:0.7}} alt="face drive logo tinted"/>
                    </Grayscale>
        }

        return(
            <View flexDirection='row'>
            <View style={{padding:this.props.padding}}></View>
            {uberEats}
            <View style={{padding:this.props.padding}}></View>
            {doordash}
            <View style={{padding:this.props.padding}}></View>
            {skipthedishes}
            <View style={{padding:this.props.padding}}></View>
            {facedrive}
            <View style={{padding:this.props.padding}}></View>
            </View>
        )
    }
}