import React from 'react';
import Animated from 'react-native-reanimated';

import { StyleSheet } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';

import Button from '../../../../components/Button';

const SlideButton = (props) => {
	const { tapHandler, animateStyle, buttonHandler, buttonName } = props;

	return (
		<TapGestureHandler onHandlerStateChange={tapHandler}>
			<Animated.View
				style={{
					...styles.buttonView,
					...animateStyle
				}}
			>
				<Button bordertype='Rounded' animation='Ripple' elevation style={styles.button} onPress={buttonHandler}>
					{buttonName}
				</Button>
			</Animated.View>
		</TapGestureHandler>
	);
};

export default SlideButton;

const styles = StyleSheet.create({
	buttonView: {
		position: 'absolute',
		bottom: 10
	},
	button: {
		width: 150
	}
});
