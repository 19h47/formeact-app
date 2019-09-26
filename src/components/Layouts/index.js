import React from 'react';


import Tweets from '@components/Tweets';
import List from '@components/List';
import MultiColumns from '@components/MultiColumns';
import Text from '@components/Text';


const Layouts = ({ data }) => {
	const layouts = [];

	data.map((layout, index) => {
		if ('Tweets' === layout.name) {
			layouts.push(<Tweets key={index} />);
		}

		if ('List' === layout.name) {
			layouts.push(<List data={layout} key={index} />);
		}

		if ('MultiColumns' === layout.name) {
			layouts.push(<MultiColumns data={layout} key={index} />);
		}

		if ('Text' === layout.name) {
			layouts.push(<Text data={layout} key={index} />)
		}

		return layouts;
	});

    return layouts;
};


export default Layouts;
