import React from 'react';
import { 
    StyleSheet, 
    TouchableOpacity,
    View, 
    NativeModules 
} from 'react-native';

import firebase from 'react-native-firebase'

import { auth } from './handlers/firebase'
import { twitter } from './handlers/config';

const RNTwitterSignIn = NativeModules.RNTwitterSignIn;

import SwipeInterface from './components/SwipeInterface';

if (__DEV__) {
    NativeModules.DevSettings.setIsDebuggingRemotely(true)
}
console.disableYellowBox = true;

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isAuthenticated: false,
            user: null,
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this); 
        this.handleFirebaseLogin = this.handleFirebaseLogin.bind(this);
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ 
                    isAuthenticated: true,
                    user: user 
                });
            } 
        });
    }

    logout() {
        auth.signOut()
        .then(() => {
            this.setState({
                isAuthenticated: false,
                user: null
            });
        });
    }

    login() {
        RNTwitterSignIn.init(twitter.key, twitter.secret);
     
        RNTwitterSignIn.logIn()
        .then((loginData) => {
            var accessToken = new firebase.auth.TwitterAuthProvider.credential(
                                                                loginData.authToken,
                                                                loginData.authTokenSecret
                                                            );
            this.handleFirebaseLogin(accessToken);
        }).catch((error) => {
            console.log('Twitter failure')
            console.log(error)
        });
    }

    handleFirebaseLogin(accessToken) {
        auth.signInAndRetrieveDataWithCredential(accessToken)
            .then((data) => {
                this.setState({ 
                    isAuthenticated: true,
                    user: data.user 
                });
            })
            .catch((error) => {
                console.log('auth error')
                console.log(error);
                this.setState({ 
                    isAuthenticated: false,
                    user: null 
                });

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
                {this.state.isAuthenticated ?
                    //< Button title='Logout' onPress={this.logout} />
                    < SwipeInterface />
                    : 
                    < TouchableOpacity title='Login' onPress={this.login} />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F6F9',
    },
});
