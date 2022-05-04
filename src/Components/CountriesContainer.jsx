import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCountries} from "../REDUX/reducers/countriesReducer";
import Countries from "./Countries";
import Pagination from "./Pagination";


const CountriesContainer = React.memo(() => {
    const [sortedCountries, setSortedCountries] = useState([])
    const [curentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const countries = useSelector(state => state.countriesList.countries);
    const isLoading = useSelector(state => state.countriesList.isLoading)

    useEffect(() => {
        setSortedCountries(countries)
    }, [countries])

    const countriesPerPage = 8
    const lastCountryIndex = curentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = sortedCountries.slice(firstCountryIndex, lastCountryIndex)
    const paginate = pageNumber => setCurrentPage((pageNumber))
    // const nextPage = () => setCurrentPage(prev => prev + 1)
    // const prevPage = () => setCurrentPage(prev => prev - 1)
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

        <div className='container mt-5'>
            <Countries countries={currentCountry} onSorted={onSorted} isLoading={isLoading}/>
            <Pagination
                countriesPerPage={countriesPerPage}
                totalCountries={sortedCountries.length}
                paginate={paginate}
                currentPage={curentPage}/>
            {/*<button className='btn btn-primary' onClick={prevPage}>Prev</button>*/}
            {/*<button className='btn btn-primary ms-3' onClick={nextPage}>Next</button>*/}
        </div>
    );
});
export default CountriesContainer;