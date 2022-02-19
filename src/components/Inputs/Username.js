import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageActions } from '../../store/index.js';
import InputWarning from '../InputWarining/InputWarning.js';
import { InputWrapper, StyledInput } from './Input.styles.js';

function Username({ usernameIsBlocked }) {
	const dispatch = useDispatch();
	const { username } = useSelector((state) => state);

	const [error, setError] = useState(false);

	const onChangeInput = (e) => {
		const username = e.target.value.trim();
		dispatch(pageActions.setUsername(e.target.value));

		if (!username) {
			usernameIsBlocked.current = true;
			setError(true);
			return;
		}
		setError(false);
		usernameIsBlocked.current = false;
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
