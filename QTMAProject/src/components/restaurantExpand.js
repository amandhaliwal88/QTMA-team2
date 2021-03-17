import React from "react";
import {Modal, View, Text, StyleSheet,TouchableHighlight, Image }from "react-native";
import { BarChart, Grid ,XAxis} from 'react-native-svg-charts';
import DeliveryAvailability from './deliveryAvailability';
import RatingCompact, { RatingDetailed } from './rating';

export default class RestaurantExpanded extends React.Component {
    render() {

      const fill = 'rgb(0, 30, 49)';
      const today = new Date();

      if(this.props.data != null){
        return (
          <Modal animationType="fade" transparent={true} visible={this.props.visible}>
              <View style={styles.modal}>
              <TouchableHighlight
                  onPress={this.props.onPress}
                  underlayColor='#EAE2B7'
                >
                  <Text style={styles.closeButton}>↩︎ Back</Text>
                </TouchableHighlight>
                  <Image style={styles.image} source={{uri: this.props.data.image}}/>
                  <View style={styles.topline}>
                    <Text style={styles.title}>{this.props.data.name}</Text>
                    <RatingCompact style={styles.rating} rating="4.7"/>
                  </View>
                  <Text style={styles.address}>📍 {this.props.data.address}</Text>
                  <View style={styles.topline}>
                    <Text style={styles.price}>$7<Text style={{color:'gray'}}>-</Text>$14<Text style={{color:'gray', fontSize: 15}}>/person</Text></Text>
                  <Text style={{marginRight: 20, textAlign: "right"}}><Text style={{color: 'gray'}}>Delivery Fee:</Text> $2.99</Text>

                  </View>
                  <Text style={{marginRight: 20, textAlign: "right"}}>⏱ 25<Text style={{color:'gray'}}>-</Text>30 mins</Text>

                  <View style={styles.separator}>
                  <Text style={styles.times}>Order Now:</Text>
                    <View style={{padding: 10}}></View>
                    <DeliveryAvailability uberEats={this.props.data.delivery.uberEats} doorDash={this.props.data.delivery.doorDash} skipTheDishes={this.props.data.delivery.skipTheDishes} faceDrive={this.props.data.delivery.faceDrive} size={55} padding={16}/>
                  </View>
                    <View style={{padding: 10}}></View>
              </View>
          </Modal>
        );
      }

      else{
        return (
          <View></View>
        );
      }
    }
  }

  const styles = StyleSheet.create({
    modal:{
      backgroundColor: '#ffffff',
      borderRadius: 20,
      paddingTop: '20%',
      paddingBottom: "90%",
      marginVertical: 5,
      marginHorizontal: 5,
      height: '90%',
      opacity: 0.98
    },
    topline:{
      margin: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'baseline',
    },
    address:{
      color: '#000000',
      fontSize: 15,
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 20,
      marginRight: 20,
      marginTop: -15
    },
    text:{
      color: '#000000',
      fontSize: 15,
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 20,
    },
    price:{
      color: '#000000',
      fontSize: 30,
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 20,
      marginTop: 15
    },
    title:{
      color: '#000000',
      fontSize: 30,
      marginRight: 50,
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'left',
      paddingLeft: 20
    },
    image:{
      width: "100%",
      height: 200,
      marginBottom: 10,
    },
    rating:{
      marginLeft: 30
    },
    times:{
      color: '#000000',
      fontSize: 17,
      marginTop: '5%',
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 20,
      bottom:0
    },
    separator:{
      marginTop: 20,
      paddingBottom: 20,
      borderColor: 'gray',
      borderTopWidth: 1,
      borderBottomWidth: 1
    },
    closeButton:{
      color: '#000000',
      fontSize: 15,
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'left',
      paddingLeft: 15,
      paddingBottom: 15,
      marginTop: '1%',
      bottom:0
    }
  });