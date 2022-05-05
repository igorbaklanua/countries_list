import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCountries,
  setSortTypeAtoZ,
  setSortTypeOceania,
  setSortTypeSmalerThanLituen,
  setSortTypeZtoA,
} from '../REDUX/reducers/countriesReducer';
import Countries from './Countries';
import Pagination from './Pagination';
import Header from './Header';

const CountriesContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  const sortedCountriesList = useSelector(state => state.countriesList.sortedList);
  const [countriesToRender, setCountriesToRender] = useState([]);
  const isLoading = useSelector(state => state.countriesList.isLoading);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCountriesToRender(sortedCountriesList);
  }, [sortedCountriesList]);
  const onSorted = sortType => {
    switch (sortType) {
      case 'A_Z':
        return (
          setCurrentPage(1), dispatch(setSortTypeAtoZ()), setCountriesToRender(sortedCountriesList)
        );
      case 'Z_A':
        return (
          setCurrentPage(1), dispatch(setSortTypeZtoA()), setCountriesToRender(sortedCountriesList)
        );
      case 'smallerThanLithuania':
        return (
          setCurrentPage(1),
          dispatch(setSortTypeSmalerThanLituen()),
          setCountriesToRender(sortedCountriesList)
        );
      case 'Oceania':
        return (
          setCurrentPage(1),
          dispatch(setSortTypeOceania()),
          setCountriesToRender(sortedCountriesList)
        );
      default:
        return setCountriesToRender(sortedCountriesList);
    }
  };
  const countriesPerPage = 7;
  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = countriesToRender.slice(firstCountryIndex, lastCountryIndex);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  if (isLoading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div className="container mt-5">
      <Header onSorted={onSorted} />
      <Countries countries={currentCountry} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countriesToRender.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CountriesContainer;
