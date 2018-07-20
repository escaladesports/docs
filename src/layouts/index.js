import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav'
import { Subscribe } from 'statable'
import navState from '../state/nav'
import { Boring } from 'react-burgers'

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
					<Subscribe to={navState}>
						{({ open }) => (
							<Fragment>
								<div className={`icon ${open ? `active` : ``}`}>
									<Boring
										width={30}
										lineHeight={3}
										lineSpacing={5}
										active={open}
										onClick={() => navState.setState({ open: !open })}
										/>
								</div>
								<article className={open ? `open` : ``}>
									<div className='content'>
										{children()}
									</div>
								</article>
							</Fragment>
						)}
					</Subscribe>
				</main>
				<style jsx global>{`
					@import 'src/css/global';
				`}</style>
				<style jsx>{`
					@import 'src/css';
					main{
						position: relative;
					}
					.content{
						max-width: 800px;
						padding: 20px;
						padding-bottom: 85px;
						margin: auto;
					}
					article{
						width: 100%;
					}
					.icon{
						--spacing: 5px;
						position: fixed;
						top: var(--spacing);
						left: var(--spacing);
					}
					.active{
						transform: translateX(var(--navWidth));
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
						.open{
							padding-left: var(--navWidth);
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
