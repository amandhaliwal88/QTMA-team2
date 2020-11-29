import React from "react";
import {Modal, View, Text, StyleSheet,TouchableHighlight }from "react-native";
import { BarChart, Grid ,XAxis} from 'react-native-svg-charts';

export default class ReastaurantExpanded extends React.Component {
    render() {

      const fill = 'rgb(0, 30, 49)';
      const today = new Date();

      if(this.props.data != null){
        return (
          <Modal animationType="fade" transparent={true} visible={this.props.visible}>
              <View style={styles.modal}>
                  <Text style={styles.text}>{this.props.data.name}</Text>
                  <Text style={styles.text}>{this.props.data.address}</Text>
                  <Text style={styles.text}>Price: {this.props.data.price}</Text>
                  <Text style={styles.times}>Today's Hours: {this.props.data.hours[(today.getDay() + 6) % 7].value}</Text>
                  <Text style={styles.times}>Busy Times:</Text>
                  <BarChart style={{ height: 200, marginLeft: 5, marginRight: 5, marginTop: 25 }} data={this.props.data.times.filter(res=>res.value).map(ele=>ele.value)} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                    <Grid />
                    <XAxis
                          style={{ paddingTop: 10, marginLeft: 5, marginRight:5 }}
                          data={this.props.data.times.filter(res=>res.value).map(ele=>ele.value)}
                          formatLabel={(value, index) => this.props.data.times.filter(res=>res.label).map(ele=>ele.label)[index]}
                          contentInset={{ left: 18, right: 18 }}
                          svg={{ fontSize: 10, fill: '#000000' }}/>
                    </BarChart>
                  <TouchableHighlight
                  onPress={this.props.onPress}
                  underlayColor='#EAE2B7'
                >
                  <Text style={styles.closeButton}>[ Close ]</Text> 
                </TouchableHighlight>
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
      backgroundColor: '#EAE2B7',
      borderRadius: 20,
      paddingTop: '20%',
      paddingBottom: "90%",
      marginVertical: 5,
      marginHorizontal: 5,
      height: '90%',
      opacity: 0.98
    },
    text:{
      color: '#000000',
      fontSize: 30,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    times:{
      color: '#000000',
      fontSize: 17,
      marginTop: '5%',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center',
      bottom:0
    },
    closeButton:{
      color: '#000000',
      fontSize: 15,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '1%',
      bottom:0
    }
  });