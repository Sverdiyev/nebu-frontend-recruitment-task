import React from 'react';
import InputWarning from '../InputWarining/InputWarning.js';
import { InputWrapper, StyledInput } from './Input.styles.js';

function Email({ type }) {
	return (
		<InputWrapper>
			<StyledInput type='email' placeholder='Email or Phone' />
			<InputWarning>Please enter proper email</InputWarning>
		</InputWrapper>
	);
}

export default Email;
