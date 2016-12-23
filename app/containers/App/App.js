import React from 'react';
import { Logo, LogoText } from 'components';

require('./App.scss');

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Logo className="logo" />
				<LogoText className="logo_text" />
			</div>
		);
	}
}
