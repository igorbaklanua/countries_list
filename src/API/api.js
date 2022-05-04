import axios from "axios";


const instance = axios.create({
    withCredentials: false, baseURL: 'https://restcountries.com/v2/',
});

export const countriesAPI = {
    fetchCountries() {
        return instance.get(`all?fields=name,region,area`).then(response => {
            return response.data;
        });
    }
}