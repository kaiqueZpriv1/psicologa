import React from 'react';
import { HeaderC } from '../components/header/HeaderC';
import { AboutC } from '../components/about/AboutC';
import { ContactC } from '../components/contact/ContactC';
import Global from '../style/Global';

export const About = () => {
	return (
		<>
		<Global/>
			<HeaderC />
			<AboutC />
			<ContactC />
		</>
	);
};
