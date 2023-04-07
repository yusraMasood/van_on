import React from 'react';

import { useDispatch } from 'react-redux';

import Button from '../../../components/Button';

import { removeToken } from '../../../AsyncStorage';

const SignOut = () => {
	const dispatch = useDispatch();

	const logoutHandler = () => {
		removeToken().then(() => {
			dispatch({ type: 'REMOVE_USER_TOKEN' });
		});
	};

	return (
		<Button iconName='logout' bordertype='Rounded' animation='Ripple' elevation onPress={logoutHandler}>
			Sign Out
		</Button>
	);
};

export default SignOut;
