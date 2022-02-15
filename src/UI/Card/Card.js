import React from 'react';
import StyledCard from './Card.styles.js';

function Card({ children }) {
	return <StyledCard>{children}</StyledCard>;
}

export default Card;
