import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { createMarkup } from './app/createMarkup';
import { getWeatherByCoords, getWeatherByQuery } from './app/weatherAPI';
import { setBackground } from './app/setBackground';
import { getPlaceInfo } from './app/getPlaceInfo';

const weatherList = document.querySelector('[data-list]');
const form = document.querySelector('[data-weather]');

navigator.geolocation?.getCurrentPosition(({ coords }) => {
  const { latitude, longitude } = coords;

  getWeatherByCoords(latitude, longitude).then(
    // data => console.log(data)
    data => (weatherList.innerHTML = createMarkup(data))
  );

  getPlaceInfo(latitude, longitude).then(({ results }) => {
    const { components } = results[0];
    const place = components?.city ?? components?.country;
    setBackground(place);
  });
});

const handleSubmit = e => {
  e.preventDefault();

  const {
    query: { value: query },
  } = e.currentTarget.elements;
  //   console.log(query);

  const searchQuery = query.trim().toLowerCase();
  //console.log(searchQuery);

  if (!searchQuery) {
    Notify.failure('Enter city name');
    return;
  }

  setBackground(searchQuery);

  getWeatherByQuery(searchQuery)
    .then(data => (weatherList.innerHTML = createMarkup(data)))
    // .then(data => (weatherList.innerHTML = createMarkup(data)))
    .catch(err => (weatherList.innerHTML = createErrorMarkup()));
};

function createErrorMarkup() {
  return `<li><h3 class="msg">City not found</h3></li>`;
}

form.addEventListener('submit', handleSubmit);
