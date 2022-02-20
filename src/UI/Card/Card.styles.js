import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 23%;
	padding: 15px 20px;
	border-radius: 8px;

	box-shadow: 0px 0px 9px 3px #f0f0f0;
	margin: 24px auto;
	color: #191a1a;

	@media screen and (max-width: 1200px) {
		width: 35%;
	}
	@media screen and (max-width: 800px) {
		width: 50%;
	}
	@media screen and (max-width: 600px) {
		width: 80%;
	}
`;

export default StyledCard;
