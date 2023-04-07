import React from 'react';
import PropTypes from 'prop-types';

import ReactNative, { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { SCREEN_WIDTH } from '../Constants';

const getStyles = ({ bordertype, elevation, disabled, color }) => {
	const containerStyles = [ styles.containerDefault ];
	const inputStyles = [ styles.textInputDefault ];
	const iconStyles = [ styles.iconDefault ];

	if (color) {
		inputStyles.push({ color });
		iconStyles.push({ color });
	}

	if (bordertype === 'Rounded') {
		containerStyles.push({ borderRadius: 25 });
	} else if (bordertype === 'Squared') {
		containerStyles.push({ borderRadius: 8 });
	}

	if (disabled) {
		containerStyles.push({ backgroundColor: '#8c8c8c' });
		iconStyles.push({ color: '#fff' });
	}

	if (elevation) {
		containerStyles.push({ elevation: 5 });
	}
	return { containerStyles, inputStyles, iconStyles };
};

const TextInput = (props) => {
	const {
		name,
		iconLeftName,
		iconRightName,
		iconSize,
		textVisibility,
		fontSize,
		fontWeight,
		color,
		disabled,
		keyboardType,
		style,
		iconRightPress,
		iconLeftPress,
		OnChangeText,
		value,
		...rest
	} = props;

	const { containerStyles, inputStyles, iconStyles } = getStyles({ disabled, color, ...rest });

	return (
		<View style={[ containerStyles, { ...style } ]} pointerEvents={disabled ? 'none' : null}>
			{iconLeftName ? (
				<Icon
					name={iconLeftName}
					size={iconSize}
					style={[ iconStyles, { marginLeft: 20 } ]}
					onPress={iconLeftPress && iconLeftPress}
				/>
			) : null}

			<ReactNative.TextInput
				placeholder={name}
				placeholderTextColor={disabled ? '#fff' : color}
				secureTextEntry={textVisibility}
				keyboardType={keyboardType && keyboardType}
				style={[ inputStyles, { fontSize, fontFamily: fontWeight } ]}
				value={value && value}
				onChangeText={OnChangeText && OnChangeText}
			/>

			{iconRightName ? (
				<Icon
					name={iconRightName}
					size={iconSize}
					style={[ iconStyles, { marginRight: 20 } ]}
					onPress={iconRightPress && iconRightPress}
				/>
			) : null}
		</View>
	);
};

export default TextInput;

TextInput.defaultProps = {
	fontSize: 16,
	iconSize: 20,
	fontWeight: 'Regular',
	color: '#fff',
	textVisibility: false,
	disabled: false,
	bordertype: 'Default'
};

TextInput.prototype = {
	fontSize: PropTypes.number,
	iconSize: PropTypes.number,
	fontWeight: PropTypes.oneOf([ 'Light', 'Regular', 'Bold', 'SemiBold', 'Bold', 'ExtraBold' ]),
	textVisibility: PropTypes.bool,
	bordertype: PropTypes.oneOf([ 'Default', 'Rounded', 'Squared' ]),
	color: PropTypes.string,
	elevation: PropTypes.bool,
	disabled: PropTypes.bool
};

const styles = StyleSheet.create({
	containerDefault: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		height: 50,
		width: SCREEN_WIDTH - 30
	},
	iconDefault: {
		marginHorizontal: 5
	},
	textInputDefault: {
		flex: 1,
		marginHorizontal: 10
	}
});
