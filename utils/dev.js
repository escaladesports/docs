'use strict'
const chokidar = require('chokidar')
const { spawn, exec } = require('child_process')

const spawnOptions = {
	shell: true,
	stdio: `inherit`,
	detached: true,
}
let inst = spawn(`gatsby develop`, [`--open`], spawnOptions)


function stopGatsby(){
	process.kill(-inst.pid)
}
function restartGatsby(){
	stopGatsby()
	inst = spawn(`gatsby develop`, [], spawnOptions)
}


chokidar.watch('./src/**/*.css').on('change', event => {
	exec('rm -rf ./node_modules/.cache', (err, stdout, stderr) => {
		if(err){
			console.error(err)
			stopGatsby()
			process.exit(1)
		}
		else if(stderr){
			console.error(stderr)
			stopGatsby()
			process.exit(1)
		}
		else{
			restartGatsby()
		}
	})
})