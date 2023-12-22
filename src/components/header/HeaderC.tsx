import React from 'react';
import { ButtonHeader, HeaderS, RouteHeader, TextHeader } from './style';
import { Logo } from '../logo/Logo';

export const HeaderC = () => {
	return (
		<HeaderS>
			<div className='container-header'>
				<Logo />
				<TextHeader>
					<RouteHeader>Home</RouteHeader>
					<RouteHeader>Service</RouteHeader>
					<RouteHeader>About</RouteHeader>
					<RouteHeader>Plans</RouteHeader>
				</TextHeader>
				<ButtonHeader>Contact</ButtonHeader>
			</div>
		</HeaderS>
	);
};
