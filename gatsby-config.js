module.exports = {
	siteMetadata: {
		title: `Escalade Sports`,
	},
	plugins: [
		'gatsby-plugin-styled-jsx-postcss',
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-remove-trailing-slashes`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`oswald`,
					`open sans`,
				]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/docs`,
				name: `docs`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
				],
			},
		},
		`docs-pages`,
		`gatsby-plugin-manifest`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-netlify`,
		'watch-css',
	],
}
