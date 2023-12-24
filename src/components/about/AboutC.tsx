import React from 'react';
import { AboutS, ImgAbout, TextAbout } from './style';
import AboutSvg from './svg/about.svg'
import {AiOutlineCheck} from 'react-icons/ai'
export const AboutC = () => {
	return (
		<AboutS>
			<div className='container-about'>
				<ImgAbout>
					<img src={AboutSvg} alt='about' className='img-about' />
				</ImgAbout>
				<TextAbout>
					<h3 className='title-about'>About Us</h3>
					<p className='paragrafo-about'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
						feugiat libero. Nam magna leo, cursus vel orci at, varius varius
						nibh. Nunc ornare enim vitae nisi mollis, non scelerisque diam
						condimentum. Suspendisse a odio dapibus, cursus nulla eu, tristique
						eros. Maecenas magna justo, efficitur imperdiet eros at, aliquam
						condimentum turpis. Donec laoreet velit quis dolor vulputate
						dapibus. Praesent vulputate nec ipsum et condimentum. Vestibulum
						placerat ipsum sed quam tempor aliquam. Curabitur sed risus vitae mi
						vestibulum posuere sit amet in dolor. Ut non ipsum vulputate, tempus
						nunc vitae, malesuada mauris.
					</p>
					<div className='topicos-about'>
						<p className='text-topico'>
							<AiOutlineCheck size={20} color='#03045e' />
							Lourem ipsum dolor sit amet
						</p>
						<p className='text-topico'>
							<AiOutlineCheck size={20} color='#03045e' />
							Lourem ipsum dolor sit amet
						</p>
						<p className='text-topico'>
							<AiOutlineCheck size={20} color='#03045e' />
							Lourem ipsum dolor sit amet
						</p>
						<p className='text-topico'>
							<AiOutlineCheck size={20} color='#03045e' />
							Lourem ipsum dolor sit amet
						</p>
						<p className='text-topico'>
							<AiOutlineCheck size={20} color='#03045e' />
							Lourem ipsum dolor sit amet
						</p>
					</div>
				</TextAbout>
			</div>
		</AboutS>
	);
};
