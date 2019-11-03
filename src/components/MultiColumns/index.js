import React from 'react';


const columns = (layout) => layout.map((column, index) => {
	return (
		<div className="col" key={index}>
			<h3 className="Multi-columns__title" dangerouslySetInnerHTML={{ __html: column.title }} />
			<div className="Multi-columns__column">
				<p dangerouslySetInnerHTML={{ __html: column.content }} />
			</div>
		</div>
	);
});


const titles = (layout) => layout.map((column, index) => {
	return (
		<div className="col d-none d-md-block" key={index}>
			<h3 className="Multi-columns__title" dangerouslySetInnerHTML={{ __html: column.title }} />
		</div>
	);
});


const MultiColumns = ({ data }) => (
	<section className={ `Multi-columns Section background-color-${data.background}` }>
		<div className="Site-container">
			<div className="row">
				<div className="col-12 col-md-6">
					<h2 className="Section__title">{data.title}</h2>
				</div>
			</div>
			{titles ? (<div className="row">{titles(data.columns)}</div>) : ''}
			{columns ? (<div className="row">{columns(data.columns)}</div>) : ''}
		</div>
	</section>
);

export default MultiColumns;
