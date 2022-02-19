import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotAuth() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/login');
		}, 3000);
	}, [navigate]);

	return (
		<div>
			<h1>You are not authorized</h1>
			<h2>Please log in</h2>
			<h4>You will be redirected to log in page</h4>
		</div>
	);
}

export default NotAuth;
