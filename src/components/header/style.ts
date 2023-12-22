import styled from 'styled-components';

export const HeaderS = styled.header`
	background-color: #e9ecef;
	position: fixed;
	height: 75px;
	z-index: 9;
	width: 100%;
	.container-header {
		padding: 15px 25px 0 25px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const TextHeader = styled.div`
	display: flex;
	gap: 20px;
`;

export const RouteHeader = styled.h3`
	position: relative;
	cursor: pointer;
	font-size: 1.5em;
	color: #242423;
	font-weight: 700;
	&:hover {
		transform: scale(1.1);
		transition: 0.5s;
		color: #f34213;
	}
	&::before {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #f34213;
		visibility: hidden;
		transition: all 0.3s ease-in-out;
	}
	&:hover::before {
		visibility: visible;
		width: 100%;
	}
`;

export const ButtonHeader = styled.button`
	padding: 5px 15px;
	font-size: 1.3em;
	border-radius: 20px;
	border: 2px solid #f34213;
	color: #fafafa;
	font-weight: 700;
	background-color: #f34213;
	&:hover {
		transform: scale(1.1);
		transition: 1s;
	}
`;
