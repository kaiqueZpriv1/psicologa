import styled from 'styled-components';

export const AboutS = styled.section`
	padding: 100px 0 0 0;
	width: 100%;
	.container-about {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const ImgAbout = styled.div`
        width: 50%;
        position: relative;
        left: 250px;
	.img-about {
        width: 400px;
	}
    `;

export const TextAbout = styled.div`
width: 50%;
	display: flex;
    gap: 20px;
	flex-direction: column;
    padding: 0 50px;
	.title-about {
		font-size: 2.5em;
		font-weight: 700;
		color: #f34213;
	}
	.paragrafo-about {
		font-size: 1em;
		font-weight: 500;
		color: #242423;
	}
	.topicos-about {
		display: flex;
		flex-direction: column;
        gap: 10px;
	}
	.text-topico {
		display: flex;
		gap: 10px;
		font-size: 1em;
		font-weight: 500;
	}
`;
