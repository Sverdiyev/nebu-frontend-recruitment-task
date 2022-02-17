// import { useEffect } from 'react';
import Card from './UI/Card/Card.js';
import Email from './components/Inputs/Email.js';
import Password from './components/Inputs/Password.js';
import login from './login.png';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.js';
import Button from './components/Button/Button.js';
import Heading from './components/Heading/Heading.js';
import Line from './components/Line/Line.js';
import Username from './components/Inputs/Username.js';
import { useSelector } from 'react-redux';

const buttonTypes = {
	signIn: { primary: 'signIn', secondary: 'switchToSignIn' },
	signUp: { primary: 'signUp', secondary: 'switchToSignUp' },
};
function App() {
	/**
	 * open console to see how backend is structured
	 */
	// useEffect(() => {
	// 	fetch('/users')
	// 		.then((res) => res.json())
	// 		.then(console.log);
	// }, []);

	const state = useSelector((state) => state);

	return (
		<div className='App'>
			<Card>
				<Heading />
				<Email />
				{state.page === 'signUp' && <Username />}
				<Password />
				<ForgotPassword />
				<Button type={buttonTypes[state.page].primary} />
				<Line />
				<Button type={buttonTypes[state.page].secondary} onChangePage='' />
			</Card>
			<img src={login} alt='login' />
		</div>
	);
}

export default App;
