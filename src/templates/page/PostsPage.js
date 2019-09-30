import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import createLocalLink from '../../utils';

// components.
import Layout from '@components/Layout';
import Seo from '@components/Seo';
import Hero from '@components/Hero';
import Layouts from '@components/Layouts';
import TeasePost from '@components/TeasePost';

const POSTS = graphql`
	query POSTS {
		wpgraphql {
			posts(first: 100) {
				nodes {
					id
					title
					link
					date
					excerpt
				}
			}
		}
    }
`;

const PostsPage = props => {
	const { pageContext: { title, excerpt, fields } } = props;
	const chevronRight = require('../../img/svg/chevron-right-white.svg');

	return (
		<Layout>
			<Seo title={title} description={excerpt} />
			<Hero data={fields.hero} />
			<div className="List Section background-color-blue-very-soft color-white">
				<div className="Site-container">
					<div className="row">
						<div className="col-7">
							<StaticQuery
								query={POSTS}
								render={data => {
									const posts = data.wpgraphql.posts.nodes.map((post, index) =>
										<li className="List__item" key={index}>
											<TeasePost post={post} />
										</li>
									);

									return (<ul className="Section__items List__items margin-bottom-3">{posts}</ul>);
								}}
							/>
						</div>
						<div className="col-3 offset-1 d-flex align-items-end justify-content-center">
							<Link className="Section__link margin-bottom-2" to={createLocalLink('/contact/')}>Me contacter</Link>
						</div>
						<div className="col-1 d-flex align-items-end justify-content-center">
							<Link className="Section__url Section__url--right" to={createLocalLink('/contact/')}>
								<img src={chevronRight} width="9px" height="14px" alt="" loading="lazy" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Layouts data={fields.layouts} />
    	</Layout>
  	);
};


export default PostsPage;
