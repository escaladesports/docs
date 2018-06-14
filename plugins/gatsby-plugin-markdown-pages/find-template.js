const { resolve, join } = require('path')
const cwd = process.cwd()

async function findTemplate(override, { template, templatePath }) {
	if (override) {
		let path = `${override}.js`
		path = join(templatePath, path)
		path = resolve(cwd, path)
		return path
	}
	return resolve(templatePath, `${template}.js`)
}

module.exports = findTemplate