import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';


// components
import Socials from '@components/Socials';
import MenuItem from '@components/MenuItem';
import Logo from '@components/Logo';


const FOOTER_MENU = graphql`
	query FOOTER_MENU {
		wpgraphql {
			menus( where: { location: FOOTER } ) {
				nodes {
					id,
					menuId,
					menuItems
					{
						nodes {
							id,
							label,
							url
						}
					}
				}
			}
		}
	}
`;

const Footer = () => (
	<footer className="Site-footer">
		<div className="Site-container">
			<div className="row d-flex align-items-end">
				<div className="col-12 col-md-3 d-flex justify-content-start">
					<Logo color="white"/>
				</div>
				<div className="col-12 col-md-9">
					<ul className="Menu-items">
						<StaticQuery
							query={FOOTER_MENU}
							render={data => {
								const { wpgraphql: { menus: { nodes } } } = data;

								return nodes.map(edge => {
									return edge.menuItems.nodes.map((item) => {
										return(<MenuItem key={item.id} item={item} />)
									});
								});
							}}
						/>
					</ul>
				</div>
			</div>
			<hr className="Site-footer__horizontal-line" />
			<div className="row">
				<div className="col-12 col-md-6 d-md-flex align-items-md-center">
					<div className="Site-footer__copyright">
						<Link className="margin-right-md-3" to="/mentions-legales">Mentions légales</Link><br className="d-md-none"/>
						Réalisé par <a href="http://inesa.fr" target="_blank" rel="noopener noreferrer">inesa</a> et <a href="http://19h47.fr" target="_blank" rel="noopener noreferrer">19h47</a>
					</div>
				</div>
				<div className="col-12 col-md-6 d-md-flex justify-content-md-end">
					<Socials color="white" />
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
