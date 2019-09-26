import React from 'react';

import Layout from '../Components/Layout';
import Seo from '../Components/Seo';


const NotFoundPage = ({ location }) => (
	<Layout location={{ location }}>
		<Seo title="404: Not found" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn't exist... the sadness.</p>
	</Layout>
);


export default NotFoundPage;
