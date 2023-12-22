import React from 'react';
import { HomeS, ImageHome, TextHome, TopicosHome } from './style';

import ImagePrincipal from './svg/imgPrincipal.svg';
import CoracaoG from './svg/coracao-G.svg';
import CoracaoP from './svg/coracao-p.svg';

export const HomeC = () => {
	return (
		<HomeS>
			<div className='container-home'>
				<TextHome>
					<h3 className='title-home'>
						Being completely
						<span className='title-2'>honest with yourself</span> is a good
						exercise.
					</h3>
					<p className='paragrafo-home'>
						Being a psychologist means listening, <br /> advising and guiding in
						the search for answers !
					</p>
					<button className='btn-home'>Get started</button>
				</TextHome>
				<ImageHome>
					<img src={ImagePrincipal} alt='psicologo' className='img-principal' />

					<img src={CoracaoG} alt='psicologo' className='coracao-g' />

					<img src={CoracaoP} alt='psicologo' className='coracao-p' />
				</ImageHome>
			</div>
			<TopicosHome>
				<div className='box-topico'>
					<h3 className='text-topico'>experienced</h3>
					<h3 className='result-home'>8 +</h3>
				</div>
				<div className='box-topico'>
					<h3 className='text-topico'>Team</h3>
					<h3 className='result-home'>122 +</h3>
				</div>
				<div className='box-topico'>
					<h3 className='text-topico'>Client</h3>
					<h3 className='result-home'>544 +</h3>
				</div>
				<div className='box-topico'>
					<h3 className='text-topico'>Project done</h3>
					<h3 className='result-home'>232 +</h3>
				</div>
			</TopicosHome>
		</HomeS>
	);
};
