import React, { useState } from 'react';
import { InputWrapper, StyledInput, StyledShow } from './Input.styles.js';
import InputWarning from '../InputWarining/InputWarning';

function Password() {
	const [type, setType] = useState('password');
	const [passwordInput, setPasswordInput] = useState('');
	const onChangeInput = (e) => setPasswordInput(e.target.value);

	const onChangeType = () => {
		if (type === 'password') setType('text');
		if (type === 'text') setType('password');
	};

	let showText;
	if (passwordInput.trim()) showText = type === 'password' ? 'show' : 'hide';

	return (
		<InputWrapper>
			<StyledInput
				id='password'
				type={type}
				placeholder='Password'
				value={passwordInput}
				onChange={onChangeInput}
			/>
			{<StyledShow onClick={onChangeType}>{showText}</StyledShow>}
			<InputWarning error>assad</InputWarning>
		</InputWrapper>
	);
}

export default Password;
