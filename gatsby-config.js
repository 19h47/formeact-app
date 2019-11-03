const path = require('path');
const autoprefixer = require('autoprefixer');
const wordPressUrl = require('./config').wordPressUrl;

module.exports = {
	siteMetadata: {
		title: 'Forméact',
		description: 'Forméact site',
		author: '@19h47',
		wordPressUrl,
	},
	plugins: [{
		resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'WPGraphQL',
				fieldName: 'wpgraphql',
				url: `${wordPressUrl}/graphql`
			},
		},
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-postcss',
			options: {
				postCssPlugins: [
					autoprefixer(),
				],
			},
		},
		{
			resolve: 'gatsby-plugin-alias-imports',
			options: {
				alias: {
					"@components": path.resolve(__dirname, 'src/components')
				}
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: 'src/img/png/favicon.png'
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
      		options: {
				trackingId: "UA-151399562-1",
      		}
		}
	]
};
