import React from 'react';

import Layout from '@components/Layout';
import Seo from '@components/Seo';


const NotFoundPage = ({ location }) => (
	<Layout location={{ location }}>
		<section class="Hero">
			<div class="Site-container">
				<div class="row">
					<div class="col-12">
						<h1 class="Hero__title">404</h1>
					</div>
				</div>
				<div class="row">
					<div class="col-7">
						<div class="Hero__description">Vous venez d'atteindre une page qui n'existe pas... la tristesse.</div>
					</div>
				</div>
			</div>
		</section>
		<Seo title="404" />
	</Layout>
);

export default NotFoundPage;
