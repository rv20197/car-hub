'use client';
import React from 'react';
import SearchManufacturer from '../SearchManufacturer/SearchManufacturer';

type Props = {};

const SearchBar = (props: Props) => {
	const [manufacturer, setManufacturer] = React.useState('')

	const handlerSearch = () => {};

	return <form className='search-bar' onSubmit={handlerSearch}>
		<div className='search-bar__item'>
			<SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
		</div>
	</form>;
};

export default SearchBar;
