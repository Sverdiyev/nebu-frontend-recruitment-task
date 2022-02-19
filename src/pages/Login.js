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
	const emailIsBlocked = useRef(false);
	const passwordIsBlocked = useRef(false); //true == disabled
	// const allInputsShouldBeOk = useRef(false);

	const inputsTouched = useRef(false); // false == enabled
	const firstRender = useRef(true);

	//true => disabled
	const inputsInvalid =
		emailIsBlocked.current || // true
		passwordIsBlocked.current; // true

	useEffect(() => {
		if (!firstRender.current) {
			inputsTouched.current = true;
			// allInputsShouldBeOk.current = true;

			setButtonIsDisabled(inputsInvalid);
		}
		firstRender.current = false;
	}, [inputsInvalid]);

	if (state.loggedInUser) {
		return <h1>You are already logged in :)</h1>;
	}

	return (
		<Card>
			<Heading />
			<Email emailIsBlocked={emailIsBlocked} />
			<Password passwordIsBlocked={passwordIsBlocked} />
			<ForgotPassword />
			<SignInButton disabled={buttonIsDisabled} />
			<Line />
			<SwitchButton currPage='signIn' />
		</Card>
	);
}

export default Login;
