import React from 'react';

import { illustration, renderUrl, renderLink } from '@components/utils';
import createLocalLink from '../../utils';

const TextImage = ({ data, 'layout-index': layoutIndex }) => {
	const { title, background, content } = data;

	return (
		<section id={layoutIndex} className={ `Text-image Section background-color-${background}` }>
			<div className="Site-container">
				<div className="row">
					<div className="col-12 col-md-7">
						<div className="Text-image__items">
							<p
								className="Text-image__content"
								dangerouslySetInnerHTML={{ __html: content }}
							/>
							<p className="Text-image__title">{title}</p>
						</div>
					</div>
					{null !== data.illustration ? illustration(data.illustration) : ''}
				</div>
				<footer className="row d-flex align-items-center">
					<div className="col-12 col-md-7 d-flex align-items-center">
						<hr className="Section__horizontal-line" />
					</div>
					<div className="col-9 col-md-3 offset-md-1 d-flex justify-content-center">
						{null !== data.link && undefined !== data.link ? renderLink(data.link) : ''}
					</div>
					<div className="col-3 col-md-1 d-flex align-items-center justify-content-center">
						{null !== data.link && undefined !== data.link ? renderUrl({ url: createLocalLink(data.link.url), direction: 'right' }) : ''}
					</div>
				</footer>
			</div>
		</section>
	);
}

export default TextImage;
