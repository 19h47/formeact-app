import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { link, url } from '@components/utils';

import TeasePost from '@components/TeasePost';

const RECENT_POSTS = graphql`
	query RECENT_POSTS {
		wpgraphql {
			posts(first: 3) {
				nodes {
					id
					title
					link
					date
				}
			}
		}
    }
`;


const Posts = ({ data }) => {
	const { content, title, background, illustration } = data;
	const image = require(`../../img/svg/${illustration}.svg`);

	return (
		<div className={ `Posts Section background-color-${background}` }>
			<div className="Site-container">
				<div className="row">
					<div className="col-12 col-md-7">
						<h2 className="Section__title">{title}</h2>
						<div className="margin-bottom-5">{content}</div>

						<StaticQuery
							query={RECENT_POSTS}
							render={data => {
								const posts = data.wpgraphql.posts.nodes.map((post, index) =>
									<li className="List__item" key={index}>
										<TeasePost post={post}/>
									</li>
								);

								return (<ul className="Section__items List__items margin-bottom-3">{posts}</ul>);
							}}
						/>
					</div>


					<div className="col-4 offset-1 margin-top-auto">
						<div className="row">
							<div className="col-9">
								<img className="Section__illustration" src={image} alt={illustration} loading="lazy" />
							</div>
						</div>

						<footer className="row d-flex align-items-center">
							<div className="col-9 d-flex justify-content-center">
							{null !== data.link && undefined !== data.link ? link(data.link) : ''}
							</div>
							<div className="col-3 d-flex align-items-center justify-content-center">
							{null !== data.link && undefined !== data.link ? url(data.link, 'white') : ''}
							</div>
						</footer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Posts;
