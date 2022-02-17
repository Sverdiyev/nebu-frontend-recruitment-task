import styled from 'styled-components';

const StyledButton = styled.button`
	border-radius: 25px;
	width: 100%;
	padding: 13px 0;
	margin: 6px 0;
	cursor: pointer;
	border: none;
	font-weight: 500;
	${({ $type }) => {
		switch ($type) {
			case 'signUp':
			case 'signIn':
				return `color:white;
				background-color:#0e66c2;
				:focus-visible{
					outline-color:#7cd3e6;
				}
					`;
			case 'switchToSignUp':
			case 'switchToSignIn':
			default:
				return `color:#606060;
				background-color:white;
				border:1px solid #606060;
				:focus-visible{
					outline-color:#0e66c2;
				};
				
				`;
		}
	}};
`;

export default StyledButton;
