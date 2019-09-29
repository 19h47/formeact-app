const PostTemplateFragment = `
	fragment PostTemplateFragment on WPGraphQL_Post {
		id
		postId
		title
		content
		categories {
			nodes {
				name
				slug
			}
		}
		tags {
			nodes {
				slug
				name
			}
		}
	}
`

const TeasePostFragment = `
	fragment TeasePostFragment on WPGraphQL_Post {
		id
		postId
		title
		uri
		date
		slug
		excerpt
	}
`

module.exports.PostTemplateFragment = PostTemplateFragment;
module.exports.TeasePostFragment = TeasePostFragment;
