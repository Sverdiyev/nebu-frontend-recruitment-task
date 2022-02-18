import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pageActions } from '../../store/index.js';
import InputWarning from '../InputWarining/InputWarning.js';
import { InputWrapper, StyledInput } from './Input.styles.js';

function Username({ usernameIsTouched, usernameIsValid }) {
	const dispatch = useDispatch();
	const [error, setError] = useState(false);

	const onChangeInput = (e) => {
		usernameIsTouched(true);
		const username = e.target.value.trim();
		console.log('🚀 ~ onChangeInput ~ username', username);
		dispatch(pageActions.setUsername({ username: e.target.value }));

		if (!username) {
			usernameIsValid(false);
			setError(true);
			return;
		}
		setError(false);
		usernameIsValid(true);
	};

	return (
		<InputWrapper>
			<StyledInput
				type='text'
				placeholder='Username'
				onChange={onChangeInput}
			/>
			<InputWarning error={error}>please enter valid username </InputWarning>
		</InputWrapper>
	);
}

export default Username;
