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
                <button type={'radio'} onClick={()=>onSorted('A_Z')}>A-Z</button>
                <button type={'radio'} onClick={()=>onSorted('Z_A')}>Z-A</button>

            </div>

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