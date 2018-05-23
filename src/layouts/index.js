import React, { Fragment } from 'react'

class Layout extends React.Component{
	render(){
		return(
			<Fragment>
				{this.props.children()}
				<style jsx global>{`
					@import 'src/css/global';
				`}</style>
			</Fragment>
		)
	}
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
