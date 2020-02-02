import React from 'react';

const Text = ({ data, 'layout-index': layoutIndex }) => {
	const { background, content, title } = data;

	return (
		<section id={layoutIndex} className={ `Text Section background-color-${background}` }>
			<div className="Site-container">
				<div className="row">
					<div className="col-12 col-md-7">
						<div className="Section__items">
							<p className="Text__content" dangerouslySetInnerHTML={{ __html: content }}/>
							<p className="Text__title">{title}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Text;
