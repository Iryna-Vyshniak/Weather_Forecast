import { format } from 'date-fns';

export function createMarkup({ name, main, sys, clouds, weather }) {
  const sunset = format(new Date(sys.sunset * 1000), 'H:m');
  const sunrise = format(new Date(sys.sunrise * 1000), 'H:m');
  const date = format(Date.now(), 'HH:mm BBBB cccc do MMMM yyyy');

  return /*html*/ `<li class="weather__item">
              <h2>${name}</h2>
              <h4 class="weather__main-forecast">${weather[0].main}</h4>
          </li>
         <li>
         <img src="https://openweathermap.org/img/wn/${
           weather[0].icon
         }@2x.png" alt="${weather[0].description}" />
         </li>
          <li class="weather__item">
         
              <p class="sunrise-time">Sunrise: ${sunrise}</p>
          </li>
          <li class="weather__item">
              <p class="sunset-time">Sunset: ${sunset}</p>
          </li>
          <li class="weather__item">
              <p class="clouds">Clouds: ${clouds.all}%</p>
          </li>
          <li>
           <h3>${main.temp.toFixed(1)} <sup>&#176;</sup></h3>
        <div class="temp-container">
        <div>
            <h4 class="title">min</h4>
            <h4 class="temp">${main.temp_min.toFixed(1)}<sup>&#176;</sup></h4>
        </div>
        <div>
            <h4 class="title">max</h4>
            <h4 class="temp">${main.temp_max.toFixed(1)}<sup>&#176;</sup></h4>
        </div>
        </div>
          </li>
          <li class="weather__item"><p class="date">${date}</p></li>`;
}
