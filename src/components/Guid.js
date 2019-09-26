import React, { Component } from 'react';

const gridColumns = 12;
const columns = [];

const column = (index) => (
	<div className="col-1" style={{ textAlign: 'center', height: '100%' }} key= {index}>
		<div style={{ height: '100%', backgroundColor: index % 2 === 0 ? 'red' : 'blue' }}>
			{index}
		</div>
	</div>
);

const guidStyle = {
	zIndex: 1000,
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	pointerEvents: 'none',
	backgroundSize: '100% 29px',
	backgroundRepeat: 'repeat',
	backgroundPosition: 'top left',
	backgroundImage: 'linear-gradient( rgba( 160, 160, 160, 0.3 ) 0px, transparent 1px, transparent 100% )',
};

for (let i = 0; i < gridColumns; i++) {
	columns.push(column(i));
}

class Guid extends Component {
	state = { show: false };

	componentDidMount() {
		window.addEventListener('keydown', (event) => {
			this.handleClick(event);
		});
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleClick);
	}

	handleClick(e) {
		if ((e.metaKey || e.ctrlKey) && 186 === e.keyCode) {
			this.setState({ show: !this.state.show });
		}
	}

	render() {
		return(
			<div className={ this.state.show ? '' : ' d-none' } style={ guidStyle }>
				<div className="Site-container h-100">
					<div className="row" style={{ height: '100%', opacity: 0.1 }}>
						{columns}
					</div>
				</div>
			</div>
		);
	}
}


export default Guid;
