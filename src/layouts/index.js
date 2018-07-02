import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav'

class Layout extends React.Component{
	render(){
		const { data, children } = this.props
		return(
			<Fragment>
				<Helmet>
					<meta charSet="utf-8" />
					<title>{data.site.siteMetadata.title }</title>
				</Helmet>
				<main>
					<Nav schema={JSON.parse(data.docsSchema.json)} />
					<article>
						<div className='content'>
							{children()}
						</div>
					</article>
				</main>
				<style jsx global>{`
					@import 'src/css/global';
				`}</style>
				<style jsx>{`
					@import 'src/css';
					.content{
						max-width: 800px;
						padding: 20px;
						margin: auto;
					}
					article{
						width: 100%;
						padding-left: var(--navWidth);
					}
					@media(min-width:1000px){
						.prevNext{
							&:after{
								content: '';
								display: block;
								clear: both;
							}
						}
						.prev{
							float: left;
						}
						.next{
							float: right;
						}
					}
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
		docsSchema(id: { eq: "docsSchema" }){
			json
		}
	}
`
