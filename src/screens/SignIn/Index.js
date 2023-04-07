import React, { useRef,useState } from 'react';
import Animated, { Value, useCode, cond, eq, set, interpolate, interpolateNode } from 'react-native-reanimated';

import { StyleSheet, StatusBar } from 'react-native';
import { useTiming, useTimingTransition } from 'react-native-redash';

import FormView from './components/Form/Index';
import Logo from './components/Logo';

import { SCREEN_HEIGHT, LOGIN_VIEW } from '../../Constants';

const Index = () => {
	const scale = useRef(new Value(0));
	// const [open,setOpen]=useState(false)

	const scaleAnimation = useTiming(scale.current, { duration: 500 });

	useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);

	const translateY = interpolateNode(scaleAnimation.value, {
		inputRange: [ 0, 1 ],
		outputRange: [ SCREEN_HEIGHT, LOGIN_VIEW ]
	});

	const opacity = interpolateNode(scaleAnimation.value, {
		inputRange: [ 0, 1 ],
		outputRange: [ 0, 1 ]
	});

	return (
		<Animated.View style={styles.container}>
			<StatusBar barStyle='light-content' backgroundColor='#075E54' />
			{/* <Logo scale={scaleAnimation} /> */}
			<FormView 
			translateY={translateY} opacity={opacity}
			 />
		</Animated.View>
	);
};

export default Index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#075E54'
	}
});
