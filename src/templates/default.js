import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Link from 'gatsby-link'
import pencil from '../img/pencil.svg'

class DocsTemplate extends React.Component{
	render(){
		const data = this.props.data
		const content = data.markdownRemark
		const fm = content.frontmatter
		const { next, previous } = this.props.pathContext
		const title = fm.title ? fm.title : content.fields.title
		console.log(this.props)
		return(
			<Fragment>
				<Helmet>
					<title>{title} · {data.site.siteMetadata.title}</title>
					<meta name='description' content={content.excerpt} />
				</Helmet>
				<section>
					<div dangerouslySetInnerHTML={{ __html: content.html }} />
					<div className='edit'>
						<a
							href={`https://github.com/escaladesports/docs.escaladesports.com/blob/master/docs/${this.props.pathContext.fileName}`}
							target='_blank'
						>
							<img src={pencil} className='pencil' /> Edit on GitHub
						</a>
					</div>
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
				</section>
				<style jsx>{`
					@import 'src/css';
					.prev, .next{
						margin-top: 40px;
					}
					.edit{
						opacity: .6;
						font-size: .9em;
						margin-top: 40px;
						text-align: right;
						a{
							color: var(--colorSecondary);
							text-decoration: none;
						}
						:hover{
							opacity: 1;
						}
					}
					.pencil{
						position: relative;
						top: 2px;
						margin-right: 2px;
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
			frontmatter{
				title
			}
			fields{
				title
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`
