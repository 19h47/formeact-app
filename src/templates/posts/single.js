import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../../components/Layout";

export const pageQuery = graphql `
	query GET_POST($id: ID!) {
		wpgraphql {
			post(id: $id) {
				title
				id
				postId
				content
				uri
				featuredImage {
					sourceUrl
					title
				}
			}
		}
	}
`


const Hero = ({ data }) => {
	const { title } = data;

	return (
		<div className="Hero">
			<div className="Site-container">
				<div className="row">
					<div className="col-12">
						<h1 className="Hero__title margin-bottom-0" dangerouslySetInnerHTML={{
							__html: title
						}} />
					</div>
				</div>
			</div>
		</div>
	);
}


const SinglePost = props => {
	const { data: { wpgraphql: { post } } } = props;
	const { postId, content } = post;

	return (
		<Layout>
			<Hero data={post} />
			<article
				id={`post-${postId}`}
				className="Section"
			>
				<div className="Site-container">
					<div className="row">
						<div className="col-12">
							<div className="entry-content" dangerouslySetInnerHTML={{ __html: content }}/>
						</div>
					</div>
				</div>
			</article>
		</Layout>
	)
}

export default SinglePost;
