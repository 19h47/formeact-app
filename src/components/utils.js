import React from 'react';
import createLocalLink from '../utils';
// import { Link } from 'gatsby';

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
		<div className="col-12 col-md-3 offset-md-1 align-items-md-end d-md-flex">
			<img className="Section__illustration" src={image} alt={illustration} loading="lazy" />
		</div>
	)
};


export const renderEmail = (email) => {
	const { address, title } = email;

	return (
		<a className="Section__link" href={`mailto:${address}`} target="_blank" rel="noopener noreferrer">{title}</a>
	);
}


export const renderLink = (link) => {
	const { url, title } = link;

	return (
		<a className="Section__link" href={createLocalLink(url)}>{title || 'Découvrir' }</a>
	);
};

export const renderUrl = (options) => {
	const { url, color = 'blue-very-dark-01', direction = 'down' } = options;
	const chevronDown = require(`../img/svg/chevron${ direction ? `-${ direction }` : ''}${ color ? `-${ color }` : '' }.svg`);

	return (
		<a className={`Section__url Section__url--${ direction }`} href={url}>
			<img src={chevronDown} width="14.5px" height="9px" alt="" loading="lazy" />
		</a>
	);
};
