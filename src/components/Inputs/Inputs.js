import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Email from './Email.js';
import Password from './Password.js';
import Username from './Username.js';

function Inputs() {
	const location = useLocation();

	const [emailIsValid, setEmailIsValid] = useState(false);
	const [emailIsTouched, setEmailIsTouched] = useState(false);
	const emailIsBlocked = !emailIsValid && emailIsTouched;

	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [passwordIsTouched, setPasswordIsTouched] = useState(false);
	const passwordIsBlocked = !passwordIsValid && passwordIsTouched;

	const [usernameIsValid, setUsernameIsValid] = useState(false);
	const [usernameIsTouched, setUsernameIsTouched] = useState(false);
	const usernameIsBlocked = !usernameIsValid && usernameIsTouched;

	let buttonIsBlocked = emailIsBlocked || passwordIsBlocked;
	if (location.pathname === '/signUp') {
		buttonIsBlocked = buttonIsBlocked || usernameIsBlocked;
	}

	return (
		<>
			<Email
				emailIsValid={setEmailIsValid}
				emailIsTouched={setEmailIsTouched}
			/>
			{location.pathname === '/signup' && (
				<Username
					usernameIsValid={setUsernameIsValid}
					usernameIsTouched={setUsernameIsTouched}
				/>
			)}
			<Password
				passwordIsValid={setPasswordIsValid}
				passwordIsTouched={setPasswordIsTouched}
			/>
		</>
	);
}

export default Inputs;
