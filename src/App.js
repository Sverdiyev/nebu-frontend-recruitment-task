import { useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pageActions } from './store/index.js';
import User from './pages/User.js';
import SignUp from './pages/SignUp.js';
import Login from './pages/Login.js';
import Users from './pages/Users.js';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		fetch('/users')
			.then((res) => res.json())
			.then((d) => dispatch(pageActions.setUsers(d)));
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<SignUp />} />
				<Route path='user' element={<User />} />
				<Route path='users' element={<Users />} />
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='*' element={<div>ERROR 404 - not found </div>} />
			</Routes>
		</>
	);
}

export default App;
