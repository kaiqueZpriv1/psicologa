import styled from 'styled-components';

export const PlansS = styled.section`
	padding: 200px 0 0 0;
	.container-plans {
		display: flex;
		flex-direction: column;
		gap: 30px;
		align-items: center;
	}
`;

export const BoxPlans = styled.div`
	border-radius: 10px;
	box-shadow: 0 0 5px #000;
	display: flex;
    gap: 20px;
	padding: 25px 50px;
	width: 800px;
	.img-plans {
		width: 60px;
		border-radius: 100%;
	}
	.text-plans {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.title-plans {
		font-size: 1.5em;
		font-weight: 700;
		color: #f34213;
	}
	.paragrafo-plans {
		font-size: 1em;
		font-weight: 500;
		color: #242423;
	}
	.value-plans {
		font-size: 1.5em;
		color: #242423;
		position: relative;
		left: 175px;
        top: 25px;
	}
`;
