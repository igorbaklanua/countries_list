import {countriesAPI} from "../../API/api";

const SET_COUNTRIES = 'SET_COUNTRIES'

const initialState = {
    countries: [],
};

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_COUNTRIES: {
            return {
                ...state, countries: action.payload.countries,
            };
        }

        default:
            return state;
    }
};
const setCountriesAC = countries => ({
    type: SET_COUNTRIES, payload: {
        countries,
    },
});

export const getCountries = () => {
    return dispatch => {
        countriesAPI.fetchCountries().then(data => {
            dispatch(setCountriesAC(data));
            ;
        });
    };
};