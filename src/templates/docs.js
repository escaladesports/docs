import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav'

class DocsTemplate extends React.Component{
	render(){
		const data = this.props.data
		const content = data.markdownRemark
		const { schema } = this.props.pathContext
		return(
			<Fragment>
				<Helmet>
					<title>{content.fields.title} · {data.site.siteMetadata.title}</title>
				</Helmet>
				<main>
					<Nav schema={schema} />
					<article>
						<div
							className='content'
							dangerouslySetInnerHTML={{
								__html: content.html
							}} />
					</article>
				</main>
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
				`}</style>
			</Fragment>
		)
	}
}

export default DocsTemplate

export const query = graphql`
	query DocsTemplateQuery($slug: String!) {

		markdownRemark(fields: {
			slug: { eq: $slug }
		}){
			html
			fields{
				title
			}
		}

		allMarkdownRemark(filter: {
			fields: { type: { eq: "doc" } }
		}){
			edges{
				node{
					fields{
						slug
					}
				}
			}
		}

		site {
			siteMetadata {
				title
			}
		}

	}
`
