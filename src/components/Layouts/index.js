import React from 'react';


import Tweets from '@components/Tweets';
import List from '@components/List';
import MultiColumns from '@components/MultiColumns';
import Text from '@components/Text';
import TextImage from '@components/TextImage';
import Posts from '@components/Posts';

const Layouts = ({ data }) => {
	const layouts = [];

	data.map((layout, index) => {
		if ('Tweets' === layout.name) {
			layouts.push(<Tweets key={index} layout-index={index} />);
		}

		if ('List' === layout.name) {
			layouts.push(<List data={layout} key={index} layout-index={index} />);
		}

		if ('MultiColumns' === layout.name) {
			layouts.push(<MultiColumns data={layout} key={index} layout-index={index} />);
		}

		if ('Text' === layout.name) {
			layouts.push(<Text data={layout} key={index} layout-index={index} />);
		}

		if ('TextImage' === layout.name) {
			layouts.push(<TextImage data={layout} key={index} layout-index={index} />);
		}

		if ('Posts' === layout.name) {
			layouts.push(<Posts data={layout} key={index} layout-index={index} />);
		}

		return layouts;
	});

    return layouts;
};


export default Layouts;
