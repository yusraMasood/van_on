import Axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
		console.log(email,password);
		console.log(AsyncStorage);
		try {
			Axios.post(`https://dev74.onlinetestingserver.com:8040/api/login`,  {
				email,
				password
			}).then(async (promise) => {
				// console.log(promise.data);
				const value = promise.data;
				if (value.token) {
					console.log("token",value.token);
					console.log(tokenName);
					await AsyncStorage.setItem(tokenName, String(value.token));
					console.log("sososjos");
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
