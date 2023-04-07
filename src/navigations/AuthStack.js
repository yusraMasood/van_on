import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn/Index';

const Stack = createStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator initialRouteName='Sign In' headerMode='none'>
			<Stack.Screen name='Sign In' component={SignIn} />
		</Stack.Navigator>
	);
};

export default AuthStack;
