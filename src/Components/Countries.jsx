import React from 'react';


const Countries = ({countries, onSorted, isLoading}) => {

    if (isLoading) {
        return <h2>LOADING...</h2>
    }
    return (<>
            <h1 className='text-primary'>List of countries</h1>
            <div>
                <div>
                    <button className='btn btn-secondary ' onClick={() => onSorted('allCountries')}>All countries
                    </button>
                    <button className='btn btn-secondary ms-2' onClick={() => onSorted('smallerThanLithuania')}>Smaller
                        than Lithuania
                    </button>
                    <button className='btn btn-secondary ms-2' onClick={() => onSorted("Oceania")}>Oceania</button>
                    <button className='btn btn-secondary ms-2' onClick={() => onSorted('A_Z')}>A-Z</button>
                    <button className='btn btn-secondary ms-2' onClick={() => onSorted('Z_A')}>Z-A</button>

                </div>

            </div>

            <div className='list-group mb-2'>
                {countries.map((country) => {
                    const {name, region, area} = country
                    return <div key={name} className='list-group-item'>
                        <p>Country: <b>{name}</b></p>
                        <p>Region: <b>{region}</b></p>
                        <p>Country area: <b>{area} km²</b></p>
                    </div>
                })}
            </div>
        </>
    )
}
export default Countries