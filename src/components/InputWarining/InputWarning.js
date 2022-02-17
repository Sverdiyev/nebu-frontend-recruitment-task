import React from 'react';
import StyledWarning from './InputWarning.styles.js';

function InputWarning({ error, children }) {
	if (!error) return null;
	return <StyledWarning>{children}</StyledWarning>;
}

export default InputWarning;
