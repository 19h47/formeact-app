import React from 'react';

import { title, description } from '@components/Hero/utils';
import { illustration, link, url } from '@components/utils';

const Hero = ({ data }) => (
	<section className="Hero">
		<div className="Site-container">
			{null !== data.title ? title(data.title) : ''}
			<div className="row">
				{null !== data.description ? description(data.description) : ''}
				{null !== data.illustration ? illustration(data.illustration) : ''}
			</div>
			<footer className="row d-flex align-items-center">
				<div className="col-12 col-md-7 d-flex align-items-center">
					<hr className="Hero__horizontal-line" />
				</div>
				<div className="col-9 col-md-3 offset-md-1 d-flex justify-content-center">
					{null !== data.link && undefined !== data.link ? link(data.link) : ''}
				</div>
				<div className="col-3 col-md-1 d-flex align-items-center justify-content-center">
					{null !== data.link && undefined !== data.link ? url({ link: data.link }) : ''}
				</div>
			</footer>
		</div>
	</section>
);

export default Hero;
