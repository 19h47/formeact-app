import React from 'react';
import { Link } from 'gatsby';
import createLocalLink from '../../utils';
import moment from 'moment/moment';

const chevron = require(`../../img/svg/chevron-right-white.svg`);

const TeasePost = ({ post }) => {
	const { link, date, title, excerpt } = post;

	console.log(post);

	return(
		<>
			<Link className="List__item__column" to={createLocalLink(link)}>
				<img src={chevron} alt=""/>
				<p className="List__item__link">{moment(date).locale('fr').format('D MMMM YYYY')}</p>
			</Link>
			<div className="List__item__column">
				<div className="List__item__content">
					<Link
						className="List__item__content d-block font-weight-bold"
						style={{
							marginBottom: '14.5px',
							marginTop: '14.5px'
						}}
						to={createLocalLink(link)}
						dangerouslySetInnerHTML={{ __html: title }}
					/>
					<div
						className="List__item__content"
						style={{
							marginBottom: '14.5px',
							marginTop: '14.5px'
						}}
						dangerouslySetInnerHTML={{ __html: excerpt }}
					/>
				</div>
			</div>
		</>
	);
};

export default TeasePost;
