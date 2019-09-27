import React from 'react';


// components.
import Layout from '@components/Layout';
import Seo from '@components/Seo';
import Layouts from '@components/Layouts';
import { illustration, link, url } from '@components/Hero/utils';


const Hero = ({ data }) => {
	const waveOrange = require('../../img/svg/wave-orange.svg');
	const waveBlue = require('../../img/svg/wave-blue.svg');

	return (
		<div className="Hero">
			<div className="Hero__wave Hero__wave--orange">
				<div className="Site-container h-100">
					<div className="row h-100">
						<div className="col-10 h-100">
							<img className="" src={waveOrange} alt=""/>
						</div>
					</div>
				</div>
			</div>
			<div className="Hero__wave Hero__wave--blue">
				<div className="Site-container h-100">
					<div className="row h-100">
						<div className="col-9 h-100">
							<img className="" src={waveBlue} alt=""/>
						</div>
					</div>
				</div>
			</div>
			<div className="Site-container">
				<div className="row">
					<div className="col-7">
						<h1 className="Hero__title" dangerouslySetInnerHTML={{
							__html: data.title.replace( '&', '<span class="color-orange-bright">&</span>' )
						}} />
						<div className="Hero__description" dangerouslySetInnerHTML={{
							__html: data.description
						}} />
					</div>
					{null !== data.illustration ? illustration(data.illustration) : ''}
				</div>
				<footer className="row d-flex align-items-center">
					<div className="col-7 d-flex align-items-center">
						<hr className="Hero__horizontal-line" />
					</div>
					<div className="col-3 offset-1 d-flex justify-content-center">
						{null !== data.link && undefined !== data.link ? link(data.link) : ''}
					</div>
					<div className="col-1 d-flex align-items-center justify-content-center">
						{null !== data.link && undefined !== data.link ? url(data.link, 'white') : ''}
					</div>
				</footer>
			</div>
		</div>
	);
}


const FrontPage = props => {
	const { pageContext: { title, excerpt, fields } } = props;

	return (
		<Layout context="Front-page">
			<Hero data={fields.hero} />
			<Layouts data={fields.layouts} />
			<Seo title={title} description={excerpt} className="Front-page" />
    	</Layout>
  	);
};


export default FrontPage;
