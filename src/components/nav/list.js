import React, { Fragment } from 'react'
import Link from 'gatsby-link'

class NavList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			path: `null`,
		}
	}
	componentDidMount(){
		console.log(document.location.pathname)
		this.setState({
			path: document.location.pathname
		})
	}
	render() {
		return (
			<Fragment>
				<ul>
					{this.props.children.map(item => {
						let activeClass = ``
						if(item.slug === `/`){
							if(this.state.path === `/`){
								activeClass = `active`
							}
						}
						else if (this.state.path.indexOf(item.slug) === 0) {
							activeClass = `active`
						}
						return (
							<li key={item.slug} className={activeClass}>
								<Link to={item.slug}>{item.title}</Link>
								<NavList>{item.contents}</NavList>
							</li>
						)
					})}
				</ul>
				<style jsx>{`
					@import 'src/css';
					ul{
						list-style-type: none;
						padding: 0;
						margin: 0;
						padding-left: 15px;
						font-size: .9em;
						:global(ul){
							border-left: 2px solid #e6e6e6;
							margin: 5px 0;
						}
						:global(a){
							display: block;
							width: 100%;
							height: 100%;
							text-decoration: none;
							padding: 2px 0;
							color: #333;
						}
					}
					.active{
						:global(> a){
							color: var(--colorPrimary);
						}
					}
				`}</style>
			</Fragment>
		)
	}
}

export default NavList