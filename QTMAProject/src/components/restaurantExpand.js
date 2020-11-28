import React from "react";
import {Modal, View, Text, StyleSheet,TouchableHighlight }from "react-native";
import { BarChart, Grid ,XAxis} from 'react-native-svg-charts';

export default class ReastaurantExpanded extends React.Component {
    render() {

      const fill = 'rgb(134, 65, 244)'
      const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]

      return (
        <Modal animationType="fade" transparent={true} visible={this.props.visible} >
            <View style={styles.modal}>

                <Text style={styles.text}>{this.props.data.name}</Text>
                <Text style={styles.text}>{this.props.data.address}</Text>
                <Text style={styles.text}>Price: {this.props.data.price}</Text>
                <Text style={styles.times}>Busy Times:</Text>
                <BarChart style={{ height: 200, marginLeft: 5, marginRight: 5, marginTop: 25 }} data={this.props.data.times.filter(res=>res.value).map(ele=>ele.value)} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                  <Grid />
                  <XAxis
                        style={{ paddingTop: 10, marginLeft: 5, marginRight:5 }}
                        data={this.props.data.times.filter(res=>res.value).map(ele=>ele.value)}
                        formatLabel={(value, index) => this.props.data.times.filter(res=>res.label).map(ele=>ele.label)[index]}
                        contentInset={{ left: 18, right: 18 }}
                        svg={{ fontSize: 10, fill: '#FFFFFF' }}/>
                  </BarChart>
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
      marginTop: '5%',
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
      marginTop: '10%',
      bottom:0
    }
  });