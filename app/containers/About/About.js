import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { Link } from 'react-router';

require('./About.scss');

export default class About extends Component {
	static propTypes = {
		className: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.state = {
			isAnimating: false
		};
	}
	componentDidMount() {
		setTimeout(() => this.animate(), 6000);
	}
	animate() {
		this.setState({
			isAnimating: true
		});
	}
	render() {
		return (
			<div className="about">
				{'About us'}
				<Link to="/">{'Go Back'}</Link>
			</div>
		);
	}
}
