import React, { useEffect, useRef, useState } from 'react';
import SignUpButton from '../components/Buttons/SignUpButton.js';
import SwitchButton from '../components/Buttons/SwitchButton.js';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword.js';
import Heading from '../components/Heading/Heading.js';
import Email from '../components/Inputs/Email.js';
import Password from '../components/Inputs/Password.js';
import Username from '../components/Inputs/Username.js';
import Line from '../components/Line/Line.js';
import Card from '../UI/Card/Card.js';

function SignUp() {
	const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
	const inputsTouched = useRef(false);
	const emailIsBlocked = useRef(false);
	const usernameIsBlocked = useRef(false);
	const passwordIsBlocked = useRef(false);

	//! FIXME disabling
	const change =
		emailIsBlocked.current ||
		usernameIsBlocked.current ||
		passwordIsBlocked.current;
	useEffect(() => {
		inputsTouched.current = true;
		setButtonIsDisabled(change);
	}, [change]);

	//!TBC
	// if (state.loggedInUser) {
	// 	return <h1>You are already logged in :)</h1>;
	// }
	return (
		<Card>
			<Heading />
			<Email emailIsBlocked={emailIsBlocked} />
			<Username usernameIsBlocked={usernameIsBlocked} />
			<Password passwordIsBlocked={passwordIsBlocked} />
			<ForgotPassword />
			<SignUpButton disabled={buttonIsDisabled} />
			<Line />
			<SwitchButton currPage='signUp' />
		</Card>
	);
}

export default SignUp;
