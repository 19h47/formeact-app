import React from 'react';


const lists = (layout, color) => layout.map((list, index) => {
	const title = list.title ? <div className="List__item__title">{list.title}</div> : '';
	let chevron = require(`../../img/svg/chevron-right-blue-very-dark-01.svg`)

	if ('blue-very-soft' === color) {
		chevron = require(`../../img/svg/chevron-right-white.svg`);
	}

	return (
		<li className="List__item" key={index}>
			<div className="List__item__column">
				<img src={chevron} alt=""/>
				<p className="List__item__link">{list.link.title}</p>
			</div>
			<div className="List__item__column">
				{title}
				<div
					className="List__item__content"
					style={{
						marginBottom: title ? '14.5px' : 0,
						marginTop: title ? 0 : '14.5px'
					}}
				>{list.content}</div>
			</div>
		</li>
	);
});


const image = illustration => require(`../../img/svg/${illustration}.svg`);


const List = ({ data }) => (
	<div className={ `List Section background-color-${data.background}` }>
		<div className="Site-container">
			<div className="row">
				<div className="col-12 col-md-6">
					<h2 className="Section__title">{data.title}</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-7">
					<ul className="Section__items List__items">
						{lists(data.lists, data.background)}
					</ul>
				</div>
				<div className="col-3 offset-md-1 d-flex">
					<img
						className="Section__illustration"
						src={image(data.illustration)}
						alt={data.title}
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
);

export default List;
