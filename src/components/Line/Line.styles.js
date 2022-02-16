const { default: styled } = require('styled-components');

export const StyledLine = styled.div`
	text-align: center;
	position: relative;
	overflow: hidden;
	font-size: 10px;
	letter-spacing: 1px;
	margin: 5px 0;
	span {
		vertical-align: baseline;
		zoom: 1;
		position: relative;
		padding: 0 20px;

		&:before,
		&:after {
			content: '';
			display: block;
			width: 200%;
			position: absolute;
			top: 0.73em;
			border-top: 1px solid #c1c1c1;
		}

		&:before {
			right: 100%;
		}
		&:after {
			left: 100%;
		}
	}
`;
