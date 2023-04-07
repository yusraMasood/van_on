import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from './AuthStack';
import BottomTabNavigator from './BottomTabNavigator';
import Loading from '../screens/Loading';

import { getToken } from '../AsyncStorage';

const Stack = createStackNavigator();

const RootStack = () => {
	const { isLoading, token, user } = useSelector((state) => state);

	const dispatch = useDispatch();
	// console.log("hello");

	useEffect(
		() => {
			if (!user && !token) {
				getToken().then((tokenValue) => {
					if (tokenValue) {
						dispatch({ type: 'SET_TOKEN', payload: { token: tokenValue } });
					} else {
						dispatch({ type: 'TOKEN_NOT_FOUND' });
					}
				});
			}
		},
		[isLoading]
	);

	return (
		<Stack.Navigator headerMode='none' screenOptions={{ animationEnabled: true }}>
			{isLoading ? (
				<Stack.Screen name='Loading' component={Loading} />
			) : user && token ? (
				<Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} />
			) : (
				<Stack.Screen name='AuthStack' component={AuthStack} />
			)}
		</Stack.Navigator>
	);
};

export default RootStack;

