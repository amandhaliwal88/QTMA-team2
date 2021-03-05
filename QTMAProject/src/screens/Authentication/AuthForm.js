import React from 'react';
import {withFormik} from 'formik';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Container,
} from 'react-native';
import * as yup from 'yup';
import {styles} from '../../styles/styles';
import {TextInput, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'

const mystyle={
  width: '100%',
  height: '100%',
  resizeMode: 'contain',
  flex: 1
}


const EagleTitle={
  textAlign: 'center',
  color: 'white',
  fontSize: 30,
  fontFamily: 'Avenir',
  marginTop: 200,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  textAlignVertical: 'center',
  alignContent: 'center',
}

const newTitle={
  textAlign: 'center',
  color: 'black',
  fontSize: 18,
  marginTop: 15,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  textAlignVertical: 'center',
  alignContent: 'center',
}


const inputText = {
  backgroundColor: 'transparent',
  marginTop: 10,
  color: 'white',
  
}

const linearGrad = {
  flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}

const passwordContainer = {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderColor: '#000',
  paddingBottom: 10,
  height: 50
}

const inputStyle = {
  flex: 1,
  height: 100
}

const AuthForm = (props) => {
  displayLogin = (
    <LinearGradient
          colors={['#7D6959', '#7D6959' ]}
          style={mystyle}
        >
      <Text style={EagleTitle}>{'Eagle.'}</Text>
      <TextInput style={inputText}
        underlineColor="white"
        color="white"
        placeholderTextColor="white"
        label="Email"
        autoCapitalize="none"
        onChangeText={(text) => props.setFieldValue('email', text)}></TextInput>

      <TextInput
        style={inputText}
        label="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        underlineColor="white"

        onChangeText={(text) =>
          props.setFieldValue('password', text)
        }></TextInput>

      <Button
        style={styles.authButton}
        mode="outlined"
        onPress={() => props.handleSubmit()}
        color="white">
        Login
      </Button>
    
     
        <Text style={newTitle}>
          New to Eagle?
        </Text>
          <Button
          style={styles.authButton}
          mode="outlined"
          onPress={() => props.switchAuthMode('signup')}
          color="white">
          Sign Up
        </Button>

        <TouchableOpacity
        onPress={() => props.switchAuthMode('passwordReset')}
        style={styles.authSwitch}>
        <Text style={styles.passwordResetButton}>
          Forgot your password? {' '}
          <Text style={{color:'#0000EE'}}>Recover Password</Text>
        </Text>
        </TouchableOpacity>


        <Text style={{marginBottom:400}}></Text>
        </LinearGradient>
  );

  displayRegister = (
    <LinearGradient
          colors={['#7D6959', '#7D6959' ]}
          style={mystyle}
        >
      <Text style={EagleTitle}>{'Eagle.'}</Text>

      <TextInput
        style={inputText}
        underlineColor="white"
        label="Name"
        theme={{
          colors: {primary: '#1e90ff', underlineColor: 'transparent'},
        }}
        autoCapitalize="none"
        onChangeText={(text) =>
          props.setFieldValue('displayName', text)
        }></TextInput>
      <TextInput
        style={inputText}
        underlineColor="white"
        label="Email"
        autoCapitalize="none"
        onChangeText={(text) => props.setFieldValue('email', text)}></TextInput>
      <TextInput
        style={inputText}
        underlineColor="white"
        label="Password"
        secureTextEntry={true}
   
        autoCapitalize="none"
        onChangeText={(text) =>
          props.setFieldValue('password', text)
        }></TextInput>
      <TextInput
        style={inputText}
        underlineColor="white"
        label=" Re-Enter Password"
        secureTextEntry={true}
      
        autoCapitalize="none"
        onChangeText={(text) => props.setFieldValue('rePWD', text)}></TextInput>
      <Button
        style={styles.authButton}
        mode="outlined"
        onPress={() => props.handleSubmit()}
        color="white">
        Sign Up
      </Button>
      <TouchableOpacity
        onPress={() => props.switchAuthMode()}
        style={styles.authSwitch}>
        <Text style={styles.passwordResetButton}>
          Already have an account? {' '}
          <Text style={{color:'#0000EE'}}>Login</Text>
        </Text>
        </TouchableOpacity>
      <Text style={{marginBottom:300}}>.</Text>
      </LinearGradient>
  );

  displayPasswordReset = (
    <LinearGradient
    colors={['#ff5242', '#f5841b' ]}
    style={mystyle}
    >
      <Text style={EagleTitle}>{'Eagle.'}</Text>

      <TextInput
        style={inputText}
        underlineColor="white"
        label="Email"
        autoCapitalize="none"
        onChangeText={(text) => props.setFieldValue('email', text)}></TextInput>
      <Button
        style={styles.authButton}
        mode="outlined"
        onPress={() => props.handleSubmit()}
        color="white">
        Recover Password
      </Button>

      <TouchableOpacity
        onPress={() => props.switchAuthMode()}
        style={styles.authSwitch}>
        <Text style={styles.passwordResetButton}>
          Remembered your password? {' '}
          <Text style={{color:'#0000EE'}}>Login</Text>
        </Text>
        </TouchableOpacity>

      <Text style={{marginBottom:600}}></Text>
    </LinearGradient>
  );

  return (
    <ScrollView>
      {props.authMode === 'signup' ? displayRegister
      : props.authMode === 'passwordReset' ? displayPasswordReset
      : displayLogin}
    </ScrollView>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    rePWD: '',
    displayName: '',
  }),
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
      //console.log("invalid")
    }

    if (!values.password) {
      errors.password = 'Password Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be longer than 8 characters';
    }
    return errors;
  },

  handleSubmit: (values, {props}) => {
    if(props.authMode === 'login'){
      props.login(values);
    }
    else if(props.authMode === 'signup'){
      props.switchAuthMode('login'); //reset back to login screen since user needs to verify email after creation
      props.signup(values);
    }
    else if (props.authMode === 'passwordReset'){
      props.passwordReset(values)
    }
  },
})(AuthForm);

// validationSchema: (props) => yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().min(10).required(),
//   displayName: props.authMode === 'signup' ?
//     yup.string().min(4).required() : null
// }),