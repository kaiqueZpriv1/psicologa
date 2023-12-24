import React from 'react';
import Global from './style/Global';
import { HeaderC } from './components/header/HeaderC';
import { HomeC } from './components/home/HomeC';
import { ServiceC } from './components/service/ServiceC';
import { AboutC } from './components/about/AboutC';
import { PlansC } from './components/plans/PlansC';
import { ContactC } from './components/contact/ContactC';

function App() {
	return (
		<div className='app'>
			<Global />
			<HeaderC />
			<HomeC />
			<ServiceC />
			<AboutC/>
			<PlansC/>
			<ContactC/>
		</div>
	);
}

export default App;
