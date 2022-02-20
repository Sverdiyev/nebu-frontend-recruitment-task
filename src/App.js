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

const backupData = [
	{
		id: 1,
		username: 'John Smith',
		email: 'john.smith@gmail.com',
		password: 'john@123',
		follow: [2, 3],
	},
	{
		id: 2,
		username: 'Alice Doe',
		email: 'alice.doe@gmail.com',
		password: 'alice@123',
		follow: [],
	},
	{
		id: 3,
		username: 'Cathy Lee',
		email: 'cathy.lee@gmail.com',
		password: 'cathy@123',
		follow: [1],
	},
];
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		fetch('/users')
			.then((res) => res.json())
			.then((d) => dispatch(pageActions.setUsers(d)))
			.catch(() => {
				console.log('using backup data');
				dispatch(pageActions.setUsers(backupData));
			});
	}, [dispatch]);

	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/users' element={<Users />} />
				<Route path='/users/:userId' element={<User />} />
				<Route path='/users/:userId/follow' element={<Followed />} />
				<Route path='/not-authorized' element={<NotAuth />} />
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='*' element={<div>ERROR 404 - not found </div>} />
			</Routes>
		</>
	);
}

export default App;
