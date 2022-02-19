import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function Followed() {
	const state = useSelector((state) => state);

	const { loggedInUser, users } = state;

	const navigate = useNavigate();
	const { userId } = useParams();

	if (!loggedInUser) return <div>Not found sorry</div>;

	if (userId === loggedInUser) return navigate('/not-authorized');
	const user = {};

	for (let item of users) {
		if (item.id === loggedInUser) {
			Object.assign(user, item);
		}
	}

	const followers = user.follow.map((followerID) => {
		for (let item of users) {
			if (followerID === item.id) return `${item.username}`;
		}
	});

	const followersText = followers.length
		? followers.join(', ')
		: 'No followers yet';

	return (
		<ul>
			<li>Username: {user.username}</li>
			<li>User followers: {followersText}</li>
		</ul>
	);
}

export default Followed;
