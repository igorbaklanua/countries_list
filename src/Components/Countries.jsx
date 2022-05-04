import React from 'react';
import styles from './styles.module.css';

const Countries = ({countries, onSorted}) => {
    return (
        <>
        <h1>List of countries</h1>
        <div>
            <div>
                <button onClick={()=>onSorted('allCountries')}>All countries</button>
                <button onClick={()=>onSorted('smallerThanLithuania')}>Smaller than Lithuania</button>
                <button onClick={()=>onSorted("Oceania")}>Oceania</button>
            </div>
            <button>
                <span onClick={()=>onSorted('A_Z')}>Sort A-Z</span>
            </button>
            <button>
                <span onClick={()=>onSorted('Z_A')}>Sort Z-A</span>

            </button>
        </div>

        <div className={styles.cards}>
            {countries.map((country) => {
                const {name, region, area} = country
                return <div key={name} className={styles.card}>
                    <p>Country: <b>{name}</b></p>
                    <p>Region: <b>{region}</b></p>
                    <p>Country area: <b>{area} km²</b></p>
                </div>
            })}
        </div>
    </>
    )}
export default Countries