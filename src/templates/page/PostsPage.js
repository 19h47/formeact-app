import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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

	return (
		<Layout>
			<Seo title={title} description={excerpt} />
			<Hero data={fields.hero} />
			<div className="List Section background-color-blue-very-soft">
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
					</div>
				</div>
			</div>
			<Layouts data={fields.layouts} />
    	</Layout>
  	);
};


export default PostsPage;
