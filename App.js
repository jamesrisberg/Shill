import React from 'react';
import { 
    StyleSheet, 
    Button,
    Platform, 
    Image, 
    Text, 
    View, 
    ScrollView, 
    NativeModules 
} from 'react-native';

import { firebase, auth } from './handlers/firebase'
import { twitter } from './handlers/config';

const RNTwitterSignIn = NativeModules.RNTwitterSignIn;

import SwipeInterface from './components/SwipeInterface';

if (__DEV__) {
    NativeModules.DevSettings.setIsDebuggingRemotely(true)
}

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
        // firebase things?
            isAutheniticated: false,
            user: null,
            token: '',
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this); 
        this.handleFirebaseLogin = this.handleFirebaseLogin.bind(this);
    }

    componentDidMount() {
        // firebase things?
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } 
        });
    }

    logout() {
        auth.signOut()
        .then(() => {
            this.setState({
                user: null
            });
        });
    }
    login() {
        RNTwitterSignIn.init(twitter.key, twitter.secret);
     
        RNTwitterSignIn.logIn()
        .then(function(loginData){
            var accessToken = Firebase.auth
                                    .TwitterAuthProvider
                                    .credential(
                                        loginData.authToken,
                                        loginData.authTokenSecret
                                    );
            this.handleFirebaseLogin(accessToken);
        }).catch(function(error) {
            // TODO: Handle error
        });
    }

    handleFirebaseLogin(accessToken, options) {
        auth.signInWithCredential(accessToken)
          .then(function(data) {
                var user = auth.currentUser;
          })
          .catch(function(error) {
                        var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            if (errorCode === 'auth/account-exists-with-different-credential') {
              console.log('Email already associated with another account.');
            }
          })
        }

    render() {
        return (
            <View style={styles.container}>

                {this.state.user ?
                    < Button title='Login' onPress={this.login} />
                    : 
                    < SwipeInterface />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f7fa',
  },
 
});
