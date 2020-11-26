import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Drawer/home';
import SettingsScreen from '../screens/Drawer/settings';
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
              else if(route.name === 'Settings'){
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
            inactiveTintColor: 'white',
            showLabel: false,
            style:{
              backgroundColor: '#FF6C6C',
            }
          }}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={HomeScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}
