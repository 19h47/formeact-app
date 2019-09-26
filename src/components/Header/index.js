import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// components
import Socials from '@components/Socials';
import Menu from '@components/Menu';
import Logo from '@components/Logo';

const SITE_TITLE = graphql`
	query SITE_TITLE {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`

const Header = props => (
	<StaticQuery
		query={SITE_TITLE}
		render={data => {
			return (
				<header className="Site-header">
					<div className="Site-container">
						<div className="row">
							<div className="col-12 col-md-3">
								<Logo color="blue" />
							</div>
							<div className="col-12 col-md-6">
								<Menu />
							</div>
							<div className="col-12 col-md-3 d-flex justify-content-end align-items-center">
								<Socials color="blue" />
							</div>
						</div>
					</div>
				</header>
			);
		}}
	/>
);

export default Header;
