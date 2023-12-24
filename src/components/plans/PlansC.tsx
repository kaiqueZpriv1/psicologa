import React from 'react';
import { BoxPlans, PlansS } from './style';

import Img1 from './svg/box1.svg';
import Img2 from './svg/box2.svg';
import Img3 from './svg/box3.svg';

export const PlansC = () => {
	const ListPlans = [
		{
			id: 0,
			image: Img1,
			title: 'Lorem ipsum dolor sit amet',
			paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
			value: 'US$ 54,99',
		},
		{
			id: 0,
			image: Img2,
			title: 'Lorem ipsum dolor sit amet',
			paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
			value: 'US$ 119,99',
		},
		{
			id: 0,
			image: Img3,
			title: 'Lorem ipsum dolor sit amet',
			paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
			value: 'US$ 249,99',
		},
	];
	return (
		<PlansS>
			<div className='container-plans'>
				{ListPlans.map((item) => {
					return (
						<BoxPlans key={item.id}>
							<img src={item.image} alt='Plans' className='img-plans' />
							<div className='text-plans'>
								<h3 className='title-plans'>{item.title}</h3>
								<p className='paragrafo-plans'>{item.paragrafo}</p>
							</div>
							<span className='value-plans'>{item.value}</span>
						</BoxPlans>
					);
				})}
			</div>
		</PlansS>
	);
};
