import React from 'react';


const Tweet = ({ post }) => (
	<article className="Tweet">
		<div className="Tweet__featured-image">
			<a className="d-block w-100 h-100" href={post.tweetUrl} target="_blank" rel="noopener noreferrer">
				<img src={post.featuredImage.sourceUrl} alt={post.title} loading="auto" width="295px" height="435px" />
			</a>
		</div>
		<div className="Tweet__title" dangerouslySetInnerHTML={{ __html: post.title }}></div>
  	</article>
);


export default Tweet;
