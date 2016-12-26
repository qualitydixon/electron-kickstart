import React, { Component, PropTypes } from 'react';
import { Home, About } from 'containers';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import { TransitionMotion, spring } from 'react-motion';

require('./App.scss');

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<MatchWithSlide exactly pattern="/" component={Home} />
					<MatchWithSlide pattern="/about" component={About} />
					<Miss component={Home}/>
				</div>
			</BrowserRouter>
		);
	}
}

const MatchWithSlide = () => {
	const willLeave = () => ({ zIndex: 1, opacity: 0 });
	return (
		<Match {...rest} children={({ matched, ...props }) => (
			<TransitionMotion
				willLeave={willLeave}
				styles={matched ? [{
					key: props.location.pathname,
					style: { opacity: 1 },
					data: props
				}] : []}
			>
				<Component/>
			</TransitionMotion>
		)}
		/>
	);
};

MatchWithSlide.propTypes = {
	location: PropTypes.object
};

