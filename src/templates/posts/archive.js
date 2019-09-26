import React from 'react';


import Layout from '@components/Layout';


const BlogArchive = props => {
	const { pageContext: { title } } = props;

  	return (
    	<Layout>
			{title}
    	</Layout>
  	)
}

export default BlogArchive;
