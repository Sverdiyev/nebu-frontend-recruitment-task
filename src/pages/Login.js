import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import SignInButton from '../components/Buttons/SignInButton.js';
import SwitchButton from '../components/Buttons/SwitchButton.js';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword.js';
import Heading from '../components/Heading/Heading.js';
import Email from '../components/Inputs/Email.js';
import Password from '../components/Inputs/Password.js';
import Line from '../components/Line/Line.js';
import Card from '../UI/Card/Card.js';

function Login({ type }) {
	const state = useSelector((state) => state);

	const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
	const [emailIsBlocked, setEmailIsBlocked] = useState(false);

	const passwordIsBlocked = useRef(false);

	const firstRender = useRef(true);

	const inputsInvalid = emailIsBlocked || passwordIsBlocked.current;

	useEffect(() => {
		if (!firstRender.current) {
			setButtonIsDisabled(inputsInvalid);
		}
		firstRender.current = false;
	}, [inputsInvalid]);

	if (state.loggedInUser) return <h1>You are already logged in :)</h1>;

	return (
		<Card>
			<Heading />
			<Email emailIsBlocked={setEmailIsBlocked} />
			<Password passwordIsBlocked={passwordIsBlocked} />
			<ForgotPassword />
			<SignInButton disabled={buttonIsDisabled} />
			<Line />
			<SwitchButton currPage='signIn' />
		</Card>
	);
}

export default Login;
