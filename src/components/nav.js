import React from 'react'
import Link from 'gatsby-link'

function renderNav(arr){
	if(!arr.length) return null
	return (
		<ul>
			{arr.map(item => (
				<li key={item.slug}>
					<Link to={item.slug}>{item.title}</Link>
					{renderNav(item.contents)}
				</li>
			))}
		</ul>
	)
}

class Nav extends React.Component {
	render() {
		console.log(this.props.schema)
		return (
			<nav>
				{renderNav(this.props.schema)}
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