import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pageActions } from '../../store/index.js';
import InputWarning from '../InputWarining/InputWarning.js';
import { InputWrapper, StyledInput } from './Input.styles.js';

function Email({ emailIsValid, emailIsTouched }) {
	const dispatch = useDispatch();
	const { email } = useSelector((state) => state);

	const [error, setError] = useState(false);

	const onChangeInput = (e) => {
		emailIsTouched(true);
		const email = e.target.value.trim();
		dispatch(pageActions.setEmail(email));

		if (!email) {
			emailIsValid(false);
			setError(true);
			return;
		}
		setError(false);

		emailIsValid(true);
	};
	return (
		<InputWrapper>
			<StyledInput
				type='email'
				placeholder='Email or Phone'
				onChange={onChangeInput}
				value={email}
			/>
			<InputWarning error={error}>
				please enter valid email or phone{' '}
			</InputWarning>
		</InputWrapper>
	);
}

export default Email;
