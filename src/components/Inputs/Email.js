import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pageActions } from '../../store/index.js';
import InputWarning from '../InputWarining/InputWarning.js';
import { InputWrapper, StyledInput } from './Input.styles.js';

function Email({ emailIsBlocked }) {
	const dispatch = useDispatch();
	const { email } = useSelector((state) => state);

	const [error, setError] = useState(false);

	const onInputBlur = (e) => {
		const emailInput = e.target.value.trim();

		const validInput = validateEmailOrPhone(emailInput);

		if (!validInput) {
			emailIsBlocked(true);
			setError(true);
			return;
		}

		setError(false);
		emailIsBlocked(false);
	};

	const onInputChange = (e) => {
		const emailInput = e.target.value.trim();
		dispatch(pageActions.setEmail(emailInput));
	};

	return (
		<InputWrapper>
			<StyledInput
				type='email'
				placeholder='Email or Phone'
				onBlur={onInputBlur}
				onChange={onInputChange}
				value={email}
			/>
			<InputWarning error={error}>
				Please enter valid email or phone
			</InputWarning>
		</InputWrapper>
	);
}

// [0-9] @

export default Email;

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};
const validatePhone = (phone) => {
	return String(phone)
		.toLowerCase()
		.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
};

function validateEmailOrPhone(input) {
	// return true;
	const validEmail = validateEmail(input);
	const validPhone = validatePhone(input);
	return !!(validEmail || validPhone);
}
