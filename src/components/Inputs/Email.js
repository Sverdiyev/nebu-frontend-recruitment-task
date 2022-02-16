import React from 'react';
import { InputWrapper, StyledInput } from './Input.styles.js';

function Email({ type }) {
	return (
		<InputWrapper>
			<StyledInput type='email' placeholder='Email or Phone' />
		</InputWrapper>
	);
}

export default Email;
