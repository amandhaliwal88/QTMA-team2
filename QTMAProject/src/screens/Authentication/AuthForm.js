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


const leopardTitle={
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
          colors={['#ff5242', '#f5841b' ]}
          style={mystyle}
        >
      <Text style={leopardTitle}>{'leopard.'}</Text>
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
          New to leopard?
        </Text>
          <Button
          style={styles.authButton}
          mode="outlined"
          onPress={() => props.switchAuthMode()}
          color="white">
          Sign Up
        </Button>



        <Text style={{marginBottom:400}}>.</Text>
        </LinearGradient>
  );

  displayRegister = (
    <LinearGradient
          colors={['#ff5242', '#f5841b' ]}
          style={mystyle}
        >
      <Text style={leopardTitle}>{'leopard.'}</Text>

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
      <Text style={newTitle}>
          Already have an account?
        </Text>
          <Button
          style={styles.authButton}
          mode="outlined"
          onPress={() => props.switchAuthMode()}
          color="white">
          Login
        </Button>
      <Text style={{marginBottom:300}}>.</Text>
      </LinearGradient>
  );

  return (
    <ScrollView>
      {props.authMode === 'signup' ? displayRegister : displayLogin}
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
    }

    if (!values.password) {
      errors.password = 'Password Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be longer than 8 characters';
    }
    return errors;
  },

  handleSubmit: (values, {props}) => {
    props.authMode === 'login' ? props.login(values) : props.signup(values);
  },
})(AuthForm);

// validationSchema: (props) => yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().min(10).required(),
//   displayName: props.authMode === 'signup' ?
//     yup.string().min(4).required() : null
// }),
