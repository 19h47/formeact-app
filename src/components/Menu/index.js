import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import MenuItem from '../MenuItem';


const MAIN_MENU = graphql`
	query MAIN_MENU {
		wpgraphql {
			menus( where: { location: PRIMARY } ) {
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


const Menu = ({ location }) => (
	<ul className="Menu-items">
		<StaticQuery
			query={MAIN_MENU}
			render={data => {
				return data.wpgraphql.menus.nodes.map(edge => {
					return edge.menuItems.nodes.map((item) => {
						return(<MenuItem key={item.id} item={item} />)
					});
				});
			}}
	  	/>
	</ul>
);


export default Menu;
