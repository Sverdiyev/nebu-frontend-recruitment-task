import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Button/Button.js';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword.js';
import Heading from '../components/Heading/Heading.js';
import Inputs from '../components/Inputs/Inputs.js';
import Line from '../components/Line/Line.js';
import Card from '../UI/Card/Card.js';

const buttonTypes = {
	signIn: { primary: 'signIn', secondary: 'switchToSignUp' },
	signUp: { primary: 'signUp', secondary: 'switchToSignIn' },
};

function SignIn({ type }) {
	const state = useSelector((state) => state);

	return (
		<Card>
			<Heading />
			<Inputs />
			<ForgotPassword />
			<Button
				type={buttonTypes[type].primary}
				disabled={state.buttonIsDisabled}
			/>
			<Line />
			<Button
				type={buttonTypes[type].secondary}
				inputsTouched={state.inputsTouched}
			/>
		</Card>
	);
}

export default SignIn;
