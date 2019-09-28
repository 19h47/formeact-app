import React from 'react';
import createLocalLink from '../utils';

export function illustration(illustration) {
	if (null === illustration || undefined === illustration) {
		return false;
	}

	let image = null;

	if (illustration === 'datadock') {
		image = require(`../img/png/${illustration}.png`);
	} else {
		image = require(`../img/svg/${illustration}.svg`);
	}

	return (
		<div className="col-3 offset-md-1 align-items-end d-flex">
			<img className="Section__illustration" src={image} alt={illustration} loading="lazy" />
		</div>
	)
};


export function link(link) {
	if (null === link.title) {
		return false;
	}

	return (
		<a className="Section__link" href={createLocalLink(link.url)}>{link.title || 'Découvrir' }</a>
	);
};

export function url(link, color = '') {
	const chevronDown = require(`../img/svg/chevron-down${ color ? `-${ color }` : '' }.svg`);

	if (null === link.url) {
		return false;
	}

	return (
		<a className="Section__url" href={createLocalLink(link.url)}>
			<img src={chevronDown} width="14.5px" height="9px" alt="" loading="lazy" />
		</a>
	);
};
