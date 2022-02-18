import React, { useState } from 'react';
import { InputWrapper, StyledInput, StyledShow } from './Input.styles.js';
import InputWarning from '../InputWarining/InputWarning';
import { pageActions } from '../../store/index.js';
import { useDispatch, useSelector } from 'react-redux';

function Password({ passwordIsValid, passwordIsTouched }) {
	const { password } = useSelector((state) => state);
	const { passwordIsShown } = useSelector((state) => state);

	const dispatch = useDispatch();

	const [error, setError] = useState(false);

	const onChangeInput = (e) => {
		passwordIsTouched(true);
		const passwordInput = e.target.value.trim();
		dispatch(pageActions.setPassword(passwordInput));

		if (!passwordInput) {
			passwordIsValid(false);
			setError(true);
			return;
		}
		setError(false);

		passwordIsValid(true);
	};

	const onChangeType = () => {
		if (passwordIsShown) dispatch(pageActions.setPasswordIsShown(false));
		else if (!passwordIsShown) dispatch(pageActions.setPasswordIsShown(true));
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
