import React from 'react'
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
			<ul>
				{this.props.children.map(item => (
					<li key={item.slug} className={this.state.path.indexOf(item.slug) === 0 ? `active`: ``}>
						<Link to={item.slug}>{item.title}</Link>
						<NavList>{ item.contents }</NavList>
					</li>
				))}
				<style jsx>{`
					@import 'src/css';
					ul{
						list-style-type: none;
						padding: 0;
						margin: 0;
						padding-left: 15px;
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
			</ul>
		)
	}
}

export default NavList