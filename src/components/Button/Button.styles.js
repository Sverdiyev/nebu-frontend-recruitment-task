import styled from 'styled-components';

const StyledButton = styled.button`
	border-radius: 25px;
	width: 100%;
	padding: 13px 0;
	margin: 6px 0;
	cursor: pointer;
	border: none;
	font-weight: 500;
	outline: none;
	transition: transform 3sec;
	&:active {
		transition: transform 2sec;
		transform: translateY(5px);
		transform: scale(98%);
	}

	${({ $type }) => {
		switch ($type) {
			case 'signUp':
			case 'signIn':
				return `
				color:white;
				background-color:#0e66c2;
				:focus-visible{
					box-shadow: 0 0 10px rgba(82, 168, 236, 60%);
				};
					`;
			case 'switchToSignUp':
			case 'switchToSignIn':
			default:
				return `
				color:#606060;
				background-color:#fff;
				border:1px solid #606060;
				:focus-visible{
					box-shadow: 0 0 10px rgba(82, 168, 236, 60%);
				};	
				`;
		}
	}};

	:disabled {
		background-color: #606060;
	}
`;

export default StyledButton;
