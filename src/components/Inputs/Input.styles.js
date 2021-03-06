import styled from 'styled-components';

export const InputWrapper = styled.div`
	display: flex;
	align-items: center;

	position: relative;
	width: 100%;
	border: 1px solid #858585;
	box-sizing: border-box;
	border-radius: 6px;

	margin-top: 19px;
`;
export const StyledInput = styled.input`
	display: inline-block;
	border: none;
	background-color: transparent;
	width: 100%;
	padding: 12px;
	font-size: 16px;
	caret-color: #b9b9b8;
	color: #656565;

	&#password {
		padding-right: 40px;
	}

	&:focus-visible,
	:focus-visible ::placeholder {
		outline: none;
		color: #656565;
		box-shadow: 0 0 8px rgba(82, 168, 236, 60%);
		font-weight: 500;
	}
`;

export const StyledShow = styled.span`
	position: absolute;

	margin-left: 85%;
	font-size: 12px;
	color: #0e66c2;
	font-weight: 700;
	cursor: pointer;
`;
