import config from '../../config';

export default function createLocalLink(url) {
	if (null === url) {
		return null;
	}

	if ('#' === url) {
		return null;
	}

	return url.replace(config.wordPressUrl, '');
}
