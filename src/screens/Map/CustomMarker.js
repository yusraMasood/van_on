import React from 'react';

import { Marker } from 'react-native-maps';
import { StyleSheet, Image } from 'react-native';

const CustomMarker = ({ point }) => {
	return (
		<Marker coordinate={point}>
			<Image resizeMode='contain' style={styles.image} source={require('../../../assets/VanOn_LogoMark.png')} />
		</Marker>
	);
};

export default CustomMarker;

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50
	}
});
