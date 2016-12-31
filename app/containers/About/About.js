import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { Link } from 'react-router';
import { Loader } from 'components';
import Immutable from 'immutable';
import { Spinner, DatePickerFactory } from '@blueprintjs/core';

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
			friendData: Immutable.Map({
				qualitydixon: {
					name: 'Mike Dixon',
					github: 'qualitydixon',
					number: 8
				},
				corbanb: {
					name: 'Corban Baxter',
					github: 'corbanb',
					number: 2
				},
				RobinNCain: {
					name: 'Robin Cain',
					github: 'RobinNCain',
					location: 'Denver, CO',
					number: 3
				},
				Zoezter: {
					name: 'Zoe Doubleday',
					github: 'Zoezter',
					location: 'Denver, CO',
					number: 7
				},
				ipbrennan90: {
					name: 'Ian Brennan',
					github: 'ipbrennan90',
					number: 6
				},
				jtini: {
					name: 'Jeremy Tinianow',
					github: 'jtini',
					number: 5
				},
				kengoldfarb: {
					name: 'Ken Goldfarb',
					github: 'kengoldfarb',
					number: 4
				},
				bminch: {
					name: 'Brandon Minch',
					github: 'bminch',
					number: 2
				}
			})
		};
	}
	componentDidMount() {
		const { friendData } = this.state;
		const myHeaders = new Headers();
		myHeaders.append('Authorization', `token ${OAUTH_TOKEN}`); //eslint-disable-line
		const myInit = {
			headers: myHeaders
		};
		const urls = friendData.map(item => `https://api.github.com/users/${item.github}`).toArray();
		Promise.all(urls.map(url => fetch(url, myInit)))
			.then((responses) => {
				console.log('all response', responses);
				Promise.all(responses.map(response => response.json()
					.then((res) => {
						console.log('One Response', res);
						const newFriendState = friendData.set(res.login, Object.assign(friendData.get(res.login), { avatar: res.avatar_url, company: res.company, location: res.location }));
						this.setState({
							friendData: newFriendState
						});
					})))
					.then(() => {
						this.setState({
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
						: friendData.valueSeq().map((friend, idx) =>
							<div key={idx} className="employee pt-card pt-elevation-2 pt-interactive">
								<img src={friend.avatar} alt={friend.name} className="avatar" />
								<div className="text_wrapper">
									<div className="name">{friend.name}</div>
									{friend.company}
									<div className="location"><span className="pt-icon-standard pt-icon-map-marker" />{friend.location}</div>
								</div>
							</div>
					)}
				</div>
				<Link to="/" className="back"><span className="pt-icon-standard pt-icon-arrow-left arrow_icon arrow_back" />{'Go Back'}</Link>
			</div>
		);
	}
}
