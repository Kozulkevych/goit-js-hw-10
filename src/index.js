import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import { createCardCountry, createListCountries } from './js/markup.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const inputSearch = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

inputSearch.addEventListener('input', debounce(onInputCountry, DEBOUNCE_DELAY));

function clearSearch() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}

function onInputCountry(e) {
  clearSearch();
  let inputValue = e.target.value.trim().toLowerCase();
  if (inputValue) {
    return fetchCountries(inputValue)
      .then(data => {
        if (data.length === 1) {
          return (countryInfo.innerHTML = createCardCountry(data));
        } else if (data.length >= 2 && data.length <= 10) {
          return (countryList.innerHTML = createListCountries(data));
        }
        return Notify.info(
          'Too many matches found. Please enter a more specific name'
        );
      })
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
      });
  }
}
