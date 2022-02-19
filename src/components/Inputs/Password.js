import React, { useState } from 'react';
import { InputWrapper, StyledInput, StyledShow } from './Input.styles.js';
import InputWarning from '../InputWarining/InputWarning';
import { pageActions } from '../../store/index.js';
import { useDispatch, useSelector } from 'react-redux';

function Password({ passwordIsBlocked }) {
	const [passwordIsShown, setPasswordIsShown] = useState(false);
	const [error, setError] = useState(false);
	const { password } = useSelector((state) => state);

	const dispatch = useDispatch();

	const onChangeInput = (e) => {
		const passwordInput = e.target.value.trim();
		dispatch(pageActions.setPassword(passwordInput));

		const invalidPassword = passwordInput.trim().length < 6;
		if (!passwordInput || invalidPassword) {
			passwordIsBlocked.current = true;
			setError(true);
			return;
		}
		setError(false);

		passwordIsBlocked.current = false;
	};

	const onChangeType = () => {
		if (passwordIsShown) setPasswordIsShown(false);
		else if (!passwordIsShown) setPasswordIsShown(true);
	};

	let showText = '';
	if (password) showText = passwordIsShown ? 'hide' : 'show';
	const type = passwordIsShown ? 'text' : 'password';

	return (
		<InputWrapper>
			<StyledInput
				id='password'
				type={type}
				placeholder='Password'
				onChange={onChangeInput}
				value={password}
			/>
			{<StyledShow onClick={onChangeType}>{showText}</StyledShow>}
			<InputWarning error={error}>Please enter valid password </InputWarning>
		</InputWrapper>
	);
}

export default Password;
