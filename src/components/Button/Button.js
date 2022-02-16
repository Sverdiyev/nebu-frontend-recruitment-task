import React from 'react';
import StyledButton from './Button.styles.js';

function Button({ type }) {
	console.log('🚀 ~ Button ~ type', type);
	const text = {
		signIn: 'Sign in',
		signUp: 'Sign up',
		switchToSignUp: 'Switch to Sign up',
		switchToSignIn: 'Switch to Sign in',
	};
	const chosenText = text[type];
	return <StyledButton $type={type}>{chosenText}</StyledButton>;
}

export default Button;
