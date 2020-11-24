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
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontSize: 50, fontWeight: '500'}}>Hi {'Max'}.</Text>
          <IconButton
            icon="account-circle"
            color="#000000"
            size={45}
            style={{}}
            onPress={() => console.log('Account')}
          />
        </View>
        <IconButton
          icon="qrcode-scan"
          color="#000000"
          size={150}
          style={{alignSelf:'center'}}
          onPress={() => console.log('QR Code')}
        />

        <View style={{borderWidth: 1, padding: 10, borderColor: '#d62828', borderRadius: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Contact Information:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <IconButton
                icon="pencil"
                color="#000000"
                size={25}
                style={{}}
                onPress={() => console.log('Contact information edit')}
              />
              <IconButton
                icon="help-circle-outline"
                color="#000000"
                size={25}
                style={{}}
                onPress={() => console.log('Contact information help')}
              />
            </View>
          </View>
          <Text style={{}}>Max Eisen</Text>
          <Text style={{}}>613-737-1111</Text>
          <Text style={{}}>K7L 2K5</Text>
        </View>

        <View style={{borderWidth: 1, padding: 10, borderColor: '#d62828', borderRadius: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Recent locations:</Text>
              <IconButton
                icon="help-circle-outline"
                color="#000000"
                size={25}
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
