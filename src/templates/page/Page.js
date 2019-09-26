import React from 'react';


// components.
import Layout from '@components/Layout';
import Seo from '@components/Seo';
import Hero from '@components/Hero';
import Layouts from '@components/Layouts';


const Page = props => {
	const { pageContext: { title, excerpt, fields } } = props;

	return (
		<Layout>
			<Seo title={title} description={excerpt} />
			<Hero data={fields.hero} />
			<Layouts data={fields.layouts} />
    	</Layout>
  	);
};


export default Page;
