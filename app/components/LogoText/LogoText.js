import React, { Component, PropTypes } from 'react';

require('./LogoText.scss');

export default class Logo extends Component {
	static propTypes = {
		className: PropTypes.string
	}
	render() {
		return (
			<svg className={this.props.className} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258.71 40.61">
				<text className="text" transform="translate(0 30.85)" style={{fontSize: '36px', fontFamily: 'OpenSans'}}>
					Barbershop I/O
				</text>
			</svg>
		);
	}
}
