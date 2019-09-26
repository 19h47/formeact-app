import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header/index';
import Footer from '@components/Footer/index';
import Guid from '@components/Guid';

import '../stylesheets/styles.scss';

const Layout = ({ children }) => (
	<>
		<Header />
		<div className="content">{children}</div>
		<Footer />
		<Guid />
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout;
