import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pageActions } from '../store/index.js';
import NotAuth from './NotAuth.js';

function User() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const navigate = useNavigate();

	const { loggedInUser, users } = state;

	const user = {};

	for (let item of users) {
		if (item.id === loggedInUser) {
			Object.assign(user, item);
		}
	}

	const logoutHandler = () => {
		dispatch(pageActions.logout());
		navigate('/login');
	};

	if (!loggedInUser) {
		return <NotAuth />;
	}

	const followers = user.follow.map((followerID) => {
		for (let item of users) {
			if (followerID === item.id)
				return `${item.username} - user Id: ${item.id}`;
		}
	});

	const followersText = followers.length
		? followers.join(', ')
		: 'No followers yet';

	return (
		<div>
			<ul>
				<li>User ID:{user.id}</li>
				<li>User email:{user.email}</li>
				<li>User followers:{followersText}</li>
			</ul>

			<button onClick={logoutHandler}> Log Out</button>
		</div>
	);
}

export default User;
