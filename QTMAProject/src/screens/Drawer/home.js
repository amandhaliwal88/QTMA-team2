import React, {Component} from 'react';
import {View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import {styles} from '../../styles/styles';
import signout from '../../firebase/functions';
import auth from '@react-native-firebase/auth';
import {Appbar, DataTable} from 'react-native-paper';
import {Avatar, Button, Menu, Divider, Provider, Title, Paragraph, Card} from 'react-native-paper';
import HomeCard from '../../components/card';
import { BarChart, Grid ,XAxis} from 'react-native-svg-charts'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DeliveryAvailability from '../../components/deliveryAvailability'
import Pricing from '../../components/pricing'
import RatingCompact from '../../components/rating'

let restaurant_data = require('../../../restaurant-data/final_v2.json');


class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
       <View style={styles.form}>
         <Text style={styles.pageTitle}>Home</Text>
         <SortButton>style={{zIndex:1329}}</SortButton>
          {restaurant_data.map(restaurant =>(
            <RestaurantCard name={Object.keys(restaurant)[0]} 
            key={Object.keys(restaurant)[0]}
            url={restaurant[Object.keys(restaurant)[0]].Image} 
            delivery={restaurant[Object.keys(restaurant)[0]].availability} 
            rating={restaurant[Object.keys(restaurant)[0]].Rating} 
            deliveryTime={restaurant[Object.keys(restaurant)[0]].Delivery_Time} 
            price={restaurant[Object.keys(restaurant)[0]].Price}/>
          ))}
       </View>
      </ScrollView>
    );
  }
}

const RestaurantCard = (props) => {
  return (
    <Card style={styles.card}>
      <View style={{backgroundColor:'#E1E3E0', borderRadius:5, borderWidth:5, borderColor:'#E1E3E0'}}>

      <Card.Content>
        <View>
        <Title style={{color:'#000000'}}>{props.name}</Title>
        </View>
      </Card.Content>

{/* This is the image and the bar chart */}
      <View style={{flexDirection:"column", backgroundColor:'#FFFFFF', borderRadius:10}}>

        <View style={{flex:3, flexDirection:"row", alignItems:'center'}}>

          <View style={{flex:2, backgroundColor:'#FFFFFF', padding:8, borderRadius:8}}>
            <Card.Cover source={{uri: props.url}} style={{height:100, borderRadius:10}}/>
          </View>

          <View style={{flexDirection:"column",flex:3, backgroundColor:'#FFFFFF'}}>
            <View style={{padding:8}}></View>
          <View style={{flex:5, flexDirection:"row"}}>
            <DeliveryAvailability uberEats={props.delivery.uberEats} doorDash={props.delivery.doorDash} skipTheDishes={props.delivery.skipTheDishes} faceDrive={props.delivery.faceDrive} size={26} padding={2}/>
          </View>
          <View style={{flex:5, flexDirection:"row"}}>
            <Ionicon name='stopwatch-outline' size={20}/>
            <Text>{props.deliveryTime}</Text>
            <View style={{padding: 5}}/>
            <Pricing price={props.price}/>
          {/*<Paragraph>{props.address}</Paragraph>   -----Addresses/locations are mostly in name of restaurants scraped --------*/ }
          
          </View>

          <View style={{flex:5, flexDirection:"row"}}>
            <RatingCompact rating={props.rating}/>
          </View>

          </View>

        </View>

{/* This is the bottom row */}
        <View style={{flexDirection:"row",flex:1, backgroundColor:'#FFFFFF', padding:5, borderRadius:10}}>

          



          
        </View>
        
      </View>

      </View>
    </Card>
  )
}

const BarChartExample = (props) => {
  const fill = '#A0B5EE'
  // const data = [50, 10, 40, 65, 24, 30, 16]
  const data = props.times;
  const labels = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm']

  return (
    <View style={{flex:1}}>
      <BarChart 
        style={{ width: 150, height:130, backgroundColor:'#FFFFFF'}} 
        data={data} 
        svg={{ fill }} 
        contentInset={{ top: 30, bottom: 30 }}>
        <Grid />
       </BarChart>

       <XAxis
        style={{flex:1, colour:'#003049', marginBottom:3, marginLeft:0, marginRight:3}}
        data={data}
        formatLabel={(value, index) => labels[index]}
        contentInset={{ left: 10, right: 29 }}
        svg={{ fontSize:7, fill:'#003049' }}
       />

    </View> 

  )

}



const SortButton = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          // borderWidth: 1,
          // borderColor: '#000000',
          borderRadius: 10,
          paddingTop: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          zIndex: 200
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          style={{zIndex: 110}}
          contentStyle={{zIndex: 100}}
          anchor={<Button onPress={openMenu}>Sort</Button>}>
          <Menu.Item onPress={() => {}} title="Popularity" style={{zIndex:5}}/>
          <Menu.Item onPress={() => {}} title="$-$$$" style={{zIndex:5}}/>
          <Menu.Item onPress={() => {}} title="A-Z" style={{zIndex:5}}/> 
        </Menu>
      </View>
    </Provider>
  );
};


export default HomeScreen;
