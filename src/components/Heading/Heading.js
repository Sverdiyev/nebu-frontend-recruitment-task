import React from 'react';
import { useSelector } from 'react-redux';
import { HeadingWrapper } from './Heading.styles.js';

function Heading() {
	const { error } = useSelector((state) => state);

	return (
		<HeadingWrapper>
			<h1>Sign in</h1>
			<h4>Stay updated on professional world </h4>
			{error && <span>{error.text}</span>}
		</HeadingWrapper>
	);
}

export default Heading;
