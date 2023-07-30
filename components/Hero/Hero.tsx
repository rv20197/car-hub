'use client';
import CustomButton from '../CustomButton/CustomButton';
import Image from 'next/image';

const Hero = () => {
	const handleScroll = () => {
		const carCatalogue = document.getElementById('discover');
		window.scrollTo({
			top: carCatalogue?.offsetTop,
			behavior: 'smooth'
		});
	};

	return (
		<div className='hero'>
			<div className='flex-1 pt-36 padding-x'>
				<h1 className='hero__title'>
					Explore All the details of your favorite car -- quickly and easily!
				</h1>
				<p className='hero__subtitle'>
					Let us help you to decide which car to buy and which one is the
					correct choice for you.
				</p>

				<CustomButton
					title='Explore Cars'
					containerStyles='bg-primary-blue text-white rounded-full mt-10'
					handleClick={handleScroll}
				/>
			</div>

			<div className='hero__image-container'>
				<div className='hero__image'>
					<Image
						src='/hero.png'
						alt={'hero'}
						fill
						className='object-contain'
						priority={true}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
				<div className='hero__image-overlay' />
			</div>
		</div>
	);
};

export default Hero;
