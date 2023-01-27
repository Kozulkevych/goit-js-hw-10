export function createCardCountry(data) {
  return data
    .map(({ flags, name, capital, population, languages }) => {
      return `<div class="card__box">         
        <img class="card__img" width=30 height=20 src="${
          flags.svg
        }" alt="flag of ${name.official}">
        <h2 class="card__name">${name.official}</h2>
          </div>
        <p class="card__capital">Capital: ${capital}</p>
        <p class="card__population">Population: ${population}</p>
        <p class="card__languages">Languages: ${Object.values(languages)}</p>
        `;
    })
    .join('');
}

export function createListCountries(data) {
  return data
    .map(({ flags, name }) => {
      return ` <li class="country-list__item">
        <div class="country-list__img-box">          
        <img class="country-list__img" width=30 height=20 src="${flags.svg}" alt="flag of ${name.official}">
        </div>
        <h2 class="country-list__name">${name.official} </h2>
        </li>`;
    })
    .join('');
}
