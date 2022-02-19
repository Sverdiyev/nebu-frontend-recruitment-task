import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { pageActions } from '../../store/index.js';
import { StyledNav } from './Navigation.styles.js';

function Navigation() {
	const { loggedInUser } = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	if (!loggedInUser) return null;
	const logoutHandler = () => {
		dispatch(pageActions.logout());
		navigate('/login');
	};
	return (
		<StyledNav>
			<ul>
				<NavLink to='/users'>
					<li>Users</li>
				</NavLink>
				<NavLink to={`/users/${loggedInUser}`}>
					<li>Me</li>
				</NavLink>
				<NavLink to={`/users/${loggedInUser}/follow`}>
					<li>Following</li>
				</NavLink>
				<NavLink to=''>
					<li onClick={logoutHandler}>Log out</li>
				</NavLink>
			</ul>
		</StyledNav>
	);
}

export default Navigation;
