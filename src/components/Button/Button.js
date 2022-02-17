import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pageActions } from '../../store/index.js';
import StyledButton from './Button.styles.js';

function Button({ type }) {
	const text = {
		signIn: 'Sign in',
		signUp: 'Sign up',
		switchToSignUp: 'Switch to Sign up',
		switchToSignIn: 'Switch to Sign in',
	};
	const chosenText = text[type];

	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const pageChangeHandlder = () => {
		console.log('🚀 ~ pageChangeHandlder ~ type', type);
		if (type !== 'switchToSignUp' && type !== 'switchToSignIn') return;

		dispatch(pageActions.switchPage());

		console.log(state);
	};

	return (
		<StyledButton $type={type} onClick={pageChangeHandlder}>
			{chosenText}
		</StyledButton>
	);
}

export default Button;
