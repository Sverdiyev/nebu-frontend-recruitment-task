import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pageActions } from '../../store/index.js';
import StyledButton from './Button.styles.js';

function SignInButton({ disabled }) {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const onClickHandler = () => {
		dispatch(pageActions.login());

		//BAD sigin
		navigate('/user');
	};

	return (
		<StyledButton disabled={disabled} $type='signIn' onClick={onClickHandler}>
			Sign in
		</StyledButton>
	);
}

export default SignInButton;
