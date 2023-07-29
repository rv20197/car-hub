import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
			<div className='flex flex-col justify-between items-center flex-wrap sm:px-16 px-6 py-10'>
				<p>
					&copy;2023 Carhub. All Rights Reserved.
				</p>
				<p className='footer__copyrights-link'>
					Developed by <Link href="https://www.vatsalrajgor.com" target='_blank' className='text-gray-500'>Vatsal Rajgor</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
