import React from 'react';
import { HeaderC } from '../components/header/HeaderC';
import { PlansC } from '../components/plans/PlansC';
import { ContactC } from '../components/contact/ContactC';
import Global from '../style/Global';

export const Service = () => {
	return (
		<>
			<Global />
			<HeaderC />
			<PlansC />
			<ContactC />
		</>
	);
};
