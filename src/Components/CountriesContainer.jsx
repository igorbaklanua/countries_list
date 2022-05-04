import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCountries} from "../REDUX/reducers/countriesReducer";
import Countries from "./Countries";


const CountriesContainer = React.memo(() => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);
    const countries = useSelector(state => state.countriesList.countries);
    console.log(countries)
    const [sortedCountries, setSortedCountries] = useState([])
    useEffect(() => {
        setSortedCountries(countries);
    }, [countries]);

    const onSorted = (sortType) => {

        switch (sortType) {
            case 'allCountries':
                return setSortedCountries(countries);
                break;
            case 'smallerThanLithuania':
                return setSortedCountries(countries.filter(item => item.area < 65300));
                break;
            case 'Oceania':
                return setSortedCountries(countries.filter(item => item.region === 'Oceania'));
                break;
            case 'A_Z':
                return setSortedCountries((countries.slice().sort((a, b) => (a.name > b.name ? 1 : -1))));
                break;
            case 'Z_A':
                return setSortedCountries(countries.slice().sort((a, b) => (b.name > a.name ? 1 : -1)));
                break;
            default:
                return setSortedCountries(countries);
        }
    }


    return (

        <Countries countries={sortedCountries} onSorted={onSorted}/>);
});
export default CountriesContainer;