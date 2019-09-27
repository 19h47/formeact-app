import React from 'react';

import { illustration, url, link } from '@components/utils';

const TextImage = ({ data }) => (
	<section className={ `Text-image Section background-color-${data.background}` }>
	{console.log(data)}
		<div className="Site-container">
			<div className="row">
				<div className="col-12 col-md-7">
					<div className="Text-image__items">
						<p
							className="Text-image__content"
							dangerouslySetInnerHTML={{ __html: data.content }}
						/>
						<p className="Text-image__title">{data.title}</p>
					</div>
				</div>
				{null !== data.illustration ? illustration(data.illustration) : ''}
			</div>
			<footer className="row d-flex align-items-center">
				<div className="col-7 d-flex align-items-center">
					<hr className="Text-image__horizontal-line" />
				</div>
				<div className="col-3 offset-1 d-flex justify-content-center">
					{null !== data.link && undefined !== data.link ? link(data.link) : ''}
				</div>
				<div className="col-1 d-flex align-items-center justify-content-center">
					{null !== data.link && undefined !== data.link ? url(data.link) : ''}
				</div>
			</footer>
		</div>
	</section>
);

export default TextImage;
