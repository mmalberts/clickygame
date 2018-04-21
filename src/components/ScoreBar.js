import React from 'react';

const ScoreBar = props => {
	return (
		<nav className="navbar sticky-top navbar-light bg-light">
			<p>ClickyGame!</p>
			<p>Score: {props.score}</p>
		</nav>
	);
};

export default ScoreBar;