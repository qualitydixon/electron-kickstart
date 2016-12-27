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
					<MatchWithSlide pattern="/about" component={About} />
					<Miss component={Home}/>
				</div>
			</BrowserRouter>
		);
	}
}

const MatchWithSlide = ({ component: NewComponent, ...rest }) => {
	const willLeave = () => ({ zIndex: 1, opacity: 0 });
	console.log(NewComponent);
	console.log(rest);
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
				{(interpolatedStyles) => {
					console.log({interpolatedStyles});
					return (<div>
						{interpolatedStyles.map(config => (
							<div
								key={config.key}
								style={{ ...styles.fill, ...config.style }}
							>
								<NewComponent />
							</div>
						))}
					</div>);
				}}
			</TransitionMotion>
		)}
		/>
	);
};

MatchWithSlide.propTypes = {
	location: PropTypes.object,
	component: PropTypes.any
};

const styles = {};

styles.fill = {
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
};


