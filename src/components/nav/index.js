import React from 'react'
import Link from 'gatsby-link'
import NavList from './list'

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<NavList>{ this.props.schema }</NavList>
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
						padding: 30px 20px;
					}
				`}</style>
			</nav>
		)
	}
}

export default Nav