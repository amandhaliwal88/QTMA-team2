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

/**
 * * To use graphs we are using react-native-svg : https://github.com/react-native-svg/react-native-svg#automatically
 * * run "yarn add react-native-svg" in project directory
 * * then run "cd ios && pod install"
 */

var data = {
  mcdonalds:"McDonald's",
  mcdonaldsURL:"https://www.incimages.com/uploaded_files/image/1920x1080/getty_1026535662_2000133316537670495_415913.jpg",
  
  pizzaStudio:"Pizza Studio",
  pizzaStudioURL:"https://lh3.googleusercontent.com/proxy/VwTfKDJKz5IUmCPVDZ6bSS2OKReZEFt55AgzcHyivbBauRv8oXy3aRGA_PRwWbXdjD1Ac40pqy-BSEzVfVRLR339tz4st8NWBg",
  
  harveys:"Harveys",
  harveysURL:"https://pbs.twimg.com/profile_images/1263917387230953472/J-vcoYyi.jpg",
  
  tacoBell:"Taco Bell",
  tacoBellURL:"https://cdn.livekindly.co/wp-content/uploads/2020/03/vegan-plant-based-news-taco-bell.jpg",
  
  houseOfDonair:"House of Donair",
  houseOfDonairURL:"https://images.squarespace-cdn.com/content/5be8b92df79392b1e4eb05c1/1546490773999-81JW33N44XNTN7WJKMHD/Capture.PNG?content-type=image%2Fpng"
}

var mcdonaldsTimes = [
            {value: 50, label: 'Monday',},
            {value: 10, label: 'Tuesday',},
            {value: 40, label: 'Wednesday',},
            {value: 95, label: 'Thursday',},
            {value: 85, label: 'Friday',},
            {value: 95, label: 'Saturday',},
            {value: 85, label: 'Sunday',},
            ]

var pizzaStudioTimes = [
            {value: 50, label: 'Monday',},
            {value: 10, label: 'Tuesday',},
            {value: 40, label: 'Wednesday',},
            {value: 95, label: 'Thursday',},
            {value: 85, label: 'Friday',},
            {value: 95, label: 'Saturday',},
            {value: 85, label: 'Sunday',},
            ]

var harveysTimes = [
            {value: 50, label: 'Monday',},
            {value: 10, label: 'Tuesday',},
            {value: 40, label: 'Wednesday',},
            {value: 95, label: 'Thursday',},
            {value: 85, label: 'Friday',},
            {value: 95, label: 'Saturday',},
            {value: 85, label: 'Sunday',},
            ]

var tacoBellTimes = [
            {value: 50, label: 'Monday',},
            {value: 10, label: 'Tuesday',},
            {value: 40, label: 'Wednesday',},
            {value: 95, label: 'Thursday',},
            {value: 85, label: 'Friday',},
            {value: 95, label: 'Saturday',},
            {value: 85, label: 'Sunday',},
            ]

var houseOfDonairTimes = [
            {value: 50, label: 'Monday',},
            {value: 10, label: 'Tuesday',},
            {value: 40, label: 'Wednesday',},
            {value: 95, label: 'Thursday',},
            {value: 85, label: 'Friday',},
            {value: 95, label: 'Saturday',},
            {value: 85, label: 'Sunday',},
            ]

var mcdonaldsDelivery = {uberEats: false, doorDash: true, skipTheDishes: true, faceDrive: true};
var harveysDelivery = {uberEats: true, doorDash: true, skipTheDishes: false, faceDrive: true};
var tacoBellDelivery ={uberEats: true, doorDash: true, skipTheDishes: true, faceDrive: true};
var houseOfDonairDelivery = {uberEats: true, doorDash: true, skipTheDishes: true, faceDrive: true};
var pizzaStudioDelivery = {uberEats: true, doorDash: true, skipTheDishes: true, faceDrive: true};

class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
       <View style={styles.form}>
         <Text style={styles.pageTitle}>Home</Text>
         <SortButton>style={{zIndex:1329}}</SortButton>
         <RestaurantCard name={data.mcdonalds} url={data.mcdonaldsURL}times={[40, 20, 30, 90, 60, 20, 50]} address={'285 Princess St'} delivery={mcdonaldsDelivery}/>
         <RestaurantCard name={data.harveys} url={data.harveysURL} times={[13, 45, 23, 75, 24, 23, 34]} address={'1141 Division St'} delivery={harveysDelivery}/>
         <RestaurantCard name={data.tacoBell} url={data.tacoBellURL} times={[67, 28, 45, 15, 75, 34, 54]} address={'29 Warne Crescent'} delivery={tacoBellDelivery}/>
         <RestaurantCard name={data.houseOfDonair} url={data.houseOfDonairURL} times={[67, 48, 25, 15, 55, 34, 54]} address={'394 Princess St'} delivery={houseOfDonairDelivery}/>
         <RestaurantCard name={data.pizzaStudio} url={data.pizzaStudioURL} times={[40, 30, 20, 60, 90, 20, 50]} address={'356 Princess St'} delivery={pizzaStudioDelivery}/> 
       </View>
      </ScrollView>
    );
  }
}

const RestaurantCard = (props) => {
  return (
    <Card style={styles.card}>
      <View style={{backgroundColor:'#003049', borderRadius:5, borderWidth:5, borderColor:'#003049'}}>

      <Card.Content>
        <View>
        <Title style={{color:'#FFFFFF'}}>{props.name}</Title>
        </View>
      </Card.Content>

{/* This is the image and the bar chart */}
      <View style={{flexDirection:"column", backgroundColor:'#FFFFFF', borderRadius:10}}>

        <View style={{flex:3, flexDirection:"row", alignItems:'center'}}>

          <View style={{flex:2, backgroundColor:'#FFFFFF', padding:8, borderRadius:8}}>
            <Card.Cover source={{uri: props.url}} style={{height:100, borderRadius:10}}/>
          </View>

          <View style={{flexDirection:"column",flex:3, backgroundColor:'#FFFFFF'}}>
            <BarChartExample times={props.times}></BarChartExample>
          </View>

        </View>

{/* This is the bottom row */}
        <View style={{flexDirection:"row",flex:1, backgroundColor:'#FFFFFF', padding:5, borderRadius:10}}>

          <View style={{flex:5, flexDirection:"row"}}>
            <Ionicon name='location' size={20}/>
          <Paragraph>{props.address}</Paragraph>
          <DeliveryAvailability uberEats={props.delivery.uberEats} doorDash={props.delivery.doorDash} skipTheDishes={props.delivery.skipTheDishes} faceDrive={props.delivery.faceDrive} size={26} padding={2}/>
          </View>



          <View style={{flex:1, flexDirection:'row'}}>
            <FontAwesome style={{padding:2, color:'#D0D0D0'}}name='usd' size={20}/>
            <FontAwesome style={{padding:2, color:'#D0D0D0'}}name='usd' size={20}/>
            <FontAwesome style={{padding:2, color:'#000000'}} name='usd' size={20}/>
          </View>
          
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
