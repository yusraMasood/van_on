import React, { useState, useEffect } from 'react';
import Animated from 'react-native-reanimated';

import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Text from '../../../../../components/Text';
import TextInput from '../../../../../components/TextInput';
import Button from '../../../../../components/Button';

import { setToken } from '../../../../../AsyncStorage';

const Form = ({ textColor }) => {
	const [ viewPassowrd, setViewPassword ] = useState(true);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState('');

	const { token } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(
		() => {
			setLoading(false);
		},
		[ token ]
	);

	const changeEmailHandler = (value) => {
		setEmail(value);
	};

	const changePasswordHandler = (value) => {
		setPassword(value);
	};

	const signInHandler = () => {
		setLoading(true);

		if (!email && !password) {
			setError('Please enter email and password!');
			setLoading(false);
		} else if (!email && password) {
			setError('Please enter email address!');
			setLoading(false);
		} else if (email && !password) {
			setError('Please enter password!');
			setLoading(false);
		} else {
			if (validateEmail(email)) {
				setError('');
				setToken({ email, password })
					.then((tokenValue) => {
						dispatch({ type: 'SET_TOKEN', payload: { token: tokenValue } });
					})
					.catch((error) => {
						setError(error);
						setLoading(false);
					});
			} else {
				setError('Please enter a valid email address!');
				setLoading(false);
			}
		}
	};

	const validateEmail = (email) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	return (
		<Animated.View style={styles.actionContainer}>
			<TextInput
				iconLeftName='email'
				name='Email'
				keyboardType='email-address'
				bordertype='Rounded'
				elevation
				color={textColor}
				style={styles.textInput}
				value={email}
				OnChangeText={changeEmailHandler}
			/>
			<TextInput
				iconLeftName='key'
				iconRightName={viewPassowrd ? 'eye' : 'eye-off'}
				iconRightPress={() => {
					setViewPassword(!viewPassowrd);
				}}
				name='Password'
				bordertype='Rounded'
				textVisibility={viewPassowrd}
				elevation
				color={textColor}
				style={styles.textInput}
				value={password}
				OnChangeText={changePasswordHandler}
			/>

			<Text fontWeight='SemiBold' color={'red'} style={styles.error}>
				{error}
			</Text>

			<Button
				iconName='login'
				bordertype='Rounded'
				animation='Ripple'
				elevation
				onPress={signInHandler}
				loading={loading}
			>
				Sign In
			</Button>
		</Animated.View>
	);
};

export default Form;

const styles = StyleSheet.create({
	actionContainer: {
		alignItems: 'center'
	},
	error: {
		alignSelf: 'center',
		marginBottom: 10
	},
	textInput: {
		marginVertical: 15
	}
});
