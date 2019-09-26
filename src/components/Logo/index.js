import React from 'react';
import { Link } from 'gatsby';

const Logo = ({ color }) => {
	const logo = require(`../../img/svg/logo-${ color }.svg`);

	return (
		<Link className="Logo" to="/" rel="home">
			<img src={logo} alt="Forméact" width="210" height="58"/>
		</Link>
	);
};

export default Logo;
