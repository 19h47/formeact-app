import React from 'react';

import { renderTitle, renderDescription } from '@components/Hero/utils';
import { illustration, renderEmail, renderLink, renderUrl } from '@components/utils';
import createLocalLink from '../../utils';

const Hero = ({ data }) => {
	const { title, description, email, link } = data;

	return (
		<section className="Hero">
			<div className="Site-container">
				{renderTitle(title)}
				<div className="row">
					{renderDescription(description)}
					{null !== data.illustration ? illustration(data.illustration) : ''}
				</div>
				<footer className="row d-flex align-items-center">
					<div className="col-12 col-md-7 d-flex align-items-center">
						<hr className="Hero__horizontal-line" />
					</div>
					<div className="col-9 col-md-3 offset-md-1 d-flex justify-content-center">
						{undefined !== email && email.address ? renderEmail(email) : undefined !== link && null !== link ? renderLink(link) : ''}
					</div>
					<div className="col-3 col-md-1 d-flex align-items-center justify-content-center">
						{undefined !== email && null !== email && email.address ? renderUrl({ url: `mailto:${email.address}`, direction: 'right' }) : undefined !== link && null !== link && link.url ? renderUrl({ url: createLocalLink(link.url) }) : ''}
					</div>
				</footer>
			</div>
		</section>
	)
};

export default Hero;
