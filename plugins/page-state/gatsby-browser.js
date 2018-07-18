import pathState from '../../src/state/path'

exports.onRouteUpdate = ({ location }) => {
	const { pathname } = location
	pathState.setState({
		path: pathname,
	})
}