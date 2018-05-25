const chokidar = require('chokidar')
const { remove } = require('fs-extra')
const touch = require('touch')
const glob = require('globby')

exports.modifyWebpackConfig = ({ config, stage }, options) => {
	if (stage === `develop`) {
		options = {
			watch: 'src/**/*.css',
			remove: `node_modules/.cache`,
			touch: `src/**/*.js`,
			...options,
		}
		const watcher = chokidar.watch(options.watch)
		watcher.on(`change`, event => {
			remove(options.remove)
				.then(() => glob(options.touch))
				.then(files => {
					return Promise.all(files.map(file => {
						return touch(file)
					}))
				})
				.catch(console.error)
		})
		process.on(`exit`, () => watcher.close())
	}

	return config
}
