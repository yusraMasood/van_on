import Axios from 'axios';

import { AsyncStorage } from 'react-native';

import { tokenName, url } from './Constants';

export const getToken = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const token = await AsyncStorage.getItem(tokenName);
			resolve(token);
		} catch (error) {}
	});
};

export const setToken = ({ email, password }) => {
	return new Promise((resolve, reject) => {
		try {
			Axios.post(url + 'api/login', {
				email,
				password
			}).then(async (promise) => {
				const value = promise.data;
				if (value.token) {
					await AsyncStorage.setItem(tokenName, value.token);
					resolve(value.token);
				} else {
					reject(value.message);
				}
			});
		} catch (error) {}
	});
};

export const removeToken = () => {
	return new Promise(async (resolve, reject) => {
		try {
			await AsyncStorage.removeItem(tokenName);
			resolve();
		} catch (error) {}
	});
};
