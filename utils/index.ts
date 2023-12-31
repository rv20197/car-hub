import { carProps } from '../components/CarCard/CarCard';

export interface FilterInterface {
	manufacturer?: string;
	year?: number;
	fuel?: string;
	limit?: number;
	model?: string;
}

export async function fetchCars(filters: FilterInterface) {
	const { manufacturer, year, model, limit, fuel } = filters;
	const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'dc52d3cafamshb64ecaae217441cp1bef1cjsnd8e9b5a392e9',
			'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
		}
	};
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result;
	} catch (error) {
		return error;
	}
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: carProps['car'], angle?: string) => {
	const url = new URL('https://cdn.imagin.studio/getimage');
	const { make, year, model } = car;

	url.searchParams.append('customer', 'hrjavascript-mastery');
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(' ')[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	url.searchParams.append('angle', `${angle}`);

	return `${url}`;
};

export const updateSearchParams = (title: string, value: string) => {
	const searchParams = new URLSearchParams(window.location.search);
	searchParams.set(title, value);

	const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

	return newPathname;
};
