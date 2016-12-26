import React from 'react';
import { Logo, LogoText } from 'components';
import { About } from 'containers';
import { BrowserRouter, Match, Miss, Link } from 'react-router';

require('./Home.scss');

export default class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Logo className="logo" />
				<LogoText className="logo_text" />
				<Link to="/about" className="next">{'Next'}<i className="material-icons arrow_icon">arrow_forward</i></Link>
			</div>
		);
	}
}
