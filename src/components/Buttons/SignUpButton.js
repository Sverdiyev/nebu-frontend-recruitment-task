import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { pageActions } from '../../store/index.js';
import StyledButton from './Button.styles.js';

function SignUpButton({ disabled }) {
	// const dispatch = useDispatch();

	// const navigate = useNavigate();
	const pageChangeHandlder = () => {};

	return (
		<StyledButton
			disabled={disabled}
			$type='signUp'
			onClick={pageChangeHandlder}
		>
			Sign up
		</StyledButton>
	);
}

export default SignUpButton;
