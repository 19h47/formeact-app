import React from 'react';

export const renderTitle = (title) => (
	<div className="row">
		<div className="col-12"><h1 className="Hero__title">{title}</h1></div>
	</div>
);


export const renderDescription = (description) => (
	<div className="col-12 col-md-7">
		<div className="Hero__description" dangerouslySetInnerHTML={{ __html: description }} />
	</div>
);
