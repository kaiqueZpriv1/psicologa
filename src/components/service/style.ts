import styled from 'styled-components';

export const ServiceS = styled.section`
	width: 100%;
	padding: 100px 0;
	.container-service {
		align-items: center;
		justify-content: center;
		display: grid;
		grid-template-columns: 350px 400px 350px;
	}
`;

export const BoxService = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	border: 1px solid #03045e;
	padding: 15px;
	border-radius: 15px;
	.img-service {
		width: 100px;
	}
	.title-service {
		font-size: 2em;
		color: #f34213;
		font-weight: 700;
	}
	.paragrafo-service {
		font-size: 1em;
		font-weight: 500;
		color: #fafafa;
	}
	.btn-service {
		margin-top: 20px;
		background-color: transparent;
		border: none;
		font-size: 1.3em;
		color: #fafafa;
		display: flex;
		gap: 10px;
	}
	.icon-service {
		position: relative;
		top: 3px;
	}
`;
