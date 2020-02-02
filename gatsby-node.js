const createPosts = require('./gatsby/createPosts')
const createPages = require('./gatsby/createPages')

console.log({ createPosts, createPages });

exports.createPages = async ({ actions, graphql }) => {
	await createPosts({ actions, graphql })
	await createPages({ actions, graphql })
}
