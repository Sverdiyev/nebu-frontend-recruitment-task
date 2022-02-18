import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageActions } from '../../store/index.js';
import InputWarning from '../InputWarining/InputWarning.js';
import { InputWrapper, StyledInput } from './Input.styles.js';

function Username({ usernameIsTouched, usernameIsValid }) {
	const dispatch = useDispatch();
	const [error, setError] = useState(false);
	const { username } = useSelector((state) => state);

	const onChangeInput = (e) => {
		usernameIsTouched(true);
		const username = e.target.value.trim();
		dispatch(pageActions.setUsername(e.target.value));

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
				value={username}
			/>
			<InputWarning error={error}>Please enter valid username </InputWarning>
		</InputWrapper>
	);
}

export default Username;
