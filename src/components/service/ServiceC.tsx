import React from 'react';
import { BoxService, ServiceS } from './style';

import Service1Svg from './svg/service1.svg';
import Service2Svg from './svg/service2.svg';
import Service3Svg from './svg/service3.svg';

import { AiOutlineRight } from 'react-icons/ai';
export const ServiceC = () => {
	return (
		<ServiceS>
			<div className='container-service'>
				<BoxService
					style={{
						height: '380px',
						paddingRight: '50px',
						position: 'relative',
						left: '20px',
					}}>
					<img src={Service1Svg} alt='service' className='img-service' />
					<h3 className='title-service'>Holistic approach</h3>
					<p style={{ color: '#000' }} className='paragrafo-service'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						dapibus tortor at viverra facilisis.
					</p>
					<button style={{ color: '#000' }} className='btn-service'>
						Read more
						<AiOutlineRight size={20} className='icon-service' />
					</button>
				</BoxService>
				<BoxService style={{ background: '#03045e', height: '450px' }}>
					<img src={Service2Svg} alt='service' className='img-service' />
					<h3 className='title-service'>Holistic approach</h3>
					<p className='paragrafo-service'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						dapibus tortor at viverra facilisis.
					</p>
					<button className='btn-service'>
						Read more
						<AiOutlineRight size={20} className='icon-service' />
					</button>
				</BoxService>
				<BoxService
					style={{
						height: '380px',
						paddingLeft: '50px',
						position: 'relative',
						right: '20px',
					}}>
					<img src={Service3Svg} alt='service' className='img-service' />
					<h3 className='title-service'>Holistic approach</h3>
					<p style={{ color: '#000' }} className='paragrafo-service'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						dapibus tortor at viverra facilisis.
					</p>
					<button style={{ color: '#000' }} className='btn-service'>
						Read more
						<AiOutlineRight size={20} className='icon-service' />
					</button>
				</BoxService>
			</div>
		</ServiceS>
	);
};
