import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    console.log(country.flags.flags.png)

    const handleVisited = ()=>{
        console.log('btn clicked')
    }
    return (
        <div className='country'>
            <img className='img' src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population} </p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"} </p>
            <button className='btn' onClick={handleVisited}>Not Visited</button>

        </div>
    );
};

export default Country;