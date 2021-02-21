import React, {Component} from 'react';
import {View, Text, ActivityIndicator, Alert} from 'react-native';
import {styles} from '../../styles/styles.js';
import signout from '../../firebase/functions';
import auth from '@react-native-firebase/auth';

import {Avatar, Button, Title, Card, IconButton} from 'react-native-paper';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, margin: 25, justifyContent: 'space-between'}}>
        <View style={styles.profileHeading}>
        <IconButton
            icon="account-circle"
            color="#000000"
            size={45}
            onPress={() => console.log('Account')}
            disabled={true}
          />
          <Text style={styles.profileHeadingText}>{'Max Eisen'}{"\n"}</Text>  

        </View>

        <View style={styles.profileInfoCard}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={styles.profileInfoCardHeading}>Recent locations:</Text>
              <IconButton
                icon="help-circle-outline"
                color="#000000"
                size={25}
                onPress={() => Alert.alert(
                  "Recent Locations Help",
                  "The recent locations you've visited are stored here.",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ],
                  { cancelable: false }
                  )
                }
              />
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

export default ProfileScreen;
