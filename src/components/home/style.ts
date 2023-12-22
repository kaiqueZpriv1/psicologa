import styled from 'styled-components';

export const HomeS = styled.main`
	width: 100%;
	.container-home {
		display: flex;
		padding: 150px 30px 0 30px;
		/* justify-content: center;
		align-content: center; */
	}
`;

export const TextHome = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 50%;
	.title-home {
		font-size: 3em;
		color: #242423;
		font-weight: 800;
	}
	.title-2 {
		margin: 0 10px;
		font-weight: 800;
		color: #f34213;
	}
	.paragrafo-home {
		font-size: 1em;
		color: #242423;
		font-weight: 500;
	}
	.btn-home {
		width: 200px;
		padding: 10px 25px;
		border-radius: 20px;
		background-color: #f34213;
		color: #fafafa;
        border: none;
        font-size: 1.5em;
	}
	.btn-home:hover {
		transform: scale(1.1);
		transition: 1s;
	}
`;

export const ImageHome = styled.div`
	display: flex;
	.img-principal {
		position: absolute;
		top: 127px;
		right: 50px;
		width: 500px;
	}
	.coracao-g {
		width: 80px;
		top: 175px;
		right: 390px;
		position: absolute;
		animation: coracao infinite linear 5s;
	}
	.coracao-p {
		width: 40px;
		right: 90px;
        top: 220px;
		position: absolute;
		animation: coracao infinite linear 2s;
	}
	@keyframes coracao {
		25% {
			transform: scale(1.1);
		}
		50% {
			transform: scale(0.9);
		}
		75% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(0.9);
		}
	}
`;

export const TopicosHome = styled.div`
	width: 100%;
    margin-top: 47px;
	padding: 20px 50px;
	background-color: #03045e;
	display: flex;
	justify-content: space-between;
	.box-topico {
		display: flex;
		flex-direction: column;
        align-items: center;
        justify-content: center;
		gap: 10px;
	}
	.text-topico {
		font-size: 1.5em;
		color: #fafafa;
		font-weight: 500;
	}
	.result-home {
		font-size: 2em;
		color: #fafafa;
		font-weight: 700;
	}
`;
