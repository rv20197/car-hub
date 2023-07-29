'use client';
import { useRouter } from 'next/navigation';
import CustomButton from '../CustomButton/CustomButton';

type Props = {
	pageNumber: number;
	isNext: boolean;
	setLimit: (arg: number) => void;
};

const ShowMore = ({ pageNumber, isNext, setLimit }: Props) => {
	const router = useRouter();

	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10;
		setLimit(newLimit);
	};

	return (
		<div className='w-full flex-center gap-5 mt-10'>
			{!isNext && (
				<CustomButton
					title='Show More'
					btnType='button'
					containerStyles='bg-primary-blue rounded-full text-white'
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
};

export default ShowMore;
