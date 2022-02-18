import React from 'react';
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
	console.log(buttonTypes);
	return (
		<Card>
			<Heading />
			<Inputs />
			<ForgotPassword />
			<Button type={buttonTypes[type].primary} />
			<Line />
			<Button type={buttonTypes[type].secondary} />
		</Card>
	);
}

export default SignIn;
