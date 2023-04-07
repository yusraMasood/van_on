import { Dimensions } from 'react-native';

import Config from './Config';

const { width, height } = Dimensions.get('window');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

export const LOGIN_VIEW = SCREEN_WIDTH / 2.5;

export const tokenName = Config.TOKEN_NAME;
export const url = Config.API_URL;

export const DELTA = 0.025;
export const OFFSET = 1.3;

export const LATITUDE_DELTA = DELTA * OFFSET;
export const LONGITUDE_DELTA = DELTA * OFFSET;

export const DEFAULT_DELTAS = {
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA
};
