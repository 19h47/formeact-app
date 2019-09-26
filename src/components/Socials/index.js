import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const SOCIALS = graphql`
	query SOCIALS {
		wpgraphql {
			generalSettings {
				twitter
				linkedin
				emailPublic
			}
		}
    }
`;

const Socials = ({ color }) => (
	<StaticQuery
		query={SOCIALS}
		render={data => {
			const { wpgraphql: { generalSettings } } =data;

            const twitterUrl = generalSettings.twitter;
            const linkedinUrl = generalSettings.linkedin;
			const emailPublic = generalSettings.emailPublic;

			const twitter = require(`../../img/svg/twitter-${ color }.svg`);
			const linkedin = require(`../../img/svg/linkedin-${ color }.svg`);
			const envelope = require(`../../img/svg/envelope-${ color }.svg`);

			return (
				<ul className="Socials">
					<li className="Socials__item">
						<a href={`mailto:${emailPublic}`}>
							<img src={envelope} alt=""/>
						</a>
					</li>

					<li className="Socials__item">
						<a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
							<img src={linkedin} alt=""/>
						</a>
					</li>

					<li className="Socials__item">
						<a href={twitterUrl} target="_blank" rel="noopener noreferrer">
							<img src={twitter} alt=""/>
						</a>
					</li>
				</ul>
			)
		}}
	/>
);

export default Socials;
