import { LATITUDE_DELTA, LONGITUDE_DELTA } from '../../Constants';

export const getUserLocation = async () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				resolve({
					latitude,
					longitude,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA
				});
			},
			(error) => {
				// See error code charts below.
				//console.log(error.code, error.message);
				// reject(error);
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		);
	});
};
