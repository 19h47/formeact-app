import React from 'react';


// components.
import Layout from '@components/Layout';
import Seo from '@components/Seo';
import Layouts from '@components/Layouts';


const Hero = () => {

	return (
		<div className="Section"></div>
	)
}


const FrontPage = props => {
	const { pageContext: { title, excerpt, fields } } = props;

	return (
		<Layout>
			<Seo title={title} description={excerpt} />
			<Hero data={fields.hero} />
			<Layouts data={fields.layouts} />
    	</Layout>
  	);
};


export default FrontPage;
