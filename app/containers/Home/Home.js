import React from 'react';
import { Logo, LogoText } from 'components';
import { Link } from 'react-router';

require('./Home.scss');

export default class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Logo className="logo" />
				<LogoText className="logo_text" />
				<Link to="/about" className="next">{'Next'}<span className="pt-icon-standard pt-icon-arrow-right arrow_icon" /></Link>
			</div>
		);
	}
}
