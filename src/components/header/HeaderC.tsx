import React from 'react';
import { ButtonHeader, HeaderS, RouteHeader, TextHeader } from './style';
import { Logo } from '../logo/Logo';
import { Link } from 'react-router-dom';

export const HeaderC = () => {
	return (
		<HeaderS>
			<div className='container-header'>
				<Logo />
				<TextHeader>
					<Link to='/'>
						<RouteHeader>Home</RouteHeader>
					</Link>
					<Link to='/Service'>
						<RouteHeader>Service</RouteHeader>
					</Link>
					<Link to='/About'>
						<RouteHeader>About</RouteHeader>
					</Link>
					<Link to='/Plans'>
						<RouteHeader>Plans</RouteHeader>
					</Link>
				</TextHeader>
				<Link to='/Contact'>
					<ButtonHeader>Contact</ButtonHeader>
				</Link>
			</div>
		</HeaderS>
	);
};
