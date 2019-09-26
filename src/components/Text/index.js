import React from 'react';

const Text = ({ data }) => (
	<section className={ `Text Section background-color-${data.background}` }>
		<div className="Site-container">
			<div className="row">
				<div className="col-12 col-md-7">
					<div className="Section__items">
						<p className="Text__content">{data.content}</p>
						<p className="Text__title">{data.title}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Text;
