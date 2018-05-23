import React from 'react'

class Nav extends React.Component {
	render() {
		return (
			<nav>
				Nav
				<style jsx>{`
					@import 'src/css';
					nav{
						background-color: #fafafa;
						border-right: var(--border);
						position: fixed;
						left: 0;
						top: 0;
						bottom: 0;
						width: var(--navWidth);
					}
				`}</style>
			</nav>
		)
	}
}

export default Nav