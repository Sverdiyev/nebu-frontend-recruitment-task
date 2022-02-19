import { useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pageActions } from './store/index.js';
import User from './pages/User.js';
import SignUp from './pages/SignUp.js';
import Login from './pages/Login.js';
import Users from './pages/Users.js';
import NotAuth from './pages/NotAuth.js';
import Followed from './pages/Follow.js';
import Navigation from './components/Navigation/Navigation.js';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		fetch('/users')
			.then((res) => res.json())
			.then((d) => dispatch(pageActions.setUsers(d)));
	}, [dispatch]);

	return (
		<>
			<Navigation />
			<Routes>
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<SignUp />} />
				<Route path='users' element={<Users />} />
				<Route path='users/:userId' element={<User />} />
				<Route path='users/:userId/follow' element={<Followed />} />
				<Route path='/not-authorized' element={<NotAuth />} />
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='*' element={<div>ERROR 404 - not found </div>} />
			</Routes>
		</>
	);
}

export default App;
