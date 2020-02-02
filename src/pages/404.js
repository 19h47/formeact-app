import React from 'react';

import Layout from '@components/Layout';
import Seo from '@components/Seo';


const NotFoundPage = ({ location }) => (
	<Layout location={{ location }}>
		<section className="Hero">
			<div className="Site-container">
				<div className="row">
					<div className="col-12">
						<h1 className="Hero__title">404</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-7">
						<div className="Hero__description">Vous venez d'atteindre une page qui n'existe pas... la tristesse.</div>
					</div>
				</div>
			</div>
		</section>
		<Seo title="404" />
	</Layout>
);

export default NotFoundPage;
