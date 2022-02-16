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
		outline-color: #656565;
		color: #656565;

		outline-width: 20px;
		font-weight: 500;
	}
`;

export const StyledShow = styled.span`
	position: absolute;
	/* width: 10%; */
	/* height: 100%; */
	/* display: inline-block; */

	margin-left: 85%;
	font-size: 12px;
	color: #0e66c2;
	font-weight: 700;
	cursor: pointer;
`;
