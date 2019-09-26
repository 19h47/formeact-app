import React from 'react';


import chevronDown from '../../img/svg/chevron-down.svg';


const title = (title) => (
	<div className="row">
		<div className="col-12"><h1 className="Hero__title">{title}</h1></div>
	</div>
);


const description = description => (
	<div className="col-7">
		<div className="Hero__description" dangerouslySetInnerHTML={{
			__html: description
		}} />
	</div>
);


const link = (link) => {
	if (null === link.title) {
		return false;
	}

	return (
		<a className="Hero__link" href={link.url}>{link.title || 'Découvrir' }</a>
	);
};

const url = (link) => {
	if (null === link.url) {
		return false;
	}

	return (
		<a className="Hero__url" href={link.url}>
			<img src={chevronDown} width="14.5px" height="9px" alt="" loading="lazy" />
		</a>
	);
};


const illustration = (illustration) => {
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


const Hero = ({ data }) => (
	<section className="Hero">
		<div className="Site-container">
			{null !== data.title ? title(data.title) : ''}
			<div className="row">
				{null !== data.description ? description(data.description) : ''}
				{null !== data.illustration ? illustration(data.illustration) : ''}
			</div>
			<footer className="row d-flex align-items-center">
				<div className="col-7 d-flex align-items-center">
					<hr className="Hero__horizontal-line" />
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

export default Hero;
