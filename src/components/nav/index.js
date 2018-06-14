import React from 'react'
import NavList from './list'
import logo from '../../img/logo.svg'

class Nav extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			open: false
		}
	}
	render() {
		return (
			<nav>
				<div className='logo'>
					<img src={logo} />
				</div>
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
					.logo{
						padding: 0 20px 20px 20px;
					}
				`}</style>
			</nav>
		)
	}
}

export default Nav