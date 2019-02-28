import React from 'react';
import {View} from 'react-native';

// render component

const CardSection = (props) => {
	return (
		<View style = {styles.containerStyle}> 
		{props.children}
		</View>
		);
};

////

const styles = {
	containerStyle:{
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		borderColor: '#ddd',
		flexDirection: 'row'
		
	}
};


/// export component


export {CardSection};


