import React from 'react';
import Animated from 'react-native-reanimated';

import { StyleSheet } from 'react-native';

import Text from '../../../../../components/Text';

const Heading = ({ textColor }) => {
	return (
		<Animated.View style={styles.textContainer}>
			<Text fontSize={30} fontWeight='Bold' color={textColor}>
				Welcome,
			</Text>
			<Text fontSize={20} fontWeight='SemiBold' color={textColor}>
				Sign in to continue!
			</Text>
		</Animated.View>
	);
};

export default Heading;

const styles = StyleSheet.create({
	textContainer: {
		paddingLeft: 20,
		paddingVertical: 15
	}
});
