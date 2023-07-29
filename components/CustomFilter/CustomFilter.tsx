'use client';
import { useState, Fragment, SetStateAction } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import { updateSearchParams } from '../../utils';

type Options = {
	title: string;
	value: string;
};

type Props = {
	title: string;
	options: Options[];
};

const CustomFilter = ({ title, options }: Props) => {
	const [selected, setSelected] = useState(options[0]);
	const router = useRouter();

	const handleUpdateParams = (e: { title: string; value: string }) => {
		const newPathName = updateSearchParams(title, e.value.toLowerCase());
		router.push(newPathName);
	};

	const selectChangeHandler = (e: SetStateAction<Options>) => {
		setSelected(e);
		handleUpdateParams(e as Options);
	};

	return (
		<div className='w-fit'>
			<Listbox value={selected} onChange={selectChangeHandler}>
				<div className='relative w-fit z-10'>
					<Listbox.Button className='custom-filter__btn'>
						<span className='block truncate'>{selected.title}</span>
						<Image
							src='/chevron-up-down.svg'
							alt='Chevron Up Down'
							width={20}
							height={20}
							className='ml-4 object-contain'
						/>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<Listbox.Options className='custom-filter__options'>
							{options.map((option, index) => (
								<Listbox.Option
									key={index}
									value={option}
									className={({ active }) =>
										`relative cursor-default select-none py-2 px-4 ${
											active ? 'bg-primary-blue text-white' : 'text-gray-900'
										}`
									}>
									{({ selected }) => (
										<span
											className={`block truncate ${
												selected ? 'font-medium' : 'font-normal'
											}`}>
											{option.title}
										</span>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};

export default CustomFilter;
