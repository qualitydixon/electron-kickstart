import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

require('./Logo.scss');

export default class Logo extends Component {
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
		setTimeout(() => this.animate(), 2000);
	}
	animate() {
		this.setState({
			isAnimating: true
		});
	}
	render() {
		return (
			<svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157.89 282.11">
				<title>Barbershop Logo</title>
				<g>
					<polygon className={cx('poly', {animate_logo: this.state.isAnimating})} points="109.78 37.88 109.78 0 157.89 24.06 109.78 37.88"/>
					<polygon className={cx('poly', {animate_logo: this.state.isAnimating})} points="157.86 64.94 0 109.77 0 68.89 157.86 24.06 157.86 64.94"/>
					<polygon className={cx('poly', 'poly2', {animate_logo: this.state.isAnimating})} points="157.89 138.75 0 183.58 0 142.7 157.89 97.87 157.89 138.75"/>
					<polygon className={cx('poly', 'poly3', {animate_logo: this.state.isAnimating})} points="157.89 212.75 0 257.58 0 216.7 157.89 171.87 157.89 212.75"/>
					<polygon className={cx('poly', {animate_logo: this.state.isAnimating})} points="48.09 282.11 0 257.58 48.09 243.92 48.09 282.11"/>
				</g>
			</svg>
		);
	}
}
