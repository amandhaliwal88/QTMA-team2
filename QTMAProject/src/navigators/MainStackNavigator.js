import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Drawer/home';
import ProfileScreen from '../screens/Drawer/profile';
import ExploreScreen from '../screens/Drawer/explore';
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator();

export function MainStackNavigator() {
  return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home'
              } 
              else if(route.name === 'Profile'){
                iconName = 'person'
              }
              else if (route.name === 'Explore'){
                iconName = 'search';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#000000',
            inactiveTintColor: '#A6A19C',
            showLabel: true,
            style:{
              backgroundColor: '#E1E3E0',
            }
          }}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}
