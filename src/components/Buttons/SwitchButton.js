import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pageActions } from '../../store/index.js';
import StyledButton from './Button.styles.js';

const text = {
	signIn: 'Switch to Sign up',
	signUp: 'Switch to Login',
};

function SwitchButton({ currPage }) {
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const onClickHandler = () => {
		dispatch(pageActions.pageReset());
		if (currPage === 'signUp') navigate('/login');
		if (currPage === 'signIn') {
			console.log('🚀 ~ onClickHandler ~ currPage', currPage);

			navigate('/signup');
		}
	};

	return (
		<StyledButton $type='switch' onClick={onClickHandler}>
			{text[currPage]}
		</StyledButton>
	);
}

export default SwitchButton;
