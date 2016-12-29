import React, { Component } from 'react';
import cx from 'classnames';

require('./Loader.scss');

export default class Loader extends Component {

	render() {
		return (
			<div className="loader_wrapper">
				<div className="loader loader1" />
				<div className="loader loader2" />
				<div className="loader loader4" />
				<div className="loader loader3" />
			</div>
		);
	}
}
