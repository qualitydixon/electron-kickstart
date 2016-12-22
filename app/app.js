import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
	render() {
		return (
			<h1>{'Hello World!'}</h1>
		);
	}
}

ReactDOM.render(<Search />, document.getElementById('app'));
