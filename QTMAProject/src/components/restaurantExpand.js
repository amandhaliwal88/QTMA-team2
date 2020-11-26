import React from "react";
import {Modal, View, Text, StyleSheet,TouchableHighlight }from "react-native";

export default class ReastaurantExpanded extends React.Component {
    render() {
      return (
        <Modal animationType="fade" transparent={true} visible={this.props.visible} >
            <View style={styles.modal}>

                <Text style={styles.text}>{this.props.data.name}</Text>
                <Text style={styles.text}>{this.props.data.address}</Text>
                <Text style={styles.text}>Price: {this.props.data.price}</Text>
                <Text style={styles.text}>Busy Times:</Text>
                <Text style={styles.times}>Monday 7-6</Text>

                <TouchableHighlight
                onPress={this.props.onPress}
              >
                <Text style={styles.closeButton}>[ Close ]</Text> 
              </TouchableHighlight>
            </View>
        </Modal>
      );
    }
  }

  const styles = StyleSheet.create({
    modal:{
      backgroundColor: '#491900',
      borderRadius: 20,
      paddingTop: '20%',
      paddingBottom: "90%",
      marginVertical: 5,
      marginHorizontal: 5,
      height: '90%',
      opacity: 0.98
    },
    text:{
      color: '#FFFFFF',
      fontSize: 30,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    times:{
      color: '#FFFFFF',
      fontSize: 17,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center',
      bottom:0
    },
    closeButton:{
      color: '#FFFFFF',
      fontSize: 15,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '75%',
      bottom:0
    }
  });