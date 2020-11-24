import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from '../../styles/styles.js';
import signout from '../../firebase/functions';
import auth from '@react-native-firebase/auth';

import {Avatar, Button, Title, Card, IconButton} from 'react-native-paper';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.form}>
        <View style={styles.row}>
          <Text style={styles.greeting}>Hi {'Max'}.</Text>
          <IconButton
            icon="account-circle"
            color="#1e90ff"
            size={40}
            style={{alignSelf:'center'}}
            onPress={() => console.log('Account')}
          />
        </View>
        <IconButton
          icon="qrcode-scan"
          color="#1e90ff"
          size={150}
          style={{alignSelf:'center'}}
          onPress={() => console.log('QR Code')}
        />

      <View style={{}}>
        <View style={styles.row}>
          <Text style={{fontWeight: 'bold',}}>Contact Information:</Text>
          <IconButton
            icon="pencil"
            color="#1e90ff"
            size={20}
            style={{}}
            onPress={() => console.log('Contact information edit')}
          />
          <IconButton
            icon="help-circle-outline"
            color="#1e90ff"
            size={20}
            style={{}}
            onPress={() => console.log('Contact information help')}
          />
        </View>
        <Text style={{}}>Max Eisen</Text>
        <Text style={{}}>613-737-1111</Text>
        <Text style={{}}>K7L 2K5</Text>
      </View>

      <View style={{}}>
        <View style={styles.row}>
          <Text style={{fontWeight: 'bold',}}>Recent Locations:</Text>
          <IconButton
            icon="help-circle-outline"
            color="#1e90ff"
            size={20}
            style={{}}
            onPress={() => console.log('Recent locations help')}
          />
        </View>
        <Text style={{}}>Lone Star Texas Grill</Text>
        <Text style={{}}>Burger King</Text>
      </View>

        <Button
          style={styles.authButton}
          mode="outlined"
          onPress={() => auth().signOut()}
          color="#1e90ff"
          compact={false}>
          Sign Out
        </Button>
      </View>
    );
  }
}

export default SettingsScreen;
