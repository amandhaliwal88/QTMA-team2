import React from "react";
import {Modal, View, Text, StyleSheet,TouchableHighlight }from "react-native";

export default class ReastaurantExpanded extends React.Component {
    render() {
      return (
        <Modal animationType="slide" transparent={false} visible={this.props.visible} >
            <View>
                <Text>This is a modal</Text>
                <Text>Title: {this.props.data}</Text>
                <TouchableHighlight
                onPress={this.props.onPress}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
        </Modal>
      );
    }
  }

  const styles = StyleSheet.create({
    
  });