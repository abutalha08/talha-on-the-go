import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    // console.log(countries);

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log("handleVisitedCountries clicked", country);
         const exists = visitedCountries.find(
        c => c.cca3.cca3 === country.cca3.cca3
    );

    if (!exists) {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    }

    const handleVisitedFlags = (flag) => {
        console.log('Visited Flags Clicked', flag);
        const exists = visitedFlags.includes(flag);

    if (!exists) {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
        
    }

    return (
        <div >
            <div className='content'>
                <h1>Talha on the go</h1>
                <h1>In the countries: {countries.length} </h1>
                <h2>Visited Countries:{visitedCountries.length}</h2>
                <h3>Total Flags visited: {visitedFlags.length} </h3>
            </div>
            <ol>
                {visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)}
            </ol>

            <div className='visitedFlagsBorder'>
                {visitedFlags.map(flag => <img className='visitedFlags' src={flag}></img>)}
            </div>

            <hr />

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}
                        handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}>


                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
