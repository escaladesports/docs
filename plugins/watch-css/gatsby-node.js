const chokidar = require('chokidar')
const { remove } = require('fs-extra')
const touch = require('touch')
const glob = require('globby')

exports.sourceNodes = () => {
	chokidar.watch(`src/**/*.css`).on(`change`, event => {
		remove(`node_modules/.cache`)
			.then(() => glob(`src/**/*.js`))
			.then(files => {
				return Promise.all(files.map(file => {
					return touch(file)
				}))
			})
			.catch(console.error)
	})
}
