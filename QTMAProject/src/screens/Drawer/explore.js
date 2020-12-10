import React, {Component} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import signout from '../../firebase/functions';
import auth from '@react-native-firebase/auth';
import {Searchbar} from 'react-native-paper';

import {Avatar, Button, Title, Card, IconButton} from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import ReastaurantExpanded from '../../components/restaurantExpand';

class ExploreScreen extends Component {
    state = {
        search: '',
        modalVisable: false,
        restaurants: [
          {
            id: "1",
            name: "McDonald's",
            address: "285 Princess Street",
            price: "$",
            hours: [
              {value: "24 Hours", label: 'Monday',},
              {value: "24 Hours", label: 'Tuesday',},
              {value: "24 Hours", label: 'Wednesday',},
              {value: "24 Hours", label: 'Thursday',},
              {value: "24 Hours", label: 'Friday',},
              {value: "24 Hours", label: 'Saturday',},
              {value: "24 Hours", label: 'Sunday',},
              ],
            times: [
              {value: 50, label: 'Monday',},
              {value: 10, label: 'Tuesday',},
              {value: 40, label: 'Wednesday',},
              {value: 95, label: 'Thursday',},
              {value: 85, label: 'Friday',},
              {value: 95, label: 'Saturday',},
              {value: 85, label: 'Sunday',},
              ]
          },
          {
            id: "2",
            name: "Sima Sushi",
            address: "66 Princess St",
            price: "$$",
            hours: [
              {value: "12:00 AM - 10:00 PM", label: 'Monday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Tuesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Wednesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Thursday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Friday',},
              {value:  "12:00 AM - 6:00 PM", label: 'Saturday',},
              {value:  "12:00 AM - 5:00 PM", label: 'Sunday',},
              ],
            times: [
              {value: 50, label: 'Monday',},
              {value: 10, label: 'Tuesday',},
              {value: 40, label: 'Wednesday',},
              {value: 95, label: 'Thursday',},
              {value: 85, label: 'Friday',},
              {value: 95, label: 'Saturday',},
              {value: 85, label: 'Sunday',},
              ]
          },
          {
            id: "3",
            name: "Lone Star Texas Grill",
            address: "100 placeholder st.",
            price: "$$$",
            hours: [
              {value: "12:00 AM - 10:00 PM", label: 'Monday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Tuesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Wednesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Thursday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Friday',},
              {value:  "12:00 AM - 6:00 PM", label: 'Saturday',},
              {value:  "12:00 AM - 5:00 PM", label: 'Sunday',},
              ],
            times: [
              {value: 50, label: 'Monday',},
              {value: 10, label: 'Tuesday',},
              {value: 40, label: 'Wednesday',},
              {value: 95, label: 'Thursday',},
              {value: 85, label: 'Friday',},
              {value: 95, label: 'Saturday',},
              {value: 85, label: 'Sunday',},
              ]
          },
          {
            id: "4",
            name: "Stooley's",
            address: "100 placeholder st.",
            price: "$",
            hours: [
              {value: "12:00 AM - 10:00 PM", label: 'Monday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Tuesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Wednesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Thursday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Friday',},
              {value:  "12:00 AM - 6:00 PM", label: 'Saturday',},
              {value:  "12:00 AM - 5:00 PM", label: 'Sunday',},
              ],
            times: [
              {value: 50, label: 'Monday',},
              {value: 10, label: 'Tuesday',},
              {value: 40, label: 'Wednesday',},
              {value: 95, label: 'Thursday',},
              {value: 85, label: 'Friday',},
              {value: 95, label: 'Saturday',},
              {value: 85, label: 'Sunday',},
              ]
          },
          {
            id: "5",
            name: "The Brass",
            address: "100 placeholder st.",
            price: "$$",
            hours: [
              {value: "12:00 AM - 10:00 PM", label: 'Monday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Tuesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Wednesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Thursday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Friday',},
              {value:  "12:00 AM - 6:00 PM", label: 'Saturday',},
              {value:  "12:00 AM - 5:00 PM", label: 'Sunday',},
              ],
            times: [
              {value: 50, label: 'Monday',},
              {value: 10, label: 'Tuesday',},
              {value: 40, label: 'Wednesday',},
              {value: 95, label: 'Thursday',},
              {value: 85, label: 'Friday',},
              {value: 95, label: 'Saturday',},
              {value: 85, label: 'Sunday',},
              ]
          },
          {
            id: "6",
            name: "Kpop Sub Sushi",
            address: "481 Princess Street",
            price: "$",
            hours: [
              {value: "12:00 AM - 10:00 PM", label: 'Monday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Tuesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Wednesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Thursday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Friday',},
              {value:  "12:00 AM - 6:00 PM", label: 'Saturday',},
              {value:  "12:00 AM - 5:00 PM", label: 'Sunday',},
              ],
            times: [
              {value: 30, label: 'Monday',},
              {value: 20, label: 'Tuesday',},
              {value: 50, label: 'Wednesday',},
              {value: 80, label: 'Thursday',},
              {value: 85, label: 'Friday',},
              {value: 90, label: 'Saturday',},
              {value: 55, label: 'Sunday',},
              ]
          },
          {
            id: "7",
            name: "Quesada",
            address: "100 placeholder st.",
            price: "$",
            hours: [
              {value: "12:00 AM - 10:00 PM", label: 'Monday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Tuesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Wednesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Thursday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Friday',},
              {value:  "12:00 AM - 6:00 PM", label: 'Saturday',},
              {value:  "12:00 AM - 5:00 PM", label: 'Sunday',},
              ],
            times: [
              {value: 30, label: 'Monday',},
              {value: 20, label: 'Tuesday',},
              {value: 50, label: 'Wednesday',},
              {value: 80, label: 'Thursday',},
              {value: 85, label: 'Friday',},
              {value: 90, label: 'Saturday',},
              {value: 55, label: 'Sunday',},
              ]
          },
          {
            id: "8",
            name: "Royal Angkor",
            address: "100 placeholder st.",
            price: "$$",
            hours: [
              {value: "12:00 AM - 10:00 PM", label: 'Monday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Tuesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Wednesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Thursday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Friday',},
              {value:  "12:00 AM - 6:00 PM", label: 'Saturday',},
              {value:  "12:00 AM - 5:00 PM", label: 'Sunday',},
              ],
            times: [
              {value: 50, label: 'Monday',},
              {value: 10, label: 'Tuesday',},
              {value: 40, label: 'Wednesday',},
              {value: 95, label: 'Thursday',},
              {value: 85, label: 'Friday',},
              {value: 95, label: 'Saturday',},
              {value: 85, label: 'Sunday',},
              ]
          },
          {
            id: "9",
            name: "Silver Wok",
            address: "100 placeholder st.",
            price: "$",
            hours: [
              {value: "12:00 AM - 10:00 PM", label: 'Monday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Tuesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Wednesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Thursday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Friday',},
              {value:  "12:00 AM - 6:00 PM", label: 'Saturday',},
              {value:  "12:00 AM - 5:00 PM", label: 'Sunday',},
              ],
            times: [
              {value: 50, label: 'Monday',},
              {value: 10, label: 'Tuesday',},
              {value: 40, label: 'Wednesday',},
              {value: 95, label: 'Thursday',},
              {value: 85, label: 'Friday',},
              {value: 95, label: 'Saturday',},
              {value: 85, label: 'Sunday',},
              ]
          },
          {
            id: "10",
            name: "House of Donair",
            address: "100 placeholder st.",
            price: "$",
            hours: [
              {value: "12:00 AM - 10:00 PM", label: 'Monday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Tuesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Wednesday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Thursday',},
              {value:  "12:00 AM - 10:00 PM", label: 'Friday',},
              {value:  "12:00 AM - 6:00 PM", label: 'Saturday',},
              {value:  "12:00 AM - 5:00 PM", label: 'Sunday',},
              ],
            times: [
              {value: 50, label: 'Monday',},
              {value: 10, label: 'Tuesday',},
              {value: 40, label: 'Wednesday',},
              {value: 95, label: 'Thursday',},
              {value: 85, label: 'Friday',},
              {value: 95, label: 'Saturday',},
              {value: 85, label: 'Sunday',},
              ]
          }
        ]
    };

    restaurantSelect = (data) => {
      this.setState({ activeRestaurant: data});
      this.setModalVisible(true);
    };

    updateSearch = (search) => {
        this.setState({search})
    };

    renderItem = ({ item }) => (
      <Item data={item} pressFunction={this.restaurantSelect}/>
    );

    setModalVisible = (v) => {
      this.setState({ modalVisable: v });
    };

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Searchbar
          placeholder="Search"
          value={this.state.search}
          onChangeText={this.updateSearch}
          />
          <ReastaurantExpanded visible={this.state.modalVisable} data={this.state.activeRestaurant} onPress={() => { this.setModalVisible(false); }} >

          </ReastaurantExpanded>
            <FlatList
            data={this.state.restaurants}
            numColumns="2"
            renderItem={this.renderItem}
            style={styles.list}
            >
            </FlatList>
      </SafeAreaView>
    );
  }
}

const Item = ({ data, pressFunction }) => (
  <TouchableOpacity style={styles.item} onPress={() => {pressFunction(data)}}>
    <Text style={styles.title}>{data.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#003049',
    borderRadius: 15,
    paddingTop: 70,
    paddingBottom: 80,
    marginVertical: 8,
    marginHorizontal: 8,
    flex: 0.5,
    height: 170,
    textAlignVertical: 'center'
  },

  list: {
    marginTop: 20,
  },

  container: {
    flex: 1,
    marginTop: 0,
  },
  
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
});


export default ExploreScreen;
