import React from 'react';

import { StyleSheet, View, ActivityIndicator, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Spinner = () => {
	return (
		<View style={{ ...styles.container }}>
			<Image source={require('../../assets/VanOn_Logo.png')} resizeMode='contain' style={styles.image} />
			<ActivityIndicator size='large' color='#075E54' />
		</View>
	);
};

export default Spinner;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#d9d9d9'
	},
	image: {
		width: width,
		height: 200 * (width / 541)
	}
});
