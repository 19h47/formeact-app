import React from 'react';

export function title(title) {
	return (
		<div className="row">
			<div className="col-12"><h1 className="Hero__title">{title}</h1></div>
		</div>
	);
};


export function description(description) {
	return (
		<div className="col-7">
			<div className="Hero__description" dangerouslySetInnerHTML={{
				__html: description
			}} />
		</div>
	);
};
