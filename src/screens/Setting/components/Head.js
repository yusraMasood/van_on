import React from 'react';

import { StyleSheet, View, Image } from 'react-native';
import { useSelector } from 'react-redux';

import Text from '../../../components/Text';

import { SCREEN_WIDTH } from '../../../Constants';

const textColor = '#434343';

const Head = () => {
	const { user: { name: { firstName, lastName }, details: { email } } } = useSelector((state) => state.user);
	return (
		<View style={styles.container}>
			<Image source={require('../../../../assets/avatar.png')} style={styles.image} />
			<View>
				<Text fontSize={26} fontWeight='Bold' color={textColor}>
					{firstName.concat(` ${lastName}`)}
				</Text>
				<Text fontSize={18} fontWeight='SemiBold' color={textColor}>
					{email}
				</Text>
			</View>
		</View>
	);
};

export default Head;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginVertical: 25,
		width: SCREEN_WIDTH
	},
	image: {
		width: 110,
		height: 110
	}
});
