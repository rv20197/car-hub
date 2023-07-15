export async function fetchCars() {
	const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera';
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
