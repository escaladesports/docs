import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Link from 'gatsby-link'
import Nav from '../components/nav'

class DocsTemplate extends React.Component{
	render(){
		const data = this.props.data
		const content = data.markdownRemark
		const { schema, next, previous } = this.props.pathContext
		return(
			<Fragment>
				<Helmet>
					<title>{content.fields.title} · {data.site.siteMetadata.title}</title>
					<meta name='description' content={content.excerpt} />
				</Helmet>
				<main>
					<Nav schema={schema} />
					<article>
						<div className='content'>
							<div dangerouslySetInnerHTML={{ __html: content.html }} />
							<div className='prevNext'>
								{previous &&
									<div className='prev'>
										<Link to={previous.slug}>Previous: {previous.title}</Link>
									</div>
								}
								{next &&
									<div className='next'>
										<Link to={next.slug}>Next: {next.title}</Link>
									</div>
								}
							</div>
						</div>
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
					.prev, .next{
						margin-top: 10px;
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

export default DocsTemplate

export const query = graphql`
	query DocsTemplateQuery($slug: String!) {

		markdownRemark(fields: {
			slug: { eq: $slug }
		}){
			html
			excerpt(pruneLength: 175)
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
