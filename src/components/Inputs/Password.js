import React, { useState } from 'react';
import { InputWrapper, StyledInput, StyledShow } from './Input.styles.js';
import InputWarning from '../InputWarining/InputWarning';
import { pageActions } from '../../store/index.js';
import { useDispatch, useSelector } from 'react-redux';

function Password({ passwordIsValid, passwordIsTouched }) {
	const [type, setType] = useState('password');
	const { password } = useSelector((state) => state);
	const dispatch = useDispatch();

	const [error, setError] = useState(false);

	const onChangeInput = (e) => {
		passwordIsTouched(true);
		const password = e.target.value.trim();
		console.log('🚀 ~ onChangeInput ~ password', password);
		dispatch(pageActions.setPassword({ password: e.target.value }));

		if (!password) {
			passwordIsValid(false);
			setError(true);
			return;
		}
		setError(false);

		passwordIsValid(true);
	};

	const onChangeType = () => {
		if (type === 'password') setType('text');
		if (type === 'text') setType('password');
	};

	let showText = '';
	if (password.trim()) showText = type === 'password' ? 'show' : 'hide';
	console.log('🚀 ~ Password ~ error', error);

	return (
		<InputWrapper>
			<StyledInput
				id='password'
				type={type}
				placeholder='Password'
				value={password}
				onChange={onChangeInput}
			/>
			{<StyledShow onClick={onChangeType}>{showText}</StyledShow>}
			<InputWarning error={error}>please enter valid password </InputWarning>
		</InputWrapper>
	);
}

export default Password;
