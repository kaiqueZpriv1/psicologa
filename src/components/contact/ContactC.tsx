import React from 'react';
import { BoxingContact, ContactS } from './style';
import { Logo } from '../logo/Logo';
import { Link } from 'react-router-dom';

export const ContactC = () => {
	return (
		<ContactS>
			<Logo />
			<div className='container-contact'>
				<BoxingContact>
					<h3 className='title-contact'>Pages</h3>
					<Link to='/'>
						<p className='text-contact'>Home</p>
					</Link>
					<Link to='/Service'>
						<p className='text-contact'>Service</p>
					</Link>
					<Link to='/About'>
						<p className='text-contact'>About Us</p>
					</Link>
					<Link to='/Plans'>
						<p className='text-contact'>Plans</p>
					</Link>
				</BoxingContact>
				<BoxingContact>
					<h3 className='title-contact'>Redes Sociais</h3>
					<p className='text-contact'>WhatsApp</p>
					<p className='text-contact'>Instagram</p>
					<p className='text-contact'>Linkedin</p>
					<p className='text-contact'>Twitter</p>
				</BoxingContact>
				<BoxingContact>
					<p className='text-contact'>CNPJ: 99.999.999</p>
					<p className='text-contact'>MindFulcare LTDA</p>
					<p className='text-contact'>+1 9999-99999</p>
					<p className='text-contact'>Orlando, EUA</p>
				</BoxingContact>
			</div>
		</ContactS>
	);
};
