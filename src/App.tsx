import React from 'react';
import Global from './style/Global';
import { HeaderC } from './components/header/HeaderC';
import { HomeC } from './components/home/HomeC';
import { ServiceC } from './components/service/ServiceC';

function App() {
	return (
		<div className='app'>
			<Global />
			<HeaderC />
			<HomeC/>
			<ServiceC/>
		</div>
	);
}

export default App;
