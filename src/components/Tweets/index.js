import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Tweet from '../Tweet';

const TWEETS = graphql`
	query TWEETS {
		wpgraphql {
			tweets {
				nodes {
					id
					title
					tweetUrl
					featuredImage {
						sourceUrl
						title
					}
				}
			}
			generalSettings {
				twitter
			}
		}
    }
`;


const flickityOptions = {
	cellAlign: 'left',
	contain: true,
	prevNextButtons: false,
	pageDots: false,
};


class Tweets extends Component {
	state = { Flickity: null };

	constructor(props) {
		super(props);

		if ('undefined' !== typeof window) {
			const Flickity = require('react-flickity-component');

			this.state.Flickity = Flickity;
		}
	}

	render() {
		const { Flickity } = this.state;

		return (
			<StaticQuery
				query={TWEETS}
				render={data => {
					const tweets = data.wpgraphql.tweets.nodes.map((tweet, index) =>
						<li className="Tweets__item col-md-3" key={index}>
							<Tweet post={tweet} />
						</li>
					);

					return (
						<>
							<svg width="100" height="100" viewBox="0 0 100 100" className="d-none">
								<filter id="gradient-map" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
								<feColorMatrix type="matrix" values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0" in="SourceGraphic" result="colormatrix" />
									<feComponentTransfer in="colormatrix" result="componentTransfer">
										<feFuncR type="table" tableValues="0.07 1" />
										<feFuncG type="table" tableValues="0.05 1" />
										<feFuncB type="table" tableValues="0.4 1" />
										<feFuncA type="table" tableValues="0 1" />
									</feComponentTransfer>
									<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend" />
								</filter>
							</svg>
							<section className="Tweets Section">
								<div className="Site-container">
									<div className="row margin-bottom-3 d-flex align-items-end">
										<div className="col-6">
											<h2 className="Section__title color-white margin-bottom-0">
												Découvrir
											</h2>
										</div>
										<div className="col-6 d-flex justify-content-end">
											<a className="Tweets__link color-white" href={data.wpgraphql.generalSettings.twitter} target="_blank" rel="noopener noreferrer">Me suivre sur Twitter</a>
										</div>
									</div>
									{Flickity && (
										<Flickity className={'Tweets__items row'} elementType={'ul'} options={flickityOptions} static={true}>
											{tweets}
										</Flickity>
									)}
									<div className="row">
										<div className="col-12">
											<hr className="Tweets__horizontal-line" />
										</div>
									</div>
								</div>
							</section>
						</>
					)
				}}
			/>
		)
	}
};

export default Tweets;
