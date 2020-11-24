import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from '../../styles/styles.js';
import signout from '../../firebase/functions';
import auth from '@react-native-firebase/auth';

import {Avatar, Button, Title, Card, IconButton} from 'react-native-paper';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, margin: 25, justifyContent: 'space-between'}}>
        <View style={styles.profileHeading}>
          <Text style={styles.profileHeadingText}>Hi {'Max'}.</Text>
          <IconButton icon="account-circle" color="#000000" size={45} onPress={() => console.log('Account')} />
        </View>
        <IconButton icon="qrcode-scan" color="#000000" size={150} style={{alignSelf:'center'}} onPress={() => console.log('QR Code')} />
        <View style={styles.profileInfoCard}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={styles.profileInfoCardHeading}>Contact Information:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <IconButton icon="pencil" color="#000000" size={25} onPress={() => console.log('Contact information edit')} />
              <IconButton icon="help-circle-outline" color="#000000" size={25} onPress={() => console.log('Contact information help')} />
            </View>
          </View>
          <Text style={styles.profileInfoCardText}>Max Eisen</Text>
          <Text style={styles.profileInfoCardText}>613-737-1111</Text>
          <Text style={styles.profileInfoCardText}>K7L 2K5</Text>
        </View>

        <View style={styles.profileInfoCard}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={styles.profileInfoCardHeading}>Recent locations:</Text>
              <IconButton icon="help-circle-outline" color="#000000"size={25} onPress={() => console.log('Recent locations help')} />
          </View>
          <Text style={styles.profileInfoCardText}>Lone Star Texas Grill</Text>
          <Text style={styles.profileInfoCardText}>Burger King</Text>
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
