import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCountries} from "../REDUX/reducers/countriesReducer";
import Countries from "./Countries";
import Pagination from "./Pagination";


const CountriesContainer = React.memo(() => {
    const [sortedCountries, setSortedCountries] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const countries = useSelector(state => state.countriesList.countries);
    const isLoading = useSelector(state => state.countriesList.isLoading)

    useEffect(() => {
        setSortedCountries(countries)
    }, [countries])

    const countriesPerPage = 7
    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = sortedCountries.slice(firstCountryIndex, lastCountryIndex)
    const paginate = pageNumber => setCurrentPage((pageNumber))
    const onSorted = (sortType) => {

        switch (sortType) {
            case 'A_Z':
                return (setCurrentPage(1), setSortedCountries(countries.slice().sort((a, b) => (a.name > b.name ? 1 : -1))))

            case 'Z_A':
                return (setCurrentPage(1), setSortedCountries(countries.slice().sort((a, b) => (b.name > a.name ? 1 : -1))))

            case 'smallerThanLithuania':
                return (setCurrentPage(1), setSortedCountries(countries.filter(item => item.area < 65300)))

            case 'Oceania':
                return (setCurrentPage(1), setSortedCountries(countries.filter(item => item.region === 'Oceania')))

            default:
                return setSortedCountries(countries);
        }

    }
    return (

        <div className='container mt-5'>
            <Countries countries={currentCountry} onSorted={onSorted} isLoading={isLoading}/>
            <Pagination
                countriesPerPage={countriesPerPage}
                totalCountries={sortedCountries.length}
                paginate={paginate}
                currentPage={currentPage}/>
        </div>);
});

export default CountriesContainer;