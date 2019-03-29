var environments = {
	staging: {
		FIREBASE_API_KEY: 'XXXXX',
		FIREBASE_AUTH_DOMAIN: 'XXXX',
		FIREBASE_DATABASE_URL: 'XXXXX',
		FIREBASE_PROJECT_ID: 'XXXXX',
		FIREBASE_STORAGE_BUCKET: 'XXXXX',
		FIREBASE_MESSAGING_SENDER_ID: 'XXXXXX',
		GOOGLE_CLOUD_VISION_API_KEY: 'XXXXXXXXX'
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
