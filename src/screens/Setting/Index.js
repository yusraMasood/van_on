import React from 'react';

import { StyleSheet, View } from 'react-native';

import Head from './components/Head';
import SignOut from './components/SignOut';

const Index = () => {
	return (
		<View style={styles.container}>
			<Head />
			<SignOut />
		</View>
	);
};

export default Index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	}
});
