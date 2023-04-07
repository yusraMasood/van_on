import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Text from './Text';

import { SCREEN_WIDTH } from '../Constants';

const getStyles = ({ bordertype, elevation }) => {
	const containerStyles = [ styles.containerDefault ];

	if (bordertype === 'Rounded') {
		containerStyles.push({ borderRadius: 25 });
	} else if (bordertype === 'Squared') {
		containerStyles.push({ borderRadius: 8 });
	}

	if (elevation) {
		containerStyles.push({ elevation: 5 });
	}
	return { containerStyles };
};

const Button = (props) => {
	const {
		backgroundColor,
		rippleColor,
		color,
		children,
		iconName,
		animation,
		fontWeight,
		onPress,
		style,
		loading,
		...rest
	} = props;

	const { containerStyles } = getStyles({ ...rest });

	if (animation === 'Ripple') {
		return (
			<RectButton
				style={[ containerStyles, { backgroundColor, ...style } ]}
				rippleColor={rippleColor}
				onPress={onPress && onPress}
			>
				<Text color={color} fontWeight={fontWeight} style={styles.text}>
					{children}
				</Text>
				{loading ? (
					<ActivityIndicator color={color} size='small' />
				) : (
					<Icon name={iconName} size={20} color={color} />
				)}
			</RectButton>
		);
	}

	return (
		<TouchableOpacity style={[ containerStyles, { backgroundColor, ...style } ]} onPress={onPress && onPress}>
			<Text color={color} fontWeight={fontWeight} style={styles.text}>
				{children}
			</Text>
			{loading ? (
				<ActivityIndicator color={color} size='small' />
			) : (
				<Icon name={iconName} size={20} color={color} />
			)}
		</TouchableOpacity>
	);
};

export default Button;

Button.defaultProps = {
	backgroundColor: '#075E54',
	color: '#fff',
	rippleColor: '#fff',
	animation: 'Default',
	fontWeight: 'Regular',
	bordertype: 'Default'
};

Button.Prototype = {
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	rippleColor: PropTypes.string,
	animation: PropTypes.string,
	elevation: PropTypes.bool,
	fontWeight: PropTypes.oneOf([ 'Light', 'Regular', 'Bold', 'SemiBold', 'Bold', 'ExtraBold' ]),
	bordertype: PropTypes.oneOf([ 'Default', 'Rounded', 'Squared' ])
};

const styles = StyleSheet.create({
	containerDefault: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH - 30,
		height: 50
	},
	text: {
		marginHorizontal: 5
	}
});
