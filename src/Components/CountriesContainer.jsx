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
    let sortDispatch;
    switch (sortType) {
      case 'A_Z':
        sortDispatch = dispatch(setSortTypeAtoZ());
        break;
      case 'Z_A':
        sortDispatch = dispatch(setSortTypeZtoA());
        break;

      case 'smallerThanLithuania':
        sortDispatch = dispatch(setSortTypeSmalerThanLituen());
        break;

      case 'Oceania':
        sortDispatch = dispatch(setSortTypeOceania());
        break;
      default:
        sortDispatch = dispatch(getCountries());
    }
    return sortDispatch, setCurrentPage(1), setCountriesToRender(sortedCountriesList);
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
