
// import lib 

import React , {Component} from 'react';
import {View, Text} from 'react-native';
// import firebase
import firebase from '@firebase/app'
import '@firebase/auth'
import { Header , Button, Spinner } from './component/common';
import Loginform from './component/Loginform';

// Create component

class App extends Component{
state = { loggedIn: null };
	//
	componentWillMount(){
		firebase.initializeApp(
			{
   				apiKey: 'AIzaSyCjO2zl6QsEh1h0OXcK1iHTVkrs5KplVNM',
   				authDomain: 'loginauth-2b2c6.firebaseapp.com',
    			databaseURL: 'https://loginauth-2b2c6.firebaseio.com',
    			projectId: 'loginauth-2b2c6',
    			storageBucket: 'loginauth-2b2c6.appspot.com',
    			messagingSenderId: '275311192886'
  			});
		firebase.auth().onAuthStateChanged((user) =>{
			if(user){
				this.setState({ loggedIn: true });
			}else{
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent(){
		switch(this.state.loggedIn){
			case true:
				return (<Button onPress = {() => firebase.auth().signOut()}>
							Log Out
						</Button>
				);
			case false:
				return <Loginform />;
			default:
				return <Spinner size="large"/>
		}
				
	}
	render(){
		return(
			<View>
				<Header headerText= "Login"/>
				{this.renderContent()}
			</View>
		);
	}	
}

export default App;
