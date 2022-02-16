import styled from 'styled-components';

const StyledButton = styled.button`
	border-radius: 25px;
	width: 100%;
	padding: 10px 0;

	border: none;

	${({ $type }) => {
		switch ($type) {
			case 'signUp':
			case 'signIn':
				return 'color:white; background-color:#0e66c2;';
			case 'switchToSignUp':
			case 'switchToSignIn':
			default:
				return ' color:#606060;background-color:white;border:1px solid #606060;';
		}
	}}
`;

//#606060
export default StyledButton;
