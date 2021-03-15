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

{/* This is the image/left side*/}
      <View style={{flex:1, flexDirection:"row", backgroundColor:'#FFFFFF', borderRadius:10}}>

        <View style={{flex:3, flexDirection:"row", alignItems:'center'}}>

          <View style={{flex:2, backgroundColor:'#FFFFFF', padding:8, borderRadius:8}}>
            <Card.Cover source={{uri: props.url}} style={{height:100, borderRadius:10}}/>
          </View>


        </View>

{/* This is the right side*/}
        <View style={{flexDirection:"row",flex:5, backgroundColor:'#ffffff', borderRadius:10}}>

          <View style={{ flexDirection:"column"}}>


{/* This is the four icons  */}
            <View style={{flex:2, flexDirection:"row", width:45, paddingTop:12}}>
              {/* four icons */}
              <View style={{paddingRight:3}}>
                <DeliveryAvailability uberEats={props.delivery.uberEats} doorDash={props.delivery.doorDash} skipTheDishes={props.delivery.skipTheDishes} faceDrive={props.delivery.faceDrive} size={26} padding={2}/>                
              </View>
              
            </View>


{/* This is the eagle rating */}
            <View style={{width:60, paddingTop:6}}>
              <RatingCompact rating={props.rating}/>
            </View>

{/* This is the bottom row with pricing and timing */}
            <View style={{backgroundColor:'#FFFFFF', flex:5, flexDirection:"row", paddingTop:6}}>

              <View style={{}}>
                <Pricing price={props.price}/>
              </View>

              <View style={{paddingLeft:15}}>
                <Ionicon name='stopwatch-outline' size={20}/>
              </View>

              <View style={{}}>
                <Text>{props.deliveryTime}</Text>
              </View>

            </View>
          
          </View>
          
        </View>
        
      </View>

      </View>
    </Card>
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

          borderRadius: 10,
          paddingTop: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          zIndex: 200
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          style={{zIndex: 110, style:"#FFFFFF"}}
          contentStyle={{zIndex: 100, style:"#FFFFFF"}}
          anchor={<Button onPress={openMenu} style={{color:"#FFFFFF"}}>Sort</Button>}>
          <Menu.Item onPress={() => {}} title="Popularity" style={{zIndex:5}}/>
          <Menu.Item onPress={() => {}} title="$-$$$" style={{zIndex:5}}/>
          <Menu.Item onPress={() => {}} title="A-Z" style={{zIndex:5}}/> 
        </Menu>
      </View>
    </Provider>
  );
};


export default HomeScreen;
