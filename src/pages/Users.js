import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

function Users() {
	const { users } = useSelector((state) => state);
	const { loggedInUser } = useSelector((state) => state);

	if (!loggedInUser) return <Navigate to='/not-authorized' />;

	return (
		<div>
			<h1>All Users</h1>
			<ol>
				{users.map((item) => (
					<Link key={item.id} to={`${item.id}`}>
						<li>{item.username}</li>
					</Link>
				))}
			</ol>
		</div>
	);
}

export default Users;
