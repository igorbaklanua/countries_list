import {countriesAPI} from "../../API/api";

const SET_COUNTRIES = 'SET_COUNTRIES'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const SORT_TYPE_OCEANIA = 'SORT_TYPE_OCEANIA'
const SORT_TYPE_LITUENIAN = 'SORT_TYPE_LITUENIAN'
const SORT_TYPE_A_Z = 'SORT_TYPE_A_Z'
const SORT_TYPE_Z_A = 'SORT_TYPE_Z_A'
const initialState = {
    countries: [],
    isLoading: false,
    sortedList: []
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
                ...state, isLoading: action.payload.isLoading,
            };
        }
        case SORT_TYPE_OCEANIA: {
            return {
                ...state,
                sortedList: state.countries.filter(item => item.region === 'Oceania')
            }
        }
        case SORT_TYPE_LITUENIAN: {
            return {
                ...state,
                sortedList: state.countries.filter(item => item.area < 65300)
            }
        }
        case SORT_TYPE_A_Z: {
            return {
                ...state,
                sortedList: state.countries.slice().sort((a, b) => (a.name > b.name ? 1 : -1))
            }
        }
        case SORT_TYPE_Z_A: {
            return {
                ...state,
                sortedList: state.countries.slice().sort((a, b) => (b.name > a.name ? 1 : -1))
            }
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
    type: TOGGLE_IS_LOADING, payload: {
        isLoading,
    },
});
export const setSortTypeOceania = () => ({
    type: SORT_TYPE_OCEANIA,
})
export const setSortTypeSmalerThanLituen = () => ({
    type: SORT_TYPE_LITUENIAN,
})
export const setSortTypeAtoZ = () => ({
    type: SORT_TYPE_A_Z,
})
export const setSortTypeZtoA = () => ({
    type: SORT_TYPE_Z_A,
})
export const getCountries = () => {
    return dispatch => {
        dispatch(toggleIsLoadingAC(true))
        countriesAPI.fetchCountries().then(data => {
            dispatch(toggleIsLoadingAC(false));
            dispatch(setCountriesAC(data));
            dispatch(setSortTypeAtoZ())


        });
    };
};