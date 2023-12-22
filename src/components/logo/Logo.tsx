import React from 'react';
import styled from 'styled-components';
import LogoImg from './svg/logo.svg';
export const Logo = () => {
	const LogoS = styled.div`
		display: flex;
		.image-logo {
			width: 30px;
		}
		.text-logo {
			font-size: 2em;
			color: #f34213;
		}
	`;
	return (
		<LogoS>
			<img src={LogoImg} alt='logo type' className='image-logo' />
			<h3 className='text-logo'>Mindfulcare</h3>
		</LogoS>
	);
};
