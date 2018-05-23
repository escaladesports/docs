const { createFilePath } = require('gatsby-source-filesystem')
const { resolve } = require('path')
const cwd = process.cwd()

exports.createPages = async ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators
	const component = resolve(`./src/templates/docs.js`)
	let res
	try{
		res = await graphql(`{
			allMarkdownRemark(filter: {
				fileAbsolutePath: { regex: "/docs/" }
			}){
				edges{
					node{
						id
						html
						fileAbsolutePath
						fields{
							slug
							order
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

	let pages = res.data.allMarkdownRemark.edges
	let categories = createCategories(pages)
	console.log(JSON.stringify(categories, null, 3))

	pages.forEach((obj, key) => {
		obj = obj.node
		let previous = key === pages.length - 1 ? null : pages[key + 1].node
		let next = key === 0 ? null : pages[key - 1].node
		let { slug, order } = obj.fields
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
	process.exit(0)
}

function createCategories(pages) {
	const categories = []
	const paths = []
	const slugs = []
	pages.forEach(page => {
		let slug = page.node.fields.slug.split(`/`)
		slug.shift()
		slug.pop()
		slug.push(page.node.fields.order)
		slugs.push(slug)
	})
	slugs.sort((a, b) => {
		if(a.length > b.length) return 1
		if(a.length < b.length) return -1
		let orderA = a[a.length - 1]
		let orderB = b[b.length - 1]
		if(orderA > orderB) return 1
		if(orderA < orderB) return -1
		return 0
	})
	slugs.shift()
	slugs.forEach(slug => {
		let cursor = categories
		slug.pop()
		let path = slug.pop()
		slug.forEach(dir => {
			cursor = findPath(cursor, dir)
		})
		cursor.push({
			path,
			contents: []
		})
	})
	return categories
}

function findPath(arr, path){
	for(let i = 0; i < arr.length; i++){
		if(arr[i].path === path){
			return arr[i].contents
		}
	}
}


exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
	const { createNodeField } = boundActionCreators

	if (
		node.internal.type === `MarkdownRemark` &&
		node.fileAbsolutePath.replace(cwd, ``).indexOf(`/docs/`) === 0
	) {
		let value = createFilePath({ node, getNode })
		let obj = removeFirstNumbers(value)
		value = obj.str
		let content = node.internal.content.split(`\n`)
		let title = `Untitled Document`
		for(let i = 0; i < content.length; i++){
			if(content[i].indexOf(`#`) === 0){
				title = content[i].split(` `)
				title.shift()
				title = title.join(` `)
				break
			}
		}
		createNodeField({
			name: `slug`,
			node,
			value,
		})
		createNodeField({
			name: `type`,
			node,
			value: `doc`,
		})
		createNodeField({
			name: `title`,
			node,
			value: title,
		})
		createNodeField({
			name: `order`,
			node,
			value: obj.lastNum - 1,
		})
	}
}

function removeFirstNumbers(str){
	str = str.split(`/`)
	let lastNum = 0
	str = str.map(dir => {
		if (dir.indexOf(`-`) > 0){
			dir = dir.split(`-`)
			if(!isNaN(dir[0])){
				lastNum = Number(dir[0])
				dir.shift()
			}
			dir = dir.join(`-`)
		}
		return dir
	})
	str = str.join(`/`)
	return {
		lastNum,
		str,
	}
}