import config from '../../config';

export const createLocalLink = url => {
	if (null === url) {
		return null;
	}

	if ('#' === url) {
		return null;
	}

	return url.replace(config.wordPressUrl, '');
}
