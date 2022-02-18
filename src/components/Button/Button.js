import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pageActions } from '../../store/index.js';
import StyledButton from './Button.styles.js';

const text = {
	signIn: 'Sign in',
	signUp: 'Sign up',
	switchToSignUp: 'Switch to Sign up',
	switchToSignIn: 'Switch to Login',
};

function Button({ type, disabled }) {
	const chosenText = text[type];
	const dispatch = useDispatch();

	const navigate = useNavigate('/');
	const pageChangeHandlder = () => {
		if (type === 'signIn' && type === 'signUp') {
			return;
		} else if (type === 'switchToSignIn') {
			dispatch(pageActions.pageReset());
			navigate('/login');
		} else if (type === 'switchToSignUp') {
			dispatch(pageActions.pageReset());
			navigate('/signup');
		}
	};

	return (
		<StyledButton disabled={disabled} $type={type} onClick={pageChangeHandlder}>
			{chosenText}
		</StyledButton>
	);
}

export default Button;
