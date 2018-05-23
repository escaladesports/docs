import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

class Layout extends React.Component{
	render(){
		return(
			<Fragment>

				<Helmet>
					<meta charSet="utf-8" />
					<title>{ this.props.data.site.siteMetadata.title }</title>
				</Helmet>

				{ this.props.children() }

				<style jsx global>{`
					@import 'src/css/global';
				`}</style>

			</Fragment>
		)
	}
}

export default Layout

export const query = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
