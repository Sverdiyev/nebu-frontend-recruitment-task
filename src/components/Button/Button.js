import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledButton from './Button.styles.js';

const text = {
	signIn: 'Sign in',
	signUp: 'Sign up',
	switchToSignUp: 'Switch to Sign up',
	switchToSignIn: 'Switch to Login',
};

function Button({ type }) {
	const chosenText = text[type];

	const navigate = useNavigate('/');
	const pageChangeHandlder = () => {
		if (type === 'signIn' && type === 'signUp') {
			return;
		} else if (type === 'switchToSignIn') {
			navigate('/login');
		} else if (type === 'switchToSignUp') {
			navigate('/signup');
		}
	};

	return (
		<StyledButton $type={type} onClick={pageChangeHandlder}>
			{chosenText}
		</StyledButton>
	);
}

export default Button;
