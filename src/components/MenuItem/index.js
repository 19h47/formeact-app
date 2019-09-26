import React from 'react';
import { Link } from 'gatsby';
import { createLocalLink } from '../../utils';


const MenuItem = ({ item }) => {
    const { id, label, url } = item;

    return (
        <li className="Menu-item" key={id}>
            <Link className="Menu-item__link" activeClassName="is-active" to={createLocalLink(url)}>
				{label}
			</Link>
        </li>
    );
};


export default MenuItem;
