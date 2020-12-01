import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from '../../styles/styles';
import signout from '../../firebase/functions';
import auth from '@react-native-firebase/auth';
import {Appbar, DataTable} from 'react-native-paper';
import {Avatar, Button, Menu, Divider, Provider, Title, Paragraph, Card} from 'react-native-paper';
import HomeCard from '../../components/card';
import { BarChart, Grid ,XAxis} from 'react-native-svg-charts'

/**
 * * To use graphs we are using react-native-svg : https://github.com/react-native-svg/react-native-svg#automatically
 * * run "yarn add react-native-svg" in project directory
 * * then run "cd ios && pod install"
 * 
 */

var data = {
  mcdonalds:"McDonalds",
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



/**
 * ! When the sort button is clicked, the dropdown menu appears behind the restaurant card 
 * * I already tried to fuck with the zIndex of every component on the page but it did not work
 * TODO: Fix sort button problem (1) --> maybe even just skip this and come back to it?
 * TODO: Add header (2)
 * TODO: Get busy times info (or finesse for demo and fix later) and put image/chart in (3)
 * TODO: Get price info and add it in (4)
 */

class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
       <View style={styles.form}>
         <Text style={styles.pageTitle}>Home</Text>
    <SortButton>style={{zIndex:1329}}</SortButton>
         <RestaurantCard name={data.mcdonalds} url={data.mcdonaldsURL} data={mcdonaldsTimes}/>
         {/* <RestaurantCard name={data.pizzaStudio} url={data.pizzaStudioURL}/>
         <RestaurantCard name={data.harveys} url={data.harveysURL}/>
         <RestaurantCard name={data.tacoBell} url={data.tacoBellURL}/>
         <RestaurantCard name={data.houseOfDonair} url={data.houseOfDonairURL}/> */}
         
       </View>
      </ScrollView>
    );
  }
}

const RestaurantCard = (props) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{props.name}</Title>
        <Paragraph>We are {props.name} and we would love for you to eat here.</Paragraph>
        {/* <Image source={{uri: props.url,}} style={styles.homeScreenImage} /> */}
        <View>
          
          <BarChartExample></BarChartExample>
          
          {/* <Card.Cover source={{uri: props.url}} style={( styles.homeScreenImage )} */}
        </View>
        {/* <BarChartExample></BarChartExample> */}
         {/* <Card.Cover source={{uri: props.url}} style={( styles.homeScreenImage )} */}
      
      </Card.Content>
      <Image source={{uri: props.url,}} style={styles.homeScreenImage} />
    </Card>
  );
}

// const BarChartExample = (props) => {
//   return (
//     <View>
//       <BarChart style={{ height: 200, marginLeft: 5, marginRight: 5, marginTop: 25 }} data={props.data.times.filter(res=>res.value).map(ele=>ele.value)} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
//        <Grid />
//        <XAxis
//              style={{ paddingTop: 10, marginLeft: 5, marginRight:5 }}
//              data={props.data.times.filter(res=>res.value).map(ele=>ele.value)}
//              formatLabel={(value, index) => props.data.times.filter(res=>res.label).map(ele=>ele.label)[index]}
//              contentInset={{ left: 18, right: 18 }}
//              svg={{ fontSize: 10, fill: '#FFFFFF' }}/>
//       </BarChart>
//     </View>

//   );

// }

// class BarChartExample extends Component {
//     render() {
//         const fill = 'rgb(134, 65, 244)'
//         const data = [50, 10, 40, 65, 24, 30, 16]
 
//         return (
//           <View>
//             <BarChart style={{ height: 200, marginLeft: 5, marginRight: 5, marginTop: 25 }} data={props.data.times.filter(res=>res.value).map(ele=>ele.value)} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
//              <Grid />
//              <XAxis
//                    style={{ paddingTop: 10, marginLeft: 5, marginRight:5 }}
//                    data={props.data.times.filter(res=>res.value).map(ele=>ele.value)}
//                    formatLabel={(value, index) => props.data.times.filter(res=>res.label).map(ele=>ele.label)[index]}
//                    contentInset={{ left: 18, right: 18 }}
//                    svg={{ fontSize: 10, fill: '#FFFFFF' }}/>
//             </BarChart>
//           </View>
//         )
//     }
// }

// class BarChartExample extends Component {
//     render() {
//         const fill = 'rgb(134, 65, 244)'
//         const data = [50, 10, 40, 65, 24, 30, 16]
 
//         return (
//           <View>
//             <BarChart style={{ height: 200, marginLeft: 5, marginRight: 5, marginTop: 25 }} data={this.props.data.times.filter(res=>res.value).map(ele=>ele.value)} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
//              <Grid />
//              <XAxis
//                    style={{ paddingTop: 10, marginLeft: 5, marginRight:5 }}
//                    data={this.props.data.times.filter(res=>res.value).map(ele=>ele.value)}
//                    formatLabel={(value, index) => this.props.data.times.filter(res=>res.label).map(ele=>ele.label)[index]}
//                    contentInset={{ left: 18, right: 18 }}
//                    svg={{ fontSize: 10, fill: '#FFFFFF' }}/>
//             </BarChart>
//           </View>
//         )
//     }
// }

class BarChartExample extends Component {
    render() {
        const fill = 'rgb(134, 65, 244)'
        const data = [50, 10, 40, 65, 24, 30, 16]
        return (
          <View>
            <BarChart style={{ width: 100, height:100 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>
          </View>
        )
    }
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
