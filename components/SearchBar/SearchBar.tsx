'use client';
import React, { useState } from 'react';
import SearchManufacturer from '../SearchManufacturer/SearchManufacturer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type searchBarProps = {
	setManuFacturer: (arg: string) => void;
	setModel: (arg: string) => void;
};

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
	<button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
		<Image
			src={'/magnifying-glass.svg'}
			alt='magnifying-glass'
			width={40}
			height={40}
			className='object-contain'
		/>
	</button>
);

const SearchBar = ({ setManuFacturer, setModel }: searchBarProps) => {
	const [searchManufacturer, setSearchManufacturer] = useState('');
	const [searchModel, setSearchModel] = useState('');
	const router = useRouter();

	const handlerSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchManufacturer === '' && searchModel === '') {
			return alert('Please fill in the search bar');
		}

		setModel(searchModel);
		setManuFacturer(searchManufacturer);
	};

	return (
		<form className='search-bar' onSubmit={handlerSearch}>
			<div className='search-bar__item'>
				<SearchManufacturer
					manufacturer={searchManufacturer}
					setManufacturer={setSearchManufacturer}
				/>
				<SearchButton otherClasses='sm:hidden' />
			</div>
			<div className='search-bar__item'>
				<Image
					src='/model-icon.png'
					width={25}
					height={25}
					className='absolute w-[20px] h-[20px] ml-4'
					alt='car model'
				/>
				<input
					type='text'
					name='model'
					value={searchModel}
					onChange={e => setSearchModel(e.target.value)}
					placeholder='Tiguan...'
					className='search-bar__input'
				/>
				<SearchButton otherClasses='sm:hidden' />
			</div>
			<SearchButton otherClasses='max-sm:hidden' />
		</form>
	);
};

export default SearchBar;
