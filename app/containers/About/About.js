import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { Link } from 'react-router';
import { Loader } from 'components';

require('./About.scss');

export default class About extends Component {
	static propTypes = {
		className: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.state = {
			isAnimating: true,
			isLoading: true,
			friendData: [{
				name: 'Corban Baxter'
			}]
		};
	}
	componentDidMount() {
		// setTimeout(() => this.animate(), 6000);
		const myInit =
			{
				method: 'GET',
				mode: 'cors',
				cache: 'default'
			};
		fetch('https://api.github.com/users/qualitydixon', myInit)
			.then((response) => {
				response.json().then((res) => {
					console.log(res);
					this.setState({
						friendData: this.state.friendData.concat(res),
						isLoading: false
					});
				});
			});
	}
	animate() {
		this.setState({
			isAnimating: true
		});
	}
	render() {
		const { isLoading, friendData} = this.state;
		return (
			<div className="about">
				<div className="about_content">
					{isLoading
						? <Loader className="about_loader" />
						: friendData.map((friend, idx) =>
							<div key={idx} className="employee">
								{friend.name}
							</div>
					)}
				</div>
				<Link to="/">{'Go Back'}</Link>
			</div>
		);
	}
}

const about = [
	{
		name: 'Mike Dixon',
		github: 'qualitydixon',
		number: 8
	}
];
