import React from 'react';
import { 
    StyleSheet, 
    TouchableOpacity,
    View, 
    Image,
    Text,
    NativeModules 
} from 'react-native';

import { Router, Scene, Actions, Modal, ActionConst } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import firebase from 'react-native-firebase'

import { auth } from '../handlers/firebase';
import { twitter } from '../handlers/config';

const RNTwitterSignIn = NativeModules.RNTwitterSignIn;

//redux setup 
import reducers from '../reducers';

const ReduxRouter = connect()(Router);

const middleware = [thunk];
const store = compose(
    applyMiddleware(...middleware)
)(createStore)(reducers);

import CardSwiper from './CardSwiper';

if (__DEV__) {
    NativeModules.DevSettings.setIsDebuggingRemotely(true)
}
console.disableYellowBox = true;

class App extends React.Component {

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
            <ReduxRouter>
                <Scene
                    key='root'
                    sceneStyle={styles.root}
                    hideNavBar
                >
                    <Scene
                        key='CardSwiper'
                        component={CardSwiper}
                        title={'CardSwiper'}
                    />
                </Scene>
            </ReduxRouter>
        );
       
                
                    
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F6F9',
    },
    logout: {
        backgroundColor: '#ff0000',
        height: '20%'
    },
    logo: {
        flex: 0.5,
        width: '60%',
        resizeMode: 'contain'
    },
    loginContainer: {
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonText: {
        fontSize: 20.0,
    },
    twitterLogo: {
        resizeMode: 'contain',
        height: 50,
        width: 50,
    }
});

const ReduxApp = connect()(App);

export default function AppWrapper() {
    return (
        <Provider store={store}>
            <ReduxApp />
        </Provider>
    );
}
//this.state.isAuthenticated ?
// < TouchableOpacity 
//     style={styles.logout} 
//     onPress={this.logout} 
// >
//     <Text>Logout</Text>
// </ TouchableOpacity >
// : 
// < View 
//     style={styles.loginContainer}
// >
//     < Image 
//         source={require("./assets/Logo.png")}
//         style={styles.logo}
//     />
//     < TouchableOpacity 
//         style={styles.loginButtonContainer}
//         onPress={this.login} 
//     >
//         <Text
//                 style={styles.loginButtonText}
//         >
//             Login With Twitter
//         </Text>
//         < Image
//             source={require("./assets/TwitterLogo.png")}
//             style={styles.twitterLogo}
//         />
//     </ TouchableOpacity >
// </ View >
