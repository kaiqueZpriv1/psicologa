import styled from 'styled-components';

export const ContactS = styled.section`
	margin-top: 100px;
	padding: 100px 0 50px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: #03045e;
	.container-contact {
		margin-top: 50px;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
`;

export const BoxingContact = styled.div`
	display: flex;
	gap: 20px;
	flex-direction: column;
	.title-contact {
		font-size: 2em;
		font-weight: 700;
		color: #f34213;
	}
	.text-contact {
		font-size: 1em;
		font-weight: 500;
		cursor: pointer;
		color: rgba(150, 150, 150, 1);
	}
	.text-contact:hover {
		color: #fafafa;
	}
`;
