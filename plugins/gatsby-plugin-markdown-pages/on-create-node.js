const { resolve } = require('path')
const defaultOptions = require('./default-options')
const mdExt = /.(md|markdown)$/
const cwd = process.cwd()

module.exports = async ({ node, boundActionCreators }, userOptions) => {
	if (node.internal.type !== `MarkdownRemark`) return
	const options = {
		...defaultOptions,
		...userOptions,
	}
	const markdownPath = resolve(cwd, options.path)
	if (node.fileAbsolutePath.indexOf(markdownPath) !== 0) return
	const { createNodeField } = boundActionCreators
	const { template, permalink } = node.frontmatter
	const slug = permalink || node.fileAbsolutePath
		.replace(markdownPath, ``)
		.replace(mdExt, ``)
	createNodeField({
		node,
		name: `template`,
		value: template || ``,
	})
	createNodeField({
		node,
		name: `slug`,
		value: slug,
	})
}