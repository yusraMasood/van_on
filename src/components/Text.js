import React from 'react';
import PropTypes from 'prop-types';

import ReactNative from 'react-native';

const getStyles = ({ fontSize, fontWeight, color, style }) => {
	const textStyles = {
		fontSize,
		fontFamily: fontWeight,
		color,
		...style
	};

	return { textStyles };
};

const Text = (props) => {
	const { children, ...rest } = props;
	const { textStyles } = getStyles({ ...rest });

	return <ReactNative.Text style={textStyles}>{children}</ReactNative.Text>;
};

export default Text;

Text.defaultProps = {
	fontSize: 16,
	fontWeight: 'Regular',
	color: '#fff'
};

Text.prototype = {
	fontSize: PropTypes.number,
	fontWeight: PropTypes.oneOf([ 'Light', 'Regular', 'Bold', 'SemiBold', 'Bold', 'ExtraBold' ]),
	color: PropTypes.string
};
