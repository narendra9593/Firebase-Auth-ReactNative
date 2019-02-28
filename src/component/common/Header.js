import React from 'react';
import { Text , View } from 'react-native';

const Header = (props) => {

	const {textStyle,viewStyle} = styles;
	return (
		<View style={viewStyle}>
			<Text style ={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {

	viewStyle:{
		height:60,
		backgroundColor:'#fff',
		justifyContent:'center',
		alignItems:'center',
		padding:5,
		shadowColor: '#000',
		shadowOffset:{width:0,height:2},
		shadowOpacity:0.5,
		elevation: 2,
		position: 'relative'
	},
	textStyle:{
		fontSize: 20,
		fontWeight: "bold"
	}
};

export {Header};