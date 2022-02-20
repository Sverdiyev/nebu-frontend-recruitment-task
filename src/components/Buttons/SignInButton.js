import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pageActions } from '../../store/index.js';
import StyledButton from './Button.styles.js';

function SignInButton({ disabled, startedTyping }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function validateLogin() {
		const result = state.users.find(
			(user) => user.email === state.email && user.password === state.password
		);
		return result ? result.id : null;
	}

	const state = useSelector((state) => state);
	const onClickHandler = () => {
		const loggedInUser = validateLogin();

		if (loggedInUser) {
			dispatch(pageActions.login(loggedInUser));
			navigate(`/users/${loggedInUser}`);
		} else {
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
