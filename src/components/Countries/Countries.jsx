import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    // console.log(countries);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log("handleVisitedCountries clicked" ,country);
    }

    return (
        <div >
            <h1>In the countries: {countries.length} </h1>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}>

                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
