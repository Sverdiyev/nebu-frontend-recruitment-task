import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

function User() {
	const state = useSelector((state) => state);
	const navigate = useNavigate();

	const { loggedInUser, users } = state;
	const { userId } = useParams();

	const user = users.filter((item) => item.id === +userId)[0];

	if (!user) {
		return <div>Error - not found </div>;
	}

	if (!loggedInUser) navigate('/not-authorized');

	return (
		<div>
			<ul>
				<li>User ID:{user.id}</li>
				<li>Username:{user.username}</li>
				<li>User email:{user.email}</li>
			</ul>
			{loggedInUser === +userId && <Link to='follow'>See who you follow</Link>}
		</div>
	);
}

export default User;
