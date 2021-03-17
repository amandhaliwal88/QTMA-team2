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
        categories: [
          {id: "1", name: "Top Rated"},
          {id: "2", name: "Fast Food"},
          {id: "3", name: "Breakfast"},
          {id: "4", name: "Kid-Friendly"},
          {id: "5", name: "Local"},
          {id: "6", name: "Vegan"},
          {id: "7", name: "Greasy Spoon"},
          {id: "8", name: "Mediterranean"},
          {id: "9", name: "American"},
          {
            id: "10",
            name: "McDonald's",
            image: "https://cdn1.matadornetwork.com/blogs/1/2018/09/McDonalds-menu-items-from-around-the-world-1200x900.jpeg",
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
              ],
            delivery: {uberEats: false, doorDash: true, skipTheDishes: true, faceDrive: true}
          },
          {
            id: "11",
            name: "Sima Sushi",
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/04/4e/5f/lunch-sushi-plate-was.jpg",
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
              ],
            delivery: {uberEats: true, doorDash: true, skipTheDishes: true, faceDrive: true}
          },
        ],
        restaurants: [
          {
            id: "1",
            name: "McDonald's",
            image: "https://cdn1.matadornetwork.com/blogs/1/2018/09/McDonalds-menu-items-from-around-the-world-1200x900.jpeg",
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
              ],
            delivery: {uberEats: false, doorDash: true, skipTheDishes: true, faceDrive: true}
          },
          {
            id: "2",
            name: "Sima Sushi",
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/04/4e/5f/lunch-sushi-plate-was.jpg",
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
              ],
            delivery: {uberEats: true, doorDash: true, skipTheDishes: true, faceDrive: true}
          },
          {
            id: "3",
            name: "Lone Star Texas Grill",
            image: "https://images.ctfassets.net/ikdnpo3iuq6f/6scUXm7KGwwrquEYn8Ox7t/23cf9841f183a8ba0180b79ee13c076f/lstg-home-hero-tablet_3x.jpg",
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
              ],
              delivery: {uberEats: false, doorDash: true, skipTheDishes: true, faceDrive: true}
          },
          {
            id: "4",
            name: "Stooley's",
            image: "https://b.zmtcdn.com/data/reviews_photos/af0/81850fa530c7457d63334af96285baf0.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
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
              ],
              delivery: {uberEats: false, doorDash: true, skipTheDishes: true, faceDrive: true}
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
              ],
              delivery: {uberEats: false, doorDash: true, skipTheDishes: true, faceDrive: true}
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
              ],
              delivery: {uberEats: false, doorDash: true, skipTheDishes: true, faceDrive: true}
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
              ],
              delivery: {uberEats: false, doorDash: true, skipTheDishes: true, faceDrive: true}
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
              ],
              delivery: {uberEats: false, doorDash: true, skipTheDishes: true, faceDrive: true}
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
              ],
              delivery: {uberEats: false, doorDash: true, skipTheDishes: true, faceDrive: true}
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
              ],
              delivery: {uberEats: false, doorDash: true, skipTheDishes: true, faceDrive: true}
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
            data={this.state.categories}
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
    backgroundColor: '#7D6959',
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
