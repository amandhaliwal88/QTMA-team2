import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { login, signup, passwordReset, subscribeToAuthChanges } from '../../firebase/functions';


class AuthScreen extends Component {

  state = {
    authMode: 'login'
  }

  componentDidMount() {
    subscribeToAuthChanges(this.onAuthStateChanged)
  }

  onAuthStateChanged = (user) => {
    if (user !== null) {
      
    }
  }

  switchAuthMode = (newMode) => {
    this.setState(prevState => ({
      authMode: newMode
    }));
  }

  render() {
    return (
      <AuthForm
        login={login}
        signup={signup}
        passwordReset={passwordReset}
        authMode={this.state.authMode}
        switchAuthMode={this.switchAuthMode}
      />
    );
  }
}


export default AuthScreen;