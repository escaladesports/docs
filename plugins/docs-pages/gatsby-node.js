const { createFilePath } = require('gatsby-source-filesystem')
const { resolve } = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators
	const component = resolve(`./src/templates/docs.js`)
	let res
	try{
		res = await graphql(`{
			allMarkdownRemark(filter: {
				fileAbsolutePath: { regex: "/src\/docs/" }
			}){
				edges{
					node{
						id
						fields{
							slug
						}
					}
				}
			}
		}`)
	}
	catch(err){
		console.error(err)
		process.exit(1)
	}
	if(res.errors){
		console.error(res.errors)
		process.exit(1)
	}

	const pages = res.data.allMarkdownRemark.edges
	pages.forEach((obj, key) => {
		obj = obj.node
		let previous = key === pages.length - 1 ? null : pages[key + 1].node
		let next = key === 0 ? null : pages[key - 1].node
		let { slug } = obj.fields
		createPage({
			path: slug,
			component,
			context: {
				slug,
				previous,
				next,
			},
		})
	})
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
	const { createNodeField } = boundActionCreators

	if (
		node.internal.type === `MarkdownRemark` &&
		node.fileAbsolutePath.replace(process.cwd(), '').indexOf(`/src/docs/`) === 0
	) {
		let value = createFilePath({ node, getNode })
		value = removeFirstNumbers(value)
		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}

function removeFirstNumbers(str){
	str = str.split(`/`)
	str = str.map(dir => {
		if (dir.indexOf(`-`) > 0){
			dir = dir.split(`-`)
			if(!isNaN(dir[0])){
				dir.shift()
			}
			dir = dir.join(`-`)
		}
		return dir
	})
	str = str.join(`/`)
	return str
}