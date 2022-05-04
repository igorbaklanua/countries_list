import {countriesAPI} from "../../API/api";

const SET_COUNTRIES = 'SET_COUNTRIES'
const TOGGLE_IS_LOADING='TOGGLE_IS_LOADING'
const initialState = {
    countries: [],
    isLoading:false
};

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_COUNTRIES: {
            return {
                ...state, countries: action.payload.countries,
            };
        }
        case TOGGLE_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload.isLoading,
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
 const toggleIsLoadingAC = isLoading => ({
    type: TOGGLE_IS_LOADING,
    payload: {
        isLoading,
    },
});

export const getCountries = () => {
    return dispatch => {
        dispatch(toggleIsLoadingAC(true))
        countriesAPI.fetchCountries().then(data => {
            dispatch(toggleIsLoadingAC(false));
            dispatch(setCountriesAC(data));


        });
    };
};