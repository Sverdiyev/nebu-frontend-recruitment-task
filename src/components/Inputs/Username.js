import React from 'react';
import { InputWrapper, StyledInput } from './Input.styles.js';

function Username() {
	return (
		<InputWrapper>
			<StyledInput type='text' placeholder='Username' />
		</InputWrapper>
	);
}

export default Username;
