import React from 'react';

import { useSelector } from 'react-redux';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DriverMap from '../screens/Map/Driver/Index';
import PassengerMap from '../screens/Map/Passenger/Index';
import SettingScreen from '../screens/Setting/Index';
import Text from '../components/Text';

const Tabs = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
	const { user } = useSelector((state) => state);

	const getUser = () => {
		const { accountType } = user;

		if (accountType === 'Passenger') {
			return PassengerMap;
		} else if (accountType === 'Driver') {
			return DriverMap;
		}
	};

	if (user) {
		return (
			<Tabs.Navigator initialRouteName='Map' shifting>
				<Tabs.Screen
					name='Map'
					component={user && getUser()}
					options={{
						tabBarColor: '#3f48cc',
						tabBarLabel: (
							<Text fontSize={14} fontWeight='SemiBold'>
								Map
							</Text>
						),
						tabBarIcon: ({ color }) => <MaterialCommunityIcons name='google-maps' color={color} size={26} />
					}}
				/>
				<Tabs.Screen
					name='Setting'
					component={SettingScreen}
					options={{
						tabBarColor: '#00a8f3',
						tabBarLabel: (
							<Text fontSize={14} fontWeight='SemiBold'>
								Setting
							</Text>
						),
						tabBarIcon: ({ color }) => <MaterialCommunityIcons name='settings' color={color} size={26} />
					}}
				/>
			</Tabs.Navigator>
		);
	}

	return null;
};

export default BottomTabNavigator;
