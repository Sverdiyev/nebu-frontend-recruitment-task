import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pageActions } from '../../store/index.js';
import StyledButton from './Button.styles.js';

function SignInButton({ disabled, startedTyping }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const state = useSelector((state) => state);
	const onClickHandler = () => {
		dispatch(pageActions.login());

		if (state.loggedInUser) navigate('/users');
		else {
			dispatch(pageActions.pageReset());
			dispatch(pageActions.setError('Invalid credentials'));
		}
	};

	return (
		<>
			<StyledButton disabled={disabled} $type='signIn' onClick={onClickHandler}>
				Sign in
			</StyledButton>
		</>
	);
}

export default SignInButton;
