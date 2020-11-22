import React, {Component} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, SafeAreaView} from 'react-native';
import signout from '../../firebase/functions';
import auth from '@react-native-firebase/auth';
import {Searchbar} from 'react-native-paper';

import {Avatar, Button, Title, Card, IconButton} from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

class ExploreScreen extends Component {
    state = {
        search: '',
        restaurants: [
          {
            id: "1",
            name: "McDonald's",
          },
          {
            id: "2",
            name: "Sima Sushi",
          },
          {
            id: "3",
            name: "Lone Star Texas Grill",
          },
          {
            id: "4",
            name: "Stooley's",
          },
          {
            id: "5",
            name: "The Brass",
          },
          {
            id: "6",
            name: "Kpop Sub Sushi",
          },
          {
            id: "7",
            name: "Quesada",
          },
          {
            id: "8",
            name: "Royal Angkor",
          },
          {
            id: "9",
            name: "Silver Wok",
          }
        ]
    };

 

    updateSearch = (search) => {
        this.setState({search})
    };

    renderItem = ({ item }) => (
      <Item title={item.name} />
    );


  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Searchbar
          placeholder="Search"
          value={this.state.search}
          onChangeText={this.updateSearch}
          />
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

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
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
    paddingTop: 20,
  },

  container: {
    flex: 1,
    marginTop: 0,
  },
  
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
});


export default ExploreScreen;
