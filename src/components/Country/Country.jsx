import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    // console.log(country.flags.flags.png)
    // console.log(handleVisitedCountries)

    const [visited, setVisited] = useState(false) //for Not visited button 

     const [flagAdded, setFlagAdded] = useState(false);


    const handleVisited = () => {
        // console.log('btn clicked')

        //1. Basic System for toggling button 
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)

        // }

        //2
        // setVisited(visited ? false : true)

        //3
        setVisited(!visited)
        handleVisitedCountries(country);

    }

     const handleFlag = () => {
        setFlagAdded(!flagAdded); // flag added mark
        handleVisitedFlags(country.flags.flags.png);
        
     }


    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img className='img' src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population} </p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"} </p>
            <div className='flexBtn'>
                <button className={`btn ${visited ? "visited" : "not-visited"}`} onClick={handleVisited}>
                    {visited ? 'Visited' : 'Not Visited'}
                </button>
                <button onClick={handleFlag} className={`btn ${flagAdded ? "visitedFlag" : "notVisitedFlag"}`}>
                    {flagAdded ? 'Flag Added' : 'Add Visited Flag'}
                </button>
            </div>

        </div>
    );
};

export default Country;