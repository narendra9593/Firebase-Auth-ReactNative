import React, {Component} from 'react';
import {Text} from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common'
// import firebase
import firebase from '@firebase/app'
import '@firebase/auth'
// import OutlinedInput from '@material-ui/core/OutlinedInput';

class Loginform extends Component {

	state = {email:'', password:'', error: ' ', loading: false};

	renderButton() {
		if(this.state.loading){
			return <Spinner size="small"/>
		}
		return(
			<Button onPress={this.onButtonPress.bind(this)}> 
				Log in 
			</Button>
			);
	}

	onButtonPress(){
		//destructin property
		const { email, password } = this.state;

		this.setState({ error: ' ', loading: true });
		// signin user to firebase using email & password
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				// catch function call when signin fail then create account
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(() =>{this.onLoginFail.bind(this)
					});	
			});
	}

	onLoginFail(){
		this.setState({
		 error : 'Authentication Failed.',
		 loading: false
		 });
	}
	onLoginSuccess(){
		this.setState({
			email: '',
			password: '',
			loading:false,
			error: ''
		});
	}
	render(){
		return(
			<Card>
				<CardSection >
					<Input 
						placeholder="User@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection >
					<Input 
						placeholder="password"
						label="Password"
						secureTextEntry
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				<Text style = {styles.errorTextStyle}>
					{this.state.error}
				</Text>
				<CardSection >
					{ this.renderButton() }
				</CardSection>

			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default Loginform;