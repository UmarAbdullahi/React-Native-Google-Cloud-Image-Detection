var environments = {
	staging: {
		FIREBASE_API_KEY: 'AIzaSyCjQbSr3bahzlZdi6VSeSLXn-4CJ4abNiI',
		FIREBASE_AUTH_DOMAIN: 'logo-detect-76b90.firebaseapp.com',
		FIREBASE_DATABASE_URL: 'https://logo-detect-76b90.firebaseio.com',
		FIREBASE_PROJECT_ID: 'logo-detect-76b90',
		FIREBASE_STORAGE_BUCKET: 'logo-detect-76b90.appspot.com',
		FIREBASE_MESSAGING_SENDER_ID: '616240319810',
		GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyAQK_LjA5EJwP5O0UmvzGIwLoVTc5IhtHw'
	},
	production: {
		// Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
	}
};

function getReleaseChannel() {
	let releaseChannel = Expo.Constants.manifest.releaseChannel;
	if (releaseChannel === undefined) {
		return 'staging';
	} else if (releaseChannel === 'staging') {
		return 'staging';
	} else {
		return 'staging';
	}
}
function getEnvironment(env) {
	console.log('Release Channel: ', getReleaseChannel());
	return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;