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


export function link(link) {
	if (null === link.title) {
		return false;
	}

	return (
		<a className="Hero__link" href={link.url}>{link.title || 'Découvrir' }</a>
	);
};

export function url(link, color = '') {
	const chevronDown = require(`../../img/svg/chevron-down${ color ? `-${ color }` : '' }.svg`);

	if (null === link.url) {
		return false;
	}

	return (
		<a className="Hero__url" href={link.url}>
			<img src={chevronDown} width="14.5px" height="9px" alt="" loading="lazy" />
		</a>
	);
};


export function illustration(illustration) {
	if (null === illustration || undefined === illustration) {
		return false;
	}

	const image = require(`../../img/svg/${illustration}.svg`);

	return (
		<div className="col-3 offset-md-1">
			<img className="Section__illustration" src={image} alt="" loading="lazy" />
		</div>
	)
};
